const allBoxes = document.querySelector(".color-samples"),
      boxes = Array.from(allBoxes.childNodes),
      cube = document.querySelector(".cube"),
      cubeElements = Array.from(cube.children),
      h1 = document.querySelector("h1")

// FUNCTION CHANGECOLOR
// sets current color as a background color for the clicked element (also adding text shadow with the same color to h1):

function changeColor() {
    for (var i = 0; i < cubeElements.length; i++) {
        var currentColor = window.getComputedStyle(this).backgroundColor;
        cubeElements[i].style.backgroundColor = currentColor;
        h1.style.textShadow = "3px 3px " + currentColor;
    };
}

// listening for "click" events for all color buttons:

boxes.forEach(function(box) {
    box.addEventListener("click", changeColor);
})