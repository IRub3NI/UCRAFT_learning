const bulletWidth = 20;
const bulletHeight = 20;

export function creatBullet(playerHeight, player) {
  const bullet = document.createElement("div");
  bullet.style.width = bulletWidth + "px";
  bullet.style.height = bulletHeight + "px";
  bullet.style.backgroundColor = "blue";
  bullet.style.position = "fixed";
  bullet.style.top = parseInt(player.style.top) - bulletWidth + "px";
  bullet.style.left =
    parseInt(player.style.left) + playerHeight / 2 - bulletHeight / 2 + "px";
  document.body.appendChild(bullet);

  const intervalRef = setInterval(function () {
    const newTop = parseInt(bullet.style.top) - 1;
    bullet.style.top = newTop + "px";
    
    if (newTop < 0) {
      bullet.remove();
      clearInterval(intervalRef);
    }
  }, 1);
}
