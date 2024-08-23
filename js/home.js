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
        <div class="" style="width: 233px">
        <img src=${servico.fotoCachorro} alt="Foto do ${
    servico.nomeCachorro
}" style="width: 100%; height: 224px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
            <div class="dog-card m-0">
                <h5 class="">${servico.nomeCachorro}</h5>
                <h6 class="">${servico.tipoServico.join(", ")}</h6>
                <div class="status ${agendamento}">
                   <div class="circle rounded-circle" id="circle-1"></div>
                    ${servico.statusAtendimento} ${servico.horarioAtendimento}
                </div>
            </div>
        </div>
        `;
		servicosCadastradosEl.innerHTML = cards;
	});
}
