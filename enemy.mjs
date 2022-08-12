
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
    enenmy.style.left = parseInt(enenmy.style.left) + 1 + "px";
  }, 1);
}

