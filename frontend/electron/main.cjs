const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadURL('http://localhost:5173'); 
}

app.whenReady().then(() => {
  createWindow();
});
