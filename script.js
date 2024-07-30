var pegarBilhete = document.getElementById('butao');


function bilhete (){
    var nome = document.getElementById('txtNome').value;
    var email = document.getElementById('txtEmail').value;
    var telefone = document.getElementById('txtTelefone').value;
    var presença = document.getElementById('checkY');
    var nPresença = document.getElementById('checkN');

    if(presença.checked && nPresença.checked){
        alert('Marque apenas uma opção no checkbox');
    }
    else{
        if(nome !== '' && email !== '' && telefone !== '' && presença.checked){
            alert('Dados salvos e presença confirmada');
        }
        else{
            alert('Certifique-se de que preencheu todos as caixas de textos');
        }
    }
}

pegarBilhete.addEventListener('click', bilhete);

pegarBilhete.addEventListener('click', function(){
    create(nome, email, telefone)
});

function create(){
    var data = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    return firebase.database().ref().child('users').push(data);
}

