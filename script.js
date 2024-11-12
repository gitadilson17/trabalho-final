document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formRegistro');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário (não recarrega a página)

        // Captura os dados do formulário
        const nomeAnimal = document.getElementById('nome').value;
        const corAnimal = document.getElementById('cor').value;
        const sexoAnimal = document.getElementById('sexo').value;
        const racaAnimal = document.getElementById('raca').value;
        const idadeAnimal = document.getElementById('idade').value;
        const tamanhoAnimal = document.getElementById('tamanho').value;
        const finalidadeAnimal = document.getElementById('finalidade').value;
        const motivoConsulta = document.getElementById('motivo').value;
        const nomeDono = document.getElementById('nomeDono').value;
        const moradaDono = document.getElementById('morada').value;
        const telefoneDono = document.getElementById('telefone').value;
        const emailDono = document.getElementById('email').value;

        // Cria um objeto com os dados do formulário
        const consulta = {
            nomeAnimal,
            corAnimal,
            sexoAnimal,
            racaAnimal,
            idadeAnimal,
            tamanhoAnimal,
            finalidadeAnimal,
            motivoConsulta,
            nomeDono,
            moradaDono,
            telefoneDono,
            emailDono
        };

        // Recupera as consultas existentes ou cria uma nova lista
        const consultas = JSON.parse(localStorage.getItem('consultas')) || [];

        // Adiciona a nova consulta à lista
        consultas.push(consulta);

        // Salva a lista de consultas no localStorage
        localStorage.setItem('consultas', JSON.stringify(consultas));

        // Redireciona para a página de status
        window.location.href = 'Status.html';
    });

    const consultas = [
        { nomeAnimal: 'Fido', nomeDono: 'João', motivoConsulta: 'Vacinação', status: 'Concluída' },
        { nomeAnimal: 'Rex', nomeDono: 'Maria', motivoConsulta: 'Consulta de rotina', status: 'Pendente' },
        // Mais consultas...
    ];
    
    localStorage.setItem('consultas', JSON.stringify(consultas));
    

});

