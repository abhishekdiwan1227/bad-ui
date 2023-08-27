var tiles = document.querySelectorAll(".dl-logo .dl-logo-grid .dl-logo-grid-tile")

tiles.forEach(tile => {
    bindEvents(tile)
})

function bindEvents(element) {

    let prevColor = "#ffffff00"

    element.addEventListener("mouseover", event => {
        element.style.filter = "blur(8px)"
        element.animate(
            [
                { backgroundColor: `#15797966` },
                { backgroundColor: prevColor },
            ],
            {
                fill: "both",
                duration: 1500,
                rangeStart: "cover 0%",
                rangeEnd: "cover 100%",
            }
        )
    })

    element.addEventListener("click", event => {
        element.style.filter = "blur(8px)"
        element.animate(
            [
                { backgroundColor: `${getRandomColor()}66` },
                { backgroundColor: prevColor },
            ],
            {
                fill: "both",
                duration: 1500,
                rangeStart: "cover 0%",
                rangeEnd: "cover 100%",
            }
        )
    })
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
