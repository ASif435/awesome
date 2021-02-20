
    // magnific popup
    $(document).ready(function() {
        //sticky menu
      $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
         $(".sticky-menu").removeClass("scroll-header");
        }else{
         $(".sticky-menu").addClass("scroll-header");
        }
       });
        //pop-up
        $('.popup').magnificPopup({type:'iframe'});
        //slick slider
        $('.review-active').slick({
          slidesToShow:1 ,
          slidesToScroll: 1,
          dots: false,
          arrows:true,
          autoplay:true,
          prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-long-arrow-alt-left'></i></button>",
          nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-long-arrow-alt-right'></i></button>",
          
  
          
        });
        //brand items 
        $('.active-img').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows:false,
          autoplay:true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        
        });
        //couter up 
        $('.counter').counterUp({
          delay: 100,
          time: 3000
      });
      // ss active
      $('.ss-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
        autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      
      });
     
      
        var $grid = $('.main-items').isotope({
             itemSelector: '.grid-item ',
             percentPosition: true,
             masonry: {
               // use outer width of grid-sizer for columnWidth
               columnWidth:1
             }
           })
           $('.active-btn').on( 'click', 'button', function() {
             var filterValue = $(this).attr('data-filter');
             $grid.isotope({ filter: filterValue });
           });
           
     //for menu active class
     $('.active-btn button').on('click', function(event) {
       $(this).siblings('.active').removeClass('active');
       $(this).addClass('active');
       event.preventDefault();
     });
    
     $('#menu-active').meanmenu(
      {
        meanMenuContainer: '.menu',
        meanScreenWidth: "767"
      }
    );

      });

   
