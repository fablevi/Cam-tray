const { app, Tray, Menu, nativeImage, path } = require('electron/main')

let tray

app.whenReady().then(() => {
  /*const icon = nativeImage.createFromDataURL('data:image/png;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktY2FtZXJhLXZpZGVvIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNWEyIDIgMCAwIDEgMi0yaDcuNWEyIDIgMCAwIDEgMS45ODMgMS43MzhsMy4xMS0xLjM4MkExIDEgMCAwIDEgMTYgNC4yNjl2Ny40NjJhMSAxIDAgMCAxLTEuNDA2LjkxM2wtMy4xMTEtMS4zODJBMiAyIDAgMCAxIDkuNSAxM0gyYTIgMiAwIDAgMS0yLTJ6bTExLjUgNS4xNzUgMy41IDEuNTU2VjQuMjY5bC0zLjUgMS41NTZ6TTIgNGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg3LjVhMSAxIDAgMCAwIDEtMVY1YTEgMSAwIDAgMC0xLTF6Ii8+Cjwvc3ZnPg==')*/
  //const iconPath = 'icon.png'
  //tray = new Tray(iconPath)
  const icon = nativeImage.createFromPath('./icons/icon.png')
  console.log(icon.toDataURL())

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


