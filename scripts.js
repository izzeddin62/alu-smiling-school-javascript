
console.log("working ===")

$.ajax({
    url: "https://smileschool-api.alx-tools.com/quotes",
    method: "GET",
    success: function (response) {
        $("#quotes-loading").remove();
        console.log(response);
        const quotes = response;
        $("#quotes-container").append(
            $('<div id="carouselExampleControls" class="carousel slide h-100" data-ride="carousel">').append(
                $('<div class="carousel-inner flex h-100">').append(
                    [...quotes].map((quote, index) => {
                        if (index == 0) {
                            return $('<div class="carousel-item active">').append(
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





$(document).ready(function () {


    $.ajax({
        url: "https://smileschool-api.alx-tools.com/popular-tutorials",
        method: "GET",
        success: function (response) {
            console.log(response);
            const videos = response;
            $("#popular-videos-loading").remove();
            $("#popular-videos").append(
                $('<div class="carousel slide card-carousel" data-ride="carousel">').append(
                    $('<div class="carousel-inner d-flex">').append(
                        response.map(video => {
                            return $('<div class="card border-0 carousel-item d-block m-0">').append(
                                $(`<img src="${video.thumb_url}" width="288" height="224" class="card-img-top" alt="Card Image">`),
                                $('<div class="card-body px-0" style="border: none;">').append(
                                    $('<h5 class="card-title">').text(video.title),
                                    $('<p class="card-text" style="opacity: 0.7;">').text(video["sub-title"]),
                                ),
                                $('<div class="card-footer px-0 bg-white">').append(
                                    $('<div class="d-flex" style="gap: 20px;">').append(
                                        $(`<img src="${video.author_pic_url}" class="rounded-circle" width=30 height=30 alt="">`),
                                        $('<p style="color: rgba(194, 113, 255, 1);">').text(video.author)
                                    ),
                                    $('<div>').append(
                                        Array(video.star).fill(0).map(() => {
                                            return $('<img src="images/star_on.png" alt="">')
                                        })
                                    )
                                )
                            )
                        })
                    ),
                    $('<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">').append(
                        $('<span class="carousel-control-prev-icon" aria-hidden="true">'),
                        $('<span class="sr-only">').text("Previous")
                    ),
                    $('<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">').append(
                        $('<span class="carousel-control-next-icon" aria-hidden="true">'),
                        $('<span class="sr-only">').text("Next")
                    )
                )
            )


            let scrollPostion = 0;
            $("#popular-videos .card-carousel .carousel-control-next").on("click", function () {
                const cardWidth = $("#popular-videos .card-carousel .carousel-inner  .carousel-item").outerWidth();
                if (scrollPostion >= (cardWidth * response.length) - cardWidth) {
                    return;
                }
                scrollPostion += cardWidth
                $("#popular-videos .card-carousel .carousel-inner").animate({ scrollLeft: scrollPostion }, 400);
            });
        
            $("#popular-videos .card-carousel .carousel-control-prev").on("click", function () {
                if (scrollPostion <= 0) {
                    return;
                }
                const width = $("#popular-videos .card-carousel .carousel-inner").width();
                const cardWidth = $("#popular-videos .card-carousel .carousel-inner  .carousel-item").outerWidth();
                scrollPostion -= cardWidth
                $("#popular-videos .card-carousel .carousel-inner").animate({ scrollLeft: scrollPostion }, 400);
            });

            
        },
        error: function (error) {
            console.error(error);
        }
    });
});




$(document).ready(function () {

    $.ajax({
        url: "https://smileschool-api.alx-tools.com/latest-videos",
        method: "GET",
        success: function (response) {

            console.log(response, '====++++======');
            const videos = response;
            $("#latest-videos-loading").remove();
            $("#latest-videos").append(
                $('<div class="carousel slide card-carousel" data-ride="carousel">').append(
                    $('<div class="carousel-inner d-flex">').append(
                        response.map(video => {
                            return $('<div class="card border-0 carousel-item d-block m-0">').append(
                                $(`<img src="${video.thumb_url}" width="288" height="224" class="card-img-top" alt="Card Image">`),
                                $('<div class="card-body px-0" style="border: none;">').append(
                                    $('<h5 class="card-title">').text(video.title),
                                    $('<p class="card-text" style="opacity: 0.7;">').text(video["sub-title"]),
                                ),
                                $('<div class="card-footer px-0 bg-white">').append(
                                    $('<div class="d-flex" style="gap: 20px;">').append(
                                        $(`<img src="${video.author_pic_url}" class="rounded-circle" width=30 height=30 alt="">`),
                                        $('<p style="color: rgba(194, 113, 255, 1);">').text(video.author)
                                    ),
                                    $('<div>').append(
                                        Array(video.star).fill(0).map(() => {
                                            return $('<img src="images/star_on.png" alt="">')
                                        })
                                    )
                                )
                            )
                        })
                    ),
                    $('<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">').append(
                        $('<span class="carousel-control-prev-icon" aria-hidden="true">'),
                        $('<span class="sr-only">').text("Previous")
                    ),
                    $('<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">').append(
                        $('<span class="carousel-control-next-icon" aria-hidden="true">'),
                        $('<span class="sr-only">').text("Next")
                    )
                )
            )


            let scrollPostion = 0;
            $("#latest-videos .card-carousel .carousel-control-next").on("click", function () {
                const cardWidth = $("#latest-videos .card-carousel .carousel-inner  .carousel-item").outerWidth();
                if (scrollPostion >= (cardWidth * response.length) - cardWidth) {
                    return;
                }
                scrollPostion += cardWidth
                $("#latest-videos .card-carousel .carousel-inner").animate({ scrollLeft: scrollPostion }, 400);
            });
        
            $("#latest-videos .card-carousel .carousel-control-prev").on("click", function () {
                if (scrollPostion <= 0) {
                    return;
                }
                const width = $("#latest-videos .card-carousel .carousel-inner").width();
                const cardWidth = $("#latest-videos .card-carousel .carousel-inner  .carousel-item").outerWidth();
                scrollPostion -= cardWidth
                $(".card-carousel .carousel-inner").animate({ scrollLeft: scrollPostion }, 400);
            });

            
        },
        error: function (error) {
            console.error(error);
        }
    });
});

