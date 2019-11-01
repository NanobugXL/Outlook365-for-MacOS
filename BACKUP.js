const {app, BrowserWindow} = require('electron') // http://electron.atom.io/docs/api

let window = null
// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    // The initial width to 800px
    width: 500,
    // The initial height to 600px
    height: 750,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    darkTheme: true,
    

    webPreferences: {
      
      // Disable node integration in remote page
      nodeIntegration: false,
      
    }
  })
  // and load the index.html of the app.
  win.loadFile('index.html')
  // URL is argument to npm start
  const url = process.argv[2]
  // window.loadURL("https://messenger.com/")



  // Show window when page is ready
  window.once('ready-to-show', () => {
    
    // Uncomment below if you want this to auto-full screen
    // window.maximize()
    window.show()
  })
})