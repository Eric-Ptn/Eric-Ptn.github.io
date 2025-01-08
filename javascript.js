//fade in sections
const screenOffset = window.innerHeight / 2 

const elements = document.getElementsByClassName('section')
for (let element of elements) {
    window.addEventListener('load', () => {
        if (window.scrollY + screenOffset > element.offsetTop - 400) {
            element.classList.add('is-active')
        }
    })
    window.addEventListener('scroll', () => {
    if (window.scrollY + screenOffset > element.offsetTop - 400) {
        element.classList.add('is-active')
    }
    })
}

//to top button
mybutton = document.getElementById("to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
	window.scrollTo({top: 0, behavior: "smooth"});
}

//navigation bar for mobile
function hamburgers() {
    var x = document.getElementById("links");
    if (x.className === "link-class") {
		//keep space before mobile!
        x.className += " mobile";
    } else {
        x.className = "link-class";
    }
}

//loading bar
window.onload = function(){ 
    document.getElementById("loading").style.display = "none";
}
