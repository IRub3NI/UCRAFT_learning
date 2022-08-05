import "./player.mjs";
import "./bullet.mjs";
import "./enemy.mjs";
import { playerHeight } from "./player.mjs";
import { createEnemy } from "./enemy.mjs";

const player = document.querySelector("#player");

const bulletWidth = 20;
const bulletHeight = 20;

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    // TODO: Move this whole thing inside a function called createBullet and call it here
    //       and pass player's x & y as arguments to createBullet function 
    const bullet = document.createElement("div");
    bullet.style.width = bulletWidth + "px";
    bullet.style.height = bulletHeight + "px";
    bullet.style.backgroundColor = "blue";
    bullet.style.position = "fixed";
    bullet.style.top = parseInt(player.style.top) - bulletWidth + "px";
    bullet.style.left =
      parseInt(player.style.left) + playerHeight / 2 - bulletHeight / 2 + "px";
    document.body.appendChild(bullet);

    setInterval(function () {
      bullet.style.top = parseInt(bullet.style.top) - 1 + "px";
    }, 1);
  }
});

setInterval(createEnemy, 1000);

