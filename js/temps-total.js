function updateTotaltime() {
    var input = document.getElementById("temps-restant");
    var span = document.getElementById("time-reamaining");
    span.textContent = input.value;
  }