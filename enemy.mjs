export function createEnemy() {
  const enenmy = document.createElement("div");
  enenmy.style.width = "50px";
  enenmy.style.height = "50px";
  enenmy.style.backgroundColor = "black";
  enenmy.style.position = "fixed";
  enenmy.style.top = "0px";
  enenmy.style.left = "0px";
  document.body.appendChild(enenmy);

  setInterval(function () {
    const newLeft = parseInt(enenmy.style.left) + 1;
    enenmy.style.left = newLeft + "px";

    if (newLeft > window.innerWidth) {
      enenmy.remove();
    }
  }, 1);
}
