class Browser {

  constructor() {
    this.browser = document.getElementById("view")
    this.browserTitle = document.querySelector("title").innerHTML
  }

  searchfield() {
    document.getElementById('searchtext').addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        var text = document.getElementById("searchtext")
        this.searchURL(text)
      }
    })
  }

  undoPage() {
    if(this.browser.canGoBack()){
      return this.browser.goBack()
    }
  }

  redoPage() {
    if(this.browser.canGoForward()){
       return this.browser.goForward()
    }
  }

  reloadPage() {
    return this.browser.reload()
  }

  // if search is a valid URL, then the browser will directly open the URL
  // if the search consists of word, the browser will open a new google search
  searchURL(text) {
    if(text.value.startsWith("http:") || text.value.startsWith("https:")){
      this.browser.loadURL(text.value)
    } else {
      this.browser.loadURL("https://www.google.com/search?q=" + text.value)
    }
    text.innerHTML = document.location.href
    this.browserTitle = this.browser.getTitle()
  }
}

var browser = new Browser()
browser.searchfield()

document.getElementById("undo").addEventListener("click", () => {
  browser.undoPage()  
})

document.getElementById("redo").addEventListener("click",  async () => {
  browser.redoPage()
})

document.getElementById("reload").addEventListener("click", () => {
  browser.reloadPage()
})




