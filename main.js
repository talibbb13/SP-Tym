
setInterval(() => {

  let vaqt = new Date();
  let comTime = vaqt.getHours() + ":" + vaqt.getMinutes() + ":" + vaqt.getSeconds();
  // Dates and days
  let tareekh = vaqt.toLocaleDateString();
  document.getElementById(`tym`).innerHTML = comTime;
  document.getElementById(`date`).innerHTML = tareekh;
}, 1000);

