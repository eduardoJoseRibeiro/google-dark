chrome.browserAction.onClicked.addListener(tab => {
  // alert('Imprimindo...')
  chrome.tabs.update(tab.id, { url: "javascript: window.print()"})
})