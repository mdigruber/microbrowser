document.getElementById('searchtext').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchURL();
  }
})

document.getElementById('search').addEventListener('click', () => {
    searchURL();
})

document.getElementById("undo").addEventListener("click", () => {
  var browser = document.getElementById("view");
  if(browser.canGoBack()){
    browser.goBack();
  }
})

document.getElementById("redo").addEventListener("click", () => {
  var browser = document.getElementById("view");
  if(browser.canGoForward()){
    browser.goForward();
  }
})


function searchURL() {
  var text = document.getElementById("searchtext");
  var browser = document.getElementById("view");

  if(text.value.startsWith("http:") || text.value.startsWith("https:")){
    browser.loadURL(text.value)
  } else {
    browser.loadURL("https://www.google.com/search?q=" + text.value)
  }

  document.querySelector("title").innerHTML = browser.getTitle()
}