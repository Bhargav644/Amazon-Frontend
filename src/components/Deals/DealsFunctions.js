import { responsiveFontSizes } from "@mui/material";

function mouseOver() {
    if (!window.matchMedia("(max-width:1400px)").matches) {
        document.getElementById("side__arrow1").style.display = "inline-block";
        document.getElementById("side__arrow2").style.display = "inline-block";
    }
}

function mouseOut() {
    document.getElementById("side__arrow1").style.display = "none";
    document.getElementById("side__arrow2").style.display = "none";
}

function moveRight() {
    document.getElementById("deals__body_id").classList.add("animate-right");
    setTimeout(() => {
        document.getElementById("deals__body_id").classList.remove("animate-right");
    }, 1000);
}

function moveLeft() {
    document.getElementById("deals__body_id").classList.add("animate-left");
    setTimeout(() => {
        document.getElementById("deals__body_id").classList.remove("animate-left");
    }, 1000);
}

export { mouseOut, mouseOver, moveLeft, moveRight };