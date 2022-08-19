export class Bullet {
  bulletWidth = 20;
  bulletHeight = 20;
  bulletSpeed = 1;

  constructor(playerHeight, player) {
    this.bulletY = parseInt(player.style.top) - this.bulletWidth;
    this.bulletX =
      parseInt(player.style.left) + playerHeight / 2 - this.bulletHeight / 2;

    const intervalRef = setInterval(() => {
      this.bulletY = this.bulletY - this.bulletSpeed;
      this.moveBullet();

      if (this.bulletY + this.bulletHeight < 0) {
        this.removeBullet();
        clearInterval(intervalRef);
      }
    }, 1);

    this.createAndAppendBulletDom();
  }

  createAndAppendBulletDom() {
    this.bulletDom = document.createElement("div");
    this.bulletDom.style.width = this.bulletWidth + "px";
    this.bulletDom.style.height = this.bulletHeight + "px";
    this.bulletDom.style.backgroundColor = "blue";
    this.bulletDom.style.position = "fixed";
    this.bulletDom.style.top = this.bulletY + "px";
    this.bulletDom.style.left = this.bulletX + "px";
    document.body.appendChild(this.bulletDom);
  }

  moveBullet() {
    this.bulletDom.style.top = this.bulletY + "px";
  }

  removeBullet() {
    this.bulletDom.remove();
  }
}
