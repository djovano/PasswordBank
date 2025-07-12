const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'src/electron.js'),
    },
  });

  win.loadURL('http://localhost:5173'); // Vite dev server
}

app.whenReady().then(createWindow);