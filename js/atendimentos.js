
const status = document.querySelectorAll('.status');
mudarCorStatus()

function mudarStatusAtendimento(number) {
    const status = document.getElementById(`status-${number}`);
    const buttonAtendimento = document.getElementById(`btn-${number}`);

    if (status.innerText.includes('Em atendimento')) {
        status.innerText = 'Concluído';
    } if (status.innerText.includes('Agendado')) {
        status.innerText = 'Em atendimento';
    }


    console.log(buttonAtendimento)

    if (buttonAtendimento.innerText === 'Iniciar') {
        buttonAtendimento.innerText = 'Finalizar'
    }

    
    mudarCorStatus()

}


function mudarCorStatus() {

    for (i = 1; i <= status.length; i++) {

        const corStatus = document.getElementById(`status-${i}`);
        const circle = document.getElementById(`circle-${i}`);


        if (corStatus.innerText.includes('Em atendimento')) {
            corStatus.style.color = '#97D182'
            circle.style.backgroundColor = '#97D182'
        }

    }

}