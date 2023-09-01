$(".btn").on("click", function() {
    var strain = ["red congo", "lemon OG", "super lemon haze", "strawberry cough", "chiquita banana", "king louis", "pink god"];
    var random = Math.floor(Math.random() * 7) + 1;
    var strainPick = strain[random]
    $(".strain").text(strainPick)
})