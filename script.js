var happy = "https://media1.giphy.com/media/4RXHkz7G2EPGE/giphy.gif";
var sad = "https://media1.tenor.com/images/67699e34eb76fecd8aea3b18822cf433/tenor.gif?itemid=5945780";
var mad = "https://thumbs.gfycat.com/DependableOpulentIsopod-small.gif";
var bored ="https://media.giphy.com/media/l2JhpjWPccQhsAMfu/giphy.gif";


$('button').click(function() {
    var input = $('input').val();
    $(".images").html("");
    if (input === "happy") {
            happyMood();
    } else if (input === "sad") {
        sadMood();
    } else if (input === "mad") {
        madMood();
    } else if (input === "bored") {
        boredMood();
    } else {
        alert("Please enter happy, sad, mad or bored!");
    }
});


function happyMood() {
    changeBackground("blue");
    changeTextColor("yellow");
    displayImage(happy);
}

function sadMood() {
    changeBackground("blue");
    changeTextColor("red");
    displayImage(sad);
}

function madMood() {
    changeBackground("red");
    changeTextColor("yellow");
    displayImage(mad);
}
function boredMood() {
    changeBackground("lightgreen");
    changeTextColor("salmon");
    displayImage(bored);
}
function changeBackground(backgroundColor) {
    $('body').css('background-color', backgroundColor);
}

function changeTextColor(color) {
    $('body').css('color', color);
}

function displayImage(image) {
    $('.images').append('<img src =' + image + '>');

}