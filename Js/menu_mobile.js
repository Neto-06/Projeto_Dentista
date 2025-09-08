$(function(){
    
  //MENU RESPONSIVO
  function openMenu(){
    $(".menu-mobile").click(function(){
        $(this).find("ul").slideToggle();
    })
  }  
    
  openMenu();
})