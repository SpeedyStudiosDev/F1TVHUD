function updateSpan() {
    var input = document.getElementById("tours-faits");
    var span = document.getElementById("actual-lap");
    span.textContent = input.value;
  }