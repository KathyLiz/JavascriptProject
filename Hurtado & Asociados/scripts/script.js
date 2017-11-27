//Se utiliza jQuery para obtener el evento click sobre el botón de contáctanos 
$(function(){
$("#addClass").click(function () {
		//Lanza la ventana de chat, la abre
          $('#qnimate').addClass('popup-box-on');
            });
         //Oculta la ventana de chat
            $("#removeClass").click(function () {
          $('#qnimate').removeClass('popup-box-on');
            });
  });
