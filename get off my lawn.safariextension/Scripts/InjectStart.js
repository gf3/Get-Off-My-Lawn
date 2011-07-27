function shouldLoad () {
  var resp = safari.self.tab.canLoad( event, event.url )
  if ( resp )
    event.preventDefault()
}

document.addEventListener( 'beforeload', shouldLoad, true )
