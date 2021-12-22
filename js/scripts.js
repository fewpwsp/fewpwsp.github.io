
window.onload = function() {
    document.getElementById("hide-button-first").onclick = hideFunсFirst;
    document.getElementById("hide-button-second").onclick = hideFunсSecond;
    document.getElementById("hide-button-third").onclick = hideFunсThird;
    document.getElementById("hide-button-fourth").onclick = hideFunсFourth;
    document.getElementById("drawDiagramm").onclick = DrawDiagramm;
    
};

function hideFunсFirst() {
    if(document.getElementById("hidden-block-first").style.display == "none") {
        document.getElementById("hidden-block-first").style.display = "block";
    } else {
        document.getElementById("hidden-block-first").style.display = "none";
    }
}
function hideFunсSecond() {
    if(document.getElementById("hidden-block-second").style.display == "none") {
        document.getElementById("hidden-block-second").style.display = "block";
    } else {
        document.getElementById("hidden-block-second").style.display = "none";
    }
}
function hideFunсThird() {
    if(document.getElementById("hidden-block-third").style.display == "none") {
        document.getElementById("hidden-block-third").style.display = "block";
    } else {
        document.getElementById("hidden-block-third").style.display = "none";
    }
}
function hideFunсFourth() {
    if(document.getElementById("hidden-block-fourth").style.display == "none") {
        document.getElementById("hidden-block-fourth").style.display = "block";
    } else {
        document.getElementById("hidden-block-fourth").style.display = "none";
    }
}


