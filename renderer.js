var browser = document.getElementById("view");

document.getElementById('searchtext').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchURL();
  }
})

document.getElementById("undo").addEventListener("click", () => {
  if(browser.canGoBack()){
    browser.goBack();
  }
})

document.getElementById("redo").addEventListener("click",  async () => {
  if(browser.canGoForward()){
    await browser.goForward();
  }
})

document.getElementById("reload").addEventListener("click", () => {
  browser.reload()
})


function searchURL() {
  var text = document.getElementById("searchtext");

  if(text.value.startsWith("http:") || text.value.startsWith("https:")){
    browser.loadURL(text.value)
  } else {
    browser.loadURL("https://www.google.com/search?q=" + text.value)
  }
  text.innerHTML = document.location.href
  
  document.querySelector("title").innerHTML = browser.getTitle()
}

browser.addEventListener("click", () => {
  console.log("hallo")
  var text = document.getElementById("searchtext");
  text.innerHTML = browser.src
})