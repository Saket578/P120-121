var pictures = ["abacus.jpg", "basketball.jpg", "cube.jpg", "harry_potter.jpg", "king.jpg", "nunchuks.jpg", "pen.jpg", "punch.jpg", "purse.jpg", "watch.jpg"];
var googleLensResult = ["Abacus", "Basketball", "Rubik's Cube", "Harry Potter novel", "King in Chess", "Nunchuks", "Octane Gel Pen", "Punching Glove", "Sling Bag", "Digital Watch"];

var x = Math.floor(Math.random() * 10);
console.log(x);

document.getElementById("image_container").src = pictures[x];
document.getElementById("Google_Lens_Result").innerHTML = googleLensResult[x];

function setup() {
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded() {
    console.log("Model is Loaded!");
    var img = document.getElementById('image_container');
    classifier.classify(img, gotResults);
}

function gotResults(error, result) {
    if (error) {
        console.error(error);
    }
    console.log(result);
    mobileNetResult = result[0].label;
    document.getElementById("Mobile_Net_Result").innerHTML = mobileNetResult;
}
