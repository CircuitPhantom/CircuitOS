//-------------------------------------------------------//
// Dragging
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//-------------------------------------------------------//
// Open / Close
function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function makeClosable(elementName) {
  var screen = document.querySelector("#" + elementName)
  var openBtn = document.querySelector("#" + elementName + "open")
  var closeBtn = document.querySelector("#" + elementName + "close")

  if (openBtn) {
    openBtn.addEventListener("click", function() {
      openWindow(screen)
    })
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      closeWindow(screen)
    })
  }
}

//-------------------------------------------------------//
// Desktop icons
var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
}

function deselectIcon(element) {
  if (!element) return;
  element.classList.remove("selected");
  selectedIcon = undefined
}

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}

//-------------------------------------------------------//
// Z-index / focus
var biggestIndex = 100;
var topBar = document.querySelector("#topbar")

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

function handleWindowTap(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}

//-------------------------------------------------------//
// Init
function initializeWindow(elementName) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(screen)
  makeClosable(elementName)
  dragElement(screen)
}

initializeWindow("welcome")
initializeWindow("todos")

//-------------------------------------------------------//
// Todo list
var todoInput = document.querySelector("#todoInput")
var todoAddBtn = document.querySelector("#todoAddBtn")
var todoClearBtn = document.querySelector("#todoClearBtn")
var todoList = document.querySelector("#todoList")
var todoCounter = 0

function addTodo(text) {
  if (!text || text.trim() === "") return

  todoCounter++
  var todoId = "todo" + todoCounter

  var wrapper = document.createElement("div")

  var checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.id = todoId

  var label = document.createElement("label")
  label.setAttribute("for", todoId)
  label.textContent = " " + text

  wrapper.appendChild(checkbox)
  wrapper.appendChild(label)
  todoList.appendChild(wrapper)

  checkbox.addEventListener("change", function() {
    label.style.textDecoration = checkbox.checked ? "line-through" : "none"
  })
}

todoAddBtn.addEventListener("click", function() {
  addTodo(todoInput.value)
  todoInput.value = ""
})

todoClearBtn.addEventListener("click", function() {
  todoList.innerHTML = ""
  todoCounter = 0
})

todoInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    addTodo(todoInput.value)
    todoInput.value = ""
  }
})