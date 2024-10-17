document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Agendamento realizado com sucesso!</p>
                           <p>Nome: ${name}</p>
                           <p>Email: ${email}</p>
                           <p>Serviço: ${service}</p>
                           <p>Data: ${date}</p>
                           <p>Hora: ${time}</p>`;
});
