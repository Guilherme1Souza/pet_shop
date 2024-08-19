/* Elementos da página de cadastro de serviços*/

const tituloPaginaEl = document.getElementById("tituloPagina");
const listaNomeCachorrosEl = document.getElementById("listaNomeCachorros");
const horarioEl = document.getElementById("horario");
const responsavelEl = document.getElementById("responsavel");
const servicosEl = document.getElementsByName("peas");
const totalEl = document.getElementById("total");
const btnEl = document.getElementById("btn");

/* Atualiza a lista de cachorros cadastrados com o conteúdo do Local Storage */

let listaCachorros = buscarPets();

/* Atualiza a lista de atendimentos cadastrados com o conteúdo do Local Storage */

let listaServicos = buscarAtendimentos();

/* Carregar lista dos nomes dos cachorros cadastrados para seleção*/
Object.values(listaCachorros).forEach((cachorro) => {
	const item = document.createElement("option");
	item.textContent = cachorro.nomeCachorro;
	listaNomeCachorrosEl.appendChild(item);
});

btnEl.addEventListener("click", salvarServico);

/* FUNÇÕES */

function capturaServicosSelecionados() {
	let servicosSelecionados = [];
	for (element of servicosEl) {
		if (element.checked) {
			servicosSelecionados.push(element.value);
		}
	}
	return servicosSelecionados;
}

function calculaValorServicos(servicosSelecionados) {
	let total = 0.0;
	for (servico of servicosSelecionados) {
		if (servico === "Banho") {
			total += 30.0;
		}
		if (servico === "Tosa") {
			total += 35.0;
		}
		if (servico === "Tosa Higiênica") {
			total += 45.0;
		}
		if (servico === "Corte de unha") {
			total += 10.0;
		}
	}
	alert(`Atendimento agendado com sucesso! - Total: R$ ${total},00`);
return total;
}

function cadastrarNovoServico(servicosSelecionados, total) {
	const novoServico = {
		nomeCachorro: listaNomeCachorrosEl.value,
		horarioAtendimento: horarioEl.value,
		tipoServico: servicosSelecionados,
		funcionarioResponsavel: responsavelEl.value,
		statusAtendimento: "Agendado",
		valorServico: total,
		fotoCachorro: buscarFotoPet(listaNomeCachorrosEl.value),
		idCachorro: buscaIdPet(listaNomeCachorrosEl.value),
	};
	salvarAtendimento(novoServico);
	limparCampos();
}

function limparCampos() {
	listaNomeCachorrosEl.value = "";
	horarioEl.value = "";
	responsavelEl.value = "";
	for (element of servicosEl) {
		if (element.checked) {
			element.checked = false;
		}
	}
}

function buscarFotoPet(nomeCachorro) {
	const foto = listaCachorros.find((p) => p.nomeCachorro === nomeCachorro);
	return foto.imagem;
}

function buscaIdPet(nomeCachorro) {
	const idPet = listaCachorros.find((p) => p.nomeCachorro === nomeCachorro);
	return idPet.id;
}

function salvarServico() {
	const servicosSelecionados = capturaServicosSelecionados();
	const total = calculaValorServicos(servicosSelecionados);
	cadastrarNovoServico(servicosSelecionados, total);
}
