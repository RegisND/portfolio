document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pega os valores dos campos
    var nome = document.getElementsByName('nome')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var telefone = document.getElementsByName('telefone')[0].value;
    var assunto = document.getElementsByName('assunto')[0].value;
    var mensagem = document.getElementsByName('mensagem')[0].value;

    // Monta o corpo do e-mail bonitinho
    var corpoEmail = "Nome: " + nome + "\n" +
                     "Email: " + email + "\n" +
                     "Telefone: " + telefone + "\n" +
                     "Mensagem: " + mensagem;
    
    // Cria o link mailto com codificação correta (resolve o "SÃ£o")
    window.location.href = "mailto:regis.dias1982@hotmail.com?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(corpoEmail);  
});