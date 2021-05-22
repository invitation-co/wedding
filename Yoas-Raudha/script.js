$(document).ready(function () {
    //singgat gori
    $(".singgat-gori").mouseover(function () {
        $(this).addClass("animated jello");
    });

    $(".singgat-gori").mouseout(function () {
        $(this).removeClass("animated jello");
    });

    // typing animation
    (function ($) {
        $.fn.writeText = function (content) {
            var contentArray = content.split(""),
                current = 0,
                elem = this;
            setInterval(function () {
                if (current < contentArray.length) {
                    elem.text(elem.text() + contentArray[current++]);
                }
            }, 80);
        };
    })(jQuery);

    // input text for typing animation
    $("#holder").writeText("Kepada Yth. Bapak/Ibu/Saudara/i");

    // initialize wow.js
    new WOW().init();

    // Push the body and the nav over by 285px over
    var main = function () {
        $(".fa-bars").click(function () {
            $(".nav-screen").animate({
                right: "0px"
            },
                200
            );

            $("body").animate({
                right: "285px"
            },
                200
            );
        });

        // Then push them back */
        $(".fa-times").click(function () {
            $(".nav-screen").animate({
                right: "-285px"
            },
                200
            );

            $("body").animate({
                right: "0px"
            },
                200
            );
        });

        $(".nav-links a").click(function () {
            $(".nav-screen").animate({
                right: "-285px"
            },
                500
            );

            $("body").animate({
                right: "0px"
            },
                500
            );
        });
    };

    $(document).ready(main);

    // initiate full page scroll
    $("#fullpage").fullpage({
        scrollBar: true,
        responsiveWidth: 400,
        navigation: true,
        navigationTooltips: false,
        anchors: ["home", "about", "gallery", "lokasi", "connect"],
        menu: "#myMenu",
        fitToSection: false,

        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);

            //using index
            if (index == 1) {
                /* add opacity to arrow */
                $(".fa-chevron-down").each(function () {
                    $(this).css("opacity", "1");
                });
                $(".header-links a").each(function () {
                    $(this).css("color", "white");
                });
                $(".header-links").css("background-color", "rgba(255, 255, 255, 0.05)");
            } else if (index != 1) {
                $(".header-links a").each(function () {
                    $(this).css("color", "white");
                });
                $(".header-links").css("background-color", "black");
            }

            //using index
            if (index == 2) {
                /* animate skill bars */
                $(".skillbar").each(function () {
                    $(this)
                        .find(".skillbar-bar")
                        .animate({
                            width: $(this).attr("data-percent")
                        },
                            2500
                        );
                });
            }
        }
    });

    // move section down one
    $(document).on("click", "#moveDown", function () {
        $.fn.fullpage.moveSectionDown();
    });

    // fullpage.js link navigation
    $(document).on("click", "#abouts", function () {
        $.fn.fullpage.moveTo(2);
    });

    $(document).on("click", "#gallery", function () {
        $.fn.fullpage.moveTo(3);
    });

    $(document).on("click", "#lokasi", function () {
        $.fn.fullpage.moveTo(4);
    });

    // smooth scrolling
    $(function () {
        $("a[href*=#]:not([href=#])").click(function () {
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ?
                    target :
                    $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html,body").animate({
                        scrollTop: target.offset().top
                    },
                        700
                    );
                    return false;
                }
            }
        });
    });

    // Define a blank array for the effect positions. This will be populated based on width of the title.
    var bArray = [];
    // Define a size array, this will be used to vary bubble sizes
    var sArray = [4, 6, 8, 10];

    // Push the header width values to bArray
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }

    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // setInterval function used to create new bubble every 350 milliseconds
    setInterval(function () {

        // Get a random size, defined as variable so it can be used for both width and height
        var size = randomValue(sArray);
        // New bubble appeneded to div with it's size and left position being set inline
        // Left value is set through getting a random value from bArray
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

        // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
        // Callback function used to remove finsihed animations from the page
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 3000, function () {
            $(this).remove()
        });


    }, 350);


    // Set the date we're counting down to
    var countDownDate = new Date("Feb 21, 2021 08:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = days + " HARI LAGI.. "

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "WE HAD BEEN MARRIED :)";
        } else if (days == 0) {
            document.getElementById("countdown").innerHTML = "WE ARE GETTING MARRIED TODAY !!";
        }
    }, 1000);

});
var URL = window.location.href;
var Target = URL.search("=") + 1;
var Tamu_string = URL.substring(Target, 100);
var Tamu = Tamu_string.replace(/\+|%20/g, " ")
if (Target == 0) {
    var Tamu = "_____________";
}
document.getElementById("tamu").innerText = Tamu;

var music = new Audio("Prelude.mp3");

function refresh() {
    x = window.location.href;
    window.location.href = x;
}

function mainkan() {
    music.play();
    music.loop = true;
}

function lokasi() {
    window.open('http://bit.ly/LokasiPernikahan21022021');
}
