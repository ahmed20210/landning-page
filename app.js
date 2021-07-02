/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
//golbal variables

let myIcon = document.getElementById("icon")
let myNav = document.getElementById("navbar__list")
let mySection = document.querySelectorAll("section")
    //navbar loop

let sections = Array.from(document.getElementsByTagName("section"))
for (section of sections) {
    //add List items
    let myLi = document.createElement("li")
    myNav.appendChild(myLi)
    let myLink = document.createElement("a")
    myLi.appendChild(myLink)
    let sectionId = section.attributes.id.value
    let myText = document.createTextNode(sectionId)
    myLink.appendChild(myText)
}


//scroll to section when click anchor
for (let i = 1; i <= sections.length; i++) {
    let id = document.getElementById("section" + i)
    let anchor = document.getElementsByTagName("a")[i - 1]
    anchor.setAttribute("id", "section" + i + 5)
    anchor.addEventListener("click", () => {
        id.scrollIntoView({
            behavior: "smooth"
        })

    })
}
//make navbar responsive to mobile devices screen size
myIcon.addEventListener("click", () => {
    myNav.classList.toggle("active")
})

//add active class when scroll to section and highlights to the active section2
// add highlights to navbar when scroll to section
let myAnchor = document.querySelectorAll("a")
window.addEventListener("scroll", () => {
    let myPosition = document.documentElement.scrollTop;
    mySection.forEach((section) => {
        if (myPosition >= section.offsetTop - section.offsetHeight * .25 &&
            myPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * .25) {
            myAnchor.forEach((a) => {
                a.classList.remove("active")
            })
            let getId = section.attributes.id.value;
            mySection.forEach((el) => {
                el.classList.remove("your-active-class")
            })
            document.getElementById(getId).classList.add("your-active-class")
            document.getElementById(getId + 5).classList.add("active")
        }
    })
})