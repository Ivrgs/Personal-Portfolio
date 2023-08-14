import jQuery from 'jquery';

jQuery(function(){

  jQuery( ".skills_slider, .my_story .column_content" ).fadeIn( "3000").removeClass('hidden');
  
  jQuery(".skills_slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    rows: 0,
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          centerPadding:"0px"
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding:"0px"
        }
      }
    ]
  });
  
  jQuery(".experiences_slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    rows: 0,
    centerMode: false,
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  jQuery(".works_slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    rows: 0,
    centerMode: false,
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding:"0px"
        }
      }
    ]
  });
  
  jQuery(".all_stories_button").on('click', function(){
    jQuery(this).addClass('active');
    jQuery(".experiences, .works").removeClass("hidden");
    jQuery(".experiences_button, .works_button").removeClass('active');
  });

  jQuery(".experiences_button").on('click', function(){
    jQuery(this).addClass('active');
    jQuery(".experiences").removeClass("hidden");
    jQuery(".works").addClass("hidden");
    jQuery(".works_button.active, .all_stories_button").removeClass('active');
  });

  jQuery(".works_button").on('click', function(){
    jQuery(this).addClass("active");
    jQuery(".works").removeClass("hidden");
    jQuery(".experiences").addClass("hidden");
    jQuery(".experiences_button, .all_stories_button").removeClass('active');
  })
  
})
