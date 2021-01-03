
function sendEmail() { 
      Email.send({ 
        Host: "smtp.outlook.com", 
        Username: "leandros_correa@outlook.com", 
        Password: "!testeMail@", 
        To: 'leandros_correa@outlook.com', 
        From: "leandros_correa@outlook.com", 
        Subject: "Contato para GB Grande Colorado", 
        Body: "Contato para GB Grande Colorado!!",
        
        var nome = document.getElementsById("txtnome").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementsById("telefone").value;
        var mensagem = document.getElementsById("txtmensagem").value;
    
        document.get(nome + email + telefone + mensagem);
    
      })
      
        .then(function (message) { 
          alert("mail sent successfully") 
        }); 
}
/*
function formcontato(){
    var nome = document.getElementsById("txtnome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementsById("telefone").value;
    var mensagem = document.getElementsById("txtmensagem").value;
    
    document.write(nome + email + telefone + mensagem);
    
}
*/    