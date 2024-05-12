document.getElementById("echeance-select").addEventListener("change", function() {
    var selectedOption = this.value;
    document.documentElement.id = selectedOption;
  });
