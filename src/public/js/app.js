const socket = io();

const welcome = document.getElementById("welcome");
const form = document.querySelector("form");

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", { payload: input.value }, () => {
    console.log(`server is done!`);
  });
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
