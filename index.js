var strain = [];

function submit() {
  let inputValue = $("#strainInput").val();
  strain.push(inputValue);
  let strainDisplay = $("#strainDisplay");
  let h2 = document.createElement("h2");
  h2.innerHTML = inputValue;
  strainDisplay.append(h2);
  $("#strainInput").val("");
};

$(".button").click(function () {
    var strainLong = strain.length;
    var random = Math.floor(Math.random() * strainLong) + 1;
    $(".strain").text(strain[random])
});

