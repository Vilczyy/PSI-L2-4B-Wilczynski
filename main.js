function przycisk() {
    document.getElementById('p1').style.backgroundColor = randomColors();
  }
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }