function be() {
    document.getElementById("but1").style.backgroundColor = "black"
    document.getElementById("but1").style.color = "white"
    document.getElementById("but1").style.transition = "0.5s"
    document.getElementById("but1").style.boxShadow = "0px 0px"
    document.getElementById("but1").style.cursor = "pointer"
}

function oute() {
    document.getElementById("but1").style.backgroundColor = "white"
    document.getElementById("but1").style.color = "black"
    document.getElementById("but1").style.transition = "0.5s"
    document.getElementById("but1").style.boxShadow = "5px 5px gray"
}

function scrolltop() {
    scrollTo(0, 0)
}
function scrolled() {
    document.getElementById("fil").style.position = "sticky"
}
