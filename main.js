const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    titleBarStyle: "customButtonsOnHover",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
}

app.on("ready", createWindow);
