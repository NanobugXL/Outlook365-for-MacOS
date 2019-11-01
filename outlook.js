// http://electron.atom.io/docs/api
const {app, BrowserWindow} = require('electron') 

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
    width: 1280,
    // The initial height to 600px
    height: 720,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    darkTheme: true,


    webPreferences: {
      // Disable node integration in remote page
      nodeIntegration: false,

    }
  })
  // and load the index.html of the app.
// Or load a local HTML file
// win.loadURL(`file://${__dirname}/app/index.html`)
  // URL is argument to npm start
  // const url = process.argv[2]
  window.loadURL("https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fmail%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=0&client-request-id=3ae7e061-61e2-4918-97c5-bd3bcbed47eb&protectedtoken=true&nonce=637082270328051969.64d71e0a-6bd0-4e36-9935-20e0b87c9937&state=DYs5EoAgDABBS98SCQET8hwQCmY8Wp9vit2ZLdY751ZjMTyanHASLESCiQoeUVl3zl3iwArcOkIeiUE1HUA4sBU5LcTbu4W7zivMp73fDw")
  title: "Outlook for Business, Schools & Orginizations",
  // Show window when page is ready
  window.once('ready-to-show', () => {
    // Uncomment below if you want this to auto-full screen
    // window.maximize()
    window.show()
  })
})