function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

//Conditional = an action that occurs IF something happens
//example: if (fireAlarm) {followed by what wwould happen if it happened }
var myCondition = 'true'

function setup() {
    var canvas = createCanvas(800,800);
    canvas.parent("p5container");
    background(220);
}

function draw() {

    if(myCondition) { //this is a short way to say 'if my condition is true
        fill(255, 255, 255);
        ellipse(width/2, height/2, 200);
    }
}


//creating code that says 'left' if the mouse is on the left, and 'right' if the mouse is on the right

function draw() { //it is easier to have one 'draw' function so that everything can be seen in one place
background(220);

if (mouseX < width/2) {
    console.log('LEFT')
    textSize(100)
    text('LEFT', width/2, height/2)
}

//'indentation' or neat coding (use of tabs to show if code is in or out of a function),
//makes it easier to figure out where certain code goes wrong

if (mouseX > width/2) {
    console.log('RIGHT')
    textSize(100)
    text('RIGHT', width/2, height/2)
}

//'else' can be written after an if statement. e.g.
//if () {
//*insert text*
//} else {
//*insert text*
//}


console.log('LEFT') //how to write something into the console
console.log('RIGHT')

//+ addition
//-subtraction
//*multiplication
//'/' division
//'++' incriment
//'--' decrement
//'%' modulus
//'**' exponemtiation
//'||' OR
//'&&' and

}