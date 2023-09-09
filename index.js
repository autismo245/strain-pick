var strain = [];

function submit() {
  let inputValue = $("#strainInput").val();
  $("#number").text(inputValue)
  $("#strainInput").val("");
  $(".button").click(function () {
    var random = Math.floor(Math.random() * inputValue) + 1;
    $(".strain").text(random)
  });
};

