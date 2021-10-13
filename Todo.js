// Adding a click Event

function event(obj, index) {
    obj.addEventListener("click", () => {
        console.log(obj, index);
        var main_data = document.getElementsByClassName("main-data")[index];
        main_data.classList.toggle("data-tog");
    })

}

var heading = document.querySelectorAll(".headingstyle");
// console.log(heading);

heading.forEach(event);


// resize event
function resize() {
    width = window.innerWidth;
    var anchor = document.querySelectorAll(".card-anchor");

    if (width < 491) {

        anchor.forEach((item) => {
            item.setAttribute("href", "#");
        });
    } else {
        anchor.forEach((item) => {
            item.setAttribute("href", "./todopage2.html");
        });
        anchor[0].setAttribute("href", "./todopage1.html");
    }
}


window.onresize = resize;