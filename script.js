const character = document.getElementById("character");
const message = document.getElementById("message");
const room = document.getElementById("room");


// Click an object
function clickObject(objectName) {
    message.textContent = "You clicked the " + objectName + "!";
}


// Change rooms
function changeRoom(roomName) {

    if (roomName === "living") {
        room.style.backgroundColor = "#fff4df";
        message.textContent = "You are in the living room!";
    }

    if (roomName === "bedroom") {
        room.style.backgroundColor = "#e8e1ff";
        message.textContent = "You are in the bedroom!";
    }

    if (roomName === "kitchen") {
        room.style.backgroundColor = "#e8f5e9";
        message.textContent = "You are in the kitchen!";
    }
}


// Drag the character
let dragging = false;

character.addEventListener("pointerdown", function(event) {
    dragging = true;
    character.setPointerCapture(event.pointerId);
});

character.addEventListener("pointermove", function(event) {

    if (dragging) {

        const roomRect = room.getBoundingClientRect();

        let x = event.clientX - roomRect.left - character.offsetWidth / 2;
        let y = event.clientY - roomRect.top - character.offsetHeight / 2;

        character.style.left = x + "px";
        character.style.top = y + "px";
    }
});

character.addEventListener("pointerup", function() {
    dragging = false;
});
