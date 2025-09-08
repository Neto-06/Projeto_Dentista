$(function(){
    
    //VALIDANDO FORMULARIO 
    var nome = $("input[name=nome]");
    var email = $("input[name=email]");
    var telefone = $("input[name=telefone]");
    var mensagem = $("textarea[name=mensagem]");
    var submit = $("input[type=submit]");

    //RESETANDO O CAMPO COM FOCUS
    $("#contato #formulario input[name='nome'], #contato #formulario input[name='email'], #contato #formulario input[name='telefone'], #contato #formulario textarea").focus(function(){
        resetarEstilo($(this));
    })



    $("#contato #formulario").ajaxForm({
        dataType:"json",
        beforeSubmit:function(){

        var inputNome = nome.val();
        var inputEmail = email.val();
        var inputTelefone = telefone.val();
        var inputMensagem = mensagem.val();


        //VALIDANDO NOME
        if(!validarNome(inputNome,nome)){
            return false;
        }else if(!validarEmail(inputEmail,email)){
            return false;
        }else if(!validarTelefone(inputTelefone,telefone)){
            return false;
        }else if(!validarTextarea(inputMensagem,mensagem)){
            return false;
        }

        submit.prop('disabled',true).animate({
            opacity:0.4
        });

        submit.val("Enviando...");
        return true;

        },success:function(){
            resetarCampos(nome,email,telefone,mensagem);
            alert("Formulario enviado com sucesso!");
            submit.prop('disabled',false).animate({
                opacity:1
            })
            submit.val("Enviar");
        },error:function(){
            alert("Erro ao enviar o formulario!");
        }
    })

    


    //FUNÇAO PARA VALIDAR NOME 
    function validarNome(inputNome,nome){
         var splitStr = inputNome.trim().split(" ");
        var amount = splitStr.length; 

        //VALIDANDO NOME
        if(inputNome === ""){
            campoInvalido(nome,inputNome);
            return false;
        }

        if(amount < 2){
            campoInvalido(nome,inputNome);
            return false;
        }

        for(var i =0; i < amount; i++){

            var palavra = splitStr[i];
            var palavraMinuscula = palavra.toLowerCase();
            
            if(palavraMinuscula === "de" || palavraMinuscula === "da" || palavraMinuscula === "do" || palavraMinuscula === "das" || palavraMinuscula === "dos"){
               continue; 
            }

            if(!palavra.match(/^[A-ZÀ-Ú][a-zà-ú]+([ '-][A-Za-zÀ-ú]+)*$/)){
                campoInvalido(nome,inputNome);
                return false;
            }

        }     
        
        return true;

    }


    //FUNÇAO PARA VALIDAR EMAIL
    function validarEmail(inputEmail,email){

        if(inputEmail === ""){
            campoInvalido(email,inputEmail);
            return false;
        }

        if(!inputEmail.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/i)){
            campoInvalido(email,inputEmail);
            return false;
        }

        return true;

    }



    //FUNAÇAO PARA VALIDAR TELEFONE 
    function validarTelefone(inputTelefone,telefone){

        var alerta = $("#contato #formulario #alerta");

        if(inputTelefone === ""){
            campoInvalido(telefone,inputTelefone);
            return false;
        }


        if(!inputTelefone.match(/^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/)){
            campoInvalido(telefone,inputTelefone);
            alerta.html("Digite no formato (99) 99999-9999");
            return false;
        }else{
            alerta.html("");
        }

        return true;
    }





    //FUNÇAO PARA VLIDAR TEXTAREA
    function validarTextarea(inputMensagem,mensagem){
        
        if(inputMensagem === ""){
            campoInvalido(mensagem,inputMensagem);
            return false;
        }

        return true;
    }







    //FUNÇOES DE ESTILO
    function campoInvalido(el){
        el.css('border-color', 'red');
        el.css("color", "red");
    }

    function resetarEstilo(el){
        el.css("border-color", "#dadada");
        el.css("color", "black");
    }

    function resetarCampos(el1,el2,el3,el4){
        el1.val("");
        el2.val("");
        el3.val("");
        el4.val("");
    }
})