const player = document.querySelector("#player");

// TODO: Create player ptogrammatically, isntead of in HTML

export const playerWidth = 100;
export const playerHeight = 100;


document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowDown") {
    player.style.top = parseInt(player.style.top) + 20 + "px";
  }

  if (event.code === "ArrowRight") {
    player.style.left = parseInt(player.style.left) + 20 + "px";
  }

  if (event.code === "ArrowUp") {
    player.style.top = parseInt(player.style.top) - 20 + "px";
  }

  if (event.code === "ArrowLeft") {
    player.style.left = parseInt(player.style.left) - 20 + "px";
  }
});
