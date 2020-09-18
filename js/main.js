$(document).ready(function () {

    var cardItemClass = $('.card-item');

    var cardItems = $('#accordions').find(cardItemClass);

    var lastClickedItem = undefined;
    var lastContent = undefined;

    cardItems.click(function () {
        //$('#card-item-content').remove();
        var content = $(this).find(">div>div");
        console.log(content.attr("class"));
        var data = $(this).attr("data");
        var id = $(this).attr("id").replace('card-item-', '');
        var show = true;

        if (lastClickedItem === id)
            show = false;
        
        var image_cover = $(this).find('.community__tile-image-wrapper').find('img').attr('src');
        var category = $(this).attr('category');
        var tag = data.replace(category + '-', '');
        var title = $(this).find('.community__tile-title').text();

        var width = $(window).width() + 17;
        var x, y;

        if (width >= 1200) {
            y = 4;
        } else if (width < 1200 && width >= 992) {
            y = 3;
        } else if (width < 992 && width >= 576) {
            y = 2;
        } else
            y = 1;

        x = Math.ceil(id / y);

        if ($('#card-item-content').height() > 0 && show == false) {
            $('#card-item-content').stop().animate({ height: '0', display: 'relative' }, { duration: 1000, easing: 'swing' });
            content.css("background-color", "rgb(15, 17, 26, 0.95)");
            
        } else {
            if (lastContent != undefined)
                lastContent.css("background-color", "rgb(15, 17, 26, 0.95)");
            content.css("background-color", "rgb(255, 255, 255, 0.8)");
            $('#card-item-content').remove();
            $('#card-item-' + y * x).after(
                '<section id="card-item-content" class="property-portal " style="height: 0; overflow: hidden; background-color: transparent;">' +
                '<div class="bg-section community-portal page-side-padding pt-3 pb-3 justify-content-center" style="visibility: inherit;">' +
                '<div class="container">' +
                '<div>' +
                '<img class="card-content-cover" src="' + image_cover + '" alt="' + title + '" style="border: 3px solid #00b8d8; height: 45vh; object-fit: cover;">' +
                '</div>' +
                '<div class="pt-1 pb-1 d-flex justify-content-center">' +
                '<div style="border: 1px solid #00b8d8; height: 40px; width:0px"></div>' +
                '</div>' +
                '<div class="guide-slider-ctn col-lg-9 col-md-9" style="margin: auto; padding-left: 10px; padding-right: 10px;">' +
                '<p class="home-text-title text-center">' + title + '</p>' +
                '<p class="home-text text-center">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>' +
                '</div>' +
                '<div class="pt-1 pb-1 d-flex justify-content-center">' +
                '<div style="border: 1px solid #00b8d8; height: 40px; width:0px"></div>' +
                '</div>' +
                '</div>' +
                '<div class="d-flex justify-content-center">' +
                '<div class="container custom_tag equal">' +
                '<div style="padding: 10px; width: 100%">' +
                '<img class="card-content-img-1" src="images/bg/' + category + '/' + tag + '/1.jpg" style="height: 200px; object-fit: cover;">' +
                '</div>' +
                '<div style="padding: 10px; width: 100%">' +
                '<img class="card-content-img-2" src="images/bg/' + category + '/' + tag + '/2.jpg" style="height: 200px; object-fit: cover;">' +
                '</div>' +
                '<div style="padding: 10px; width: 100%">' +
                '<img class="card-content-img-3" src="images/bg/' + category + '/' + tag + '/3.jpg" style="height: 200px; object-fit: cover;">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="d-flex justify-content-center">' +
                '<div class="btn btn-primary" style="margin: 0 30px; width: 200px;"><span class="btnTxt" style="color: white">Enquiry</span></div>' +
                '<div class="btn btn-primary" style="margin: 0 30px; width: 200px;"><span class="btnTxt" style="color: white">More</span></div>' +
                '</div>' +
                '</div>' +
                '</section>');

            $('html, body').animate(
                {
                    scrollTop: $('#card-item-content').offset().top - 80,
                },
                500,
                'swing'
            );

            autoHeightAnimate($('#card-item-content'), 500);
        }

        lastClickedItem = id;
        lastContent = content;
    });

    $(window).on('resize', function () {
        $('#card-item-content').remove();
        $('#accordions').find('.card-item').find(">div>div").css("background-color", "rgb(15, 17, 26, 0.95)");
    });

    function autoHeightAnimate(element, time) {
        var curHeight = element.height(), 
            autoHeight = element.css('height', 'auto').height() + 50;
        element.height(curHeight);
        element.stop().animate({ height: autoHeight, display: 'table' }, { duration: time, easing: 'swing' });
    }
});