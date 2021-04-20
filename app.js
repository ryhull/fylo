const openBtn = document.querySelector("#openBtn")
const closeBtn = document.querySelector("#closeBtn")
const navContainer = document.querySelector(".mobileNavContainer")

openBtn.addEventListener("click", slideNav);
closeBtn.addEventListener("click", slideNav);

function slideNav() {
    if (navContainer.style.height == "") {
        navContainer.style.height = "100%";
    } else if (navContainer.style.height == "100%") {
        navContainer.style.height = "";
    }
}