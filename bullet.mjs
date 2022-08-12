const bulletWidth = 20;
const bulletHeight = 20;

export function creatBullet(playerHeight) {
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
  