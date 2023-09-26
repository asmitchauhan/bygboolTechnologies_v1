
function show() {
    document.getElementById("change").classList.toggle("atv")
    document.getElementById("bars").classList.toggle("active")
}

function hide() {
    if (document.getElementById("change").classList = "atv") {
        document.getElementById("change").classList = "passive"
    }
    if (document.getElementById("bars").classList = "active") {
        document.getElementById("bars").classList = "bars"
    }
}


window.onscroll = function () {
    scrollFunction()
  }
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navig").style.left = "0px"
      
    } else {
      document.getElementById("navig").style.left = "80px"
    }
  }
  
  