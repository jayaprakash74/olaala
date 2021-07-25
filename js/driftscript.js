$(document).ready(function(){
  $('.product-image-small').hover(function(){
      var largeImage = $(this).attr('data-full');
      var type = $(this).attr('data-type');
      if(type == "video") {
          $('.selected').removeClass();
          $(this).addClass('selected');
          $('.full img').hide();
          $('.full').html('<video id="videoID" width="350px" controls="false"><source src="'+largeImage+'" type="video/mp4" /></video>');
          //var video = document.getElementById('videoID');
          var video = document.getElementById('videoID');
          video.load();
          video.play();
      } 
      if(type == "image") {
          // alert('image');
          $('.full video').remove();
          $('.selected').removeClass();
          $('.full').html('<img width="350px" />')
          $(this).addClass('selected');
          $('.full img').show();
          $('.full img').addClass("demo-trigger");
          $('.full img').attr('src', largeImage);
          $('.full img').attr('data-zoom', largeImage);
          $('.full img').fadeIn(5000);
          triggerzoom();
      }
      
  }); // closing the listening on a click
  $('.full img').on('click', function(){
    var modalImage = $(this).attr('src');
    $.fancybox.open(modalImage);
  });
}); //closing our doc ready

function triggerzoom() {
  var demoTrigger = document.querySelector('.demo-trigger');
  var paneContainer = document.querySelector('.detail');
  
  new Drift(demoTrigger, {
      paneContainer: paneContainer,
      zoomFactor: 8,
      inlinePane: false,
      
  });
}