$(document).ready(function() {

  $("#design").click(function(){
    $("#design-show").toggle();
    $(".hide-design-image").toggle();
  })

  $("#development").click(function(){
    $("#development-show").toggle();
    $(".hide-development-image").toggle();
  })

  $("#productManagement").click(function(){
    $("#product-management-show").toggle();
    $(".hide-product-management").toggle();
  })

  //Insert white box upo hover
  $(".Hover").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'});
  })
$('.submit').click(function () {
        var Name = $('#mce-FNAME').val();
        var Email = $('#mce-EMAIL').val();
        var Message = $('#mce-MESSAGE');
        var key ='user';
        if (Name == '' || Email == '' || Message == '') {
            alert('kindly fill in correctly!');
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
        }
  });
});


