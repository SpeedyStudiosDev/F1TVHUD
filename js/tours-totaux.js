function updateTotal() {
    var input = document.getElementById("tours-a-faire");
    var span = document.getElementById("total-laps");
    span.textContent = input.value;
  }