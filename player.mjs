// TODO: make players's width 300px, and make sure bullet is still in middle
// TODO: make player shape logic, you can start just by letting user customize color
export const playerWidth = 100;
export const playerHeight = 100;

export function createPlayer() {
  const player = document.createElement("div");
  player.style.width = playerWidth + "px";
  player.style.height = playerHeight + "px";
  player.style.backgroundColor = "red";
  player.style.position = "relative";
  player.style.top = "600px";
  player.style.left = "300px";
  document.body.appendChild(player);

  const playerMovment = document.addEventListener;
  playerMovment("keydown", function (event) {
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

  return player;
}
