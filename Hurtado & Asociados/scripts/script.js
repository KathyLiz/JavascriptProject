var chat;
window.onload=function(){
	chat = document.getElementById("chat");
}


function addChat(){
	
	var form ='<div id="main-wrapper">'+
    '<div class="container">'+
        '<div class="row">'+
         '<div class="col s5">'+
                '<div class="input-field">'+
                 '<input placeholder="Hey, ask me something..." id="q" type="text" >'+
                '</div>'+
                '<div id="result">'+
                '</div>'+
            '</div>'+
            '<div class="col s2"></div>'+
        '</div>'+
    '</div>'+
'</div>';
alert("hello"+form);
chat.innerHTML = form;
}