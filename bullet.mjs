export class Bullet {
  bulletWidth = 20;
  bulletHeight = 20;

  constructor(playerHeight, player) {
    const bullet = document.createElement("div");
    bullet.style.width = this.bulletWidth + "px";
    bullet.style.height = this.bulletHeight + "px";
    bullet.style.backgroundColor = "blue";
    bullet.style.position = "fixed";
    bullet.style.top = parseInt(player.style.top) - this.bulletWidth + "px";
    bullet.style.left =
      parseInt(player.style.left) +
      playerHeight / 2 -
      this.bulletHeight / 2 +
      "px";
    document.body.appendChild(bullet);

    const intervalRef = setInterval(function () {
      const newTop = parseInt(bullet.style.top) - 1;
      bullet.style.top = newTop + "px";

      if (newTop + this.bulletHeight < 0) {
        bullet.remove();
        clearInterval(intervalRef);
      }
    }, 1);
  }
}
