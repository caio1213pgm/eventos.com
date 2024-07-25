const pegarBilhete = document.getElementById('butao');


function bilhete (){
    const nome = document.getElementById('txtNome').value;
    const email = document.getElementById('txtEmail').value;
    const telefone = document.getElementById('txtTelefone').value;
    const presença = document.getElementById('checkY')

    if(presença.checked){
        alert('Presença confirmada')
    }

    if(nome !== '' && email !== '' && telefone !== '' && presença.checked){
        alert('Dados salvos e presença confirmada')
    }
    else{
        alert('Certifique-se de que preencheu todos as caixas de textos')
    }
}

pegarBilhete.addEventListener('click', bilhete)