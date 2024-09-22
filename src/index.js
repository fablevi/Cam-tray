const { app, Tray, Menu, nativeImage, nativeTheme } = require('electron/main')

let tray

app.whenReady().then(() => {
  const icon = nativeImage.createFromPath('./src/icons/icon.png')

  tray = new Tray(icon)

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio' },
    { label: 'Item4', type: 'radio' }
  ])

  
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)

  /*setTimeout(() => {
    const newIcon = nativeImage.createFromPath('icon2.png');
    console.log(newIcon.toDataURL())
    tray.setImage(newIcon);
    //console.log(tray)//newIcon.getDataFromURL()
  }, 2000);*/
})

/*nativeTheme.on('updated', () => {
  if (nativeTheme.shouldUseDarkColors) {
    console.log('Átváltottunk sötét módra');
  } else {
    console.log('Átváltottunk világos módra');
  }
});

console.log(nativeTheme.shouldUseDarkColors)*/



