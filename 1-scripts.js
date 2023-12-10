
$.ajax({
    url: "https://smileschool-api.alx-tools.com/quotes",
    method: "GET",
    success: function (response) {
        $("#quotes-loading").remove();
        console.log(response);
        const quotes = response;
        $("#quotes-container").append(
            $('<div id="carouselExampleControls" class="carousel slide h-100" data-ride="carousel">').append(
                $('<div class="carousel-inner h-100">').append(
                    quotes.map((quote, index) => {
                        if (index == 0) {
                            return $('<div class="carousel-item active" style="width: 200px">').append(
                                $('<div class="d-flex align-items-center justify-content-center  d-flex px-4 text-white" style="background-color: rgba(194, 113, 255, 1); height: 392px; gap: 20px">').append(
                                    $(`<img src="${quote.pic_url}" class="rounded-circle" width=150 height="150" alt="">`),
                                    $("<div>").append(
                                        $('<p style="max-width: 470px;" class="mb-3">').text(quote.text),
                                        $("<h5>").text(quote.name),
                                        $("<p>").text(quote.title)
                                    )
                                )
                            )  
                        }
                        return $('<div class="carousel-item">').append(
                            $('<div class="d-flex align-items-center justify-content-center  d-flex px-4 text-white" style="background-color: rgba(194, 113, 255, 1); height: 392px; gap: 20px">').append(
                                $('<img src="images/profile_3.jpg" class="rounded-circle" width=150 height="150" alt="">'),
                                $("<div>").append(
                                    $('<p style="max-width: 470px;" class="mb-3">').text("Those tutorials are concise and go straight to the point.I can’t think of a better place to learn smiling.And it’s so fun!"),
                                    $("<h5>").text("Verronica Maxwell"),
                                    $("<p>").text("weather presenter")
                                )
                            )
                        )
                    })
                ),
                $('<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">').append(
                    $('<img src="./images/arrow_white_left.png" width="30" height="62" alt="">'),
                    $('<span class="sr-only">').text("Previous")
                ),
                $('<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">').append(
                    $('<img src="./images/arrow_white_right.png" width="30" height="62" alt="">'),
                    $('<span class="sr-only">').text("Next")
                )
            )
        )
    },
    error: function (error) {
        console.log("Error:", error);
    },

});
