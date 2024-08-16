/* Elementos da página home*/

const servicosCadastradosEl = document.getElementById("atendimentos-previstos");

/* Atualiza a lista de atendimentos cadastrados com o conteúdo do Local Storage */

let listaServicos = buscarAtendimentos();

/* Renderiza cards com serviços */
if (listaServicos) {
	let cards = "";
	let agendamento = "";
	Object.values(listaServicos).forEach((servico) => {
		if (servico.statusAtendimento === "Agendado") {
			agendamento = "agendado";
		} else if ("Em atendimento") {
			agendamento = "atendimento";
			servico.horarioAtendimento = "";
		}

		cards += `
        <div class="col-md-4">
            <div class="dog-card">
                <img src=${servico.fotoCachorro} alt="Foto do ${
			servico.nomeCachorro
		}">
                <h5 class="mt-2">${servico.nomeCachorro}</h5>
                <h6 class="mt-3">${servico.tipoServico.join(", ")}</h6>
                <div class="status ${agendamento}">
                    <span class="icon-wrapper">
                        <i class="bi bi-circle-fill"></i>
                    </span>
                    ${servico.statusAtendimento} ${servico.horarioAtendimento}
                </div>
            </div>
        </div>
        `;
		servicosCadastradosEl.innerHTML = cards;
	});
}
