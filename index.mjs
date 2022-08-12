import "./player.mjs";
import "./bullet.mjs";
import "./enemy.mjs";
import { creatBullet } from "./bullet.mjs";
import { createEnemy } from "./enemy.mjs";
import { playerHeight } from "./player.mjs";

const player = document.querySelector("#player");


document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    creatBullet(playerHeight);
  }
});

setInterval(createEnemy, 1000);

// TODO: and pass player's x & y as arguments to createBullet function
