function setup() {
    var canvas = createCanvas(800,800);
    canvas.parent("p5container");
    background(220);
}

function draw() {
    //then mouse is on the left
    if (mouseX < width/2) {
        circle(200,30, 20);
        circle(260, 30, 20);
        arc(230, 90, 60, 60, PI, TWO_PI)

    } else {
        //its on the right

    }
}
