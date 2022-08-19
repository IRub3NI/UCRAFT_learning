import { creatBullet } from "./bullet.mjs";
import { createEnemy } from "./enemy.mjs";
import { createPlayer, playerHeight } from "./player.mjs";

const player = createPlayer();

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    creatBullet(playerHeight, player);
  }
});

setInterval(createEnemy, 1000);
