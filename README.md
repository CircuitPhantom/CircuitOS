# CircuitOS

A browser-based Web OS shell — windows, a live topbar clock, and a desktop UI, built with nothing but HTML, CSS, and JavaScript.

<img width="1919" height="1079" alt="Ekran görüntüsü 2026-08-13 150356" src="https://github.com/user-attachments/assets/d4ae2595-3782-41cb-925f-125d69d70537" />


**[Try it live here](https://circuitphantom.github.io/CircuitOS/)**

## Quick start

Just open the link above — nothing to install.

To run it locally instead:

```bash
git clone https://github.com/CircuitPhantom/CircuitOS.git
cd CircuitOS
```

Then open `index.html` in a browser, or serve the folder with VS Code's Live Server.

## Features

- Draggable "window" UI (starting with the welcome window)
- Live topbar clock and date, updating every second
- Closable windows with a custom titlebar and close button
- Orbitron-based UI typography for a distinct OS look
- Zero dependencies — pure HTML/CSS/JS, runs entirely client-side

## Tech stack

HTML, CSS, and JavaScript. No frameworks, no backend, no build step.

## How it works

The whole shell is static: `index.html` renders the topbar and window DOM, `styles.css` handles the OS-like chrome (rounded window frames, blurred titlebars), and `script.js` drives the interactive bits — dragging windows and closing them. The clock is a simple `setInterval` that re-renders the topbar every second, no external time library needed.

## Status

Early stage — this is a [Stardance](https://stardance.hackclub.com/) mission on Hack Club. Right now CircuitOS has one functional window (Welcome) with dragging and closing; more OS-like windows/apps are planned next.

## License

[MIT](LICENSE)
