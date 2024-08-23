const LISTA_RACAS_URL = "https://dog.ceo/api/breeds/list/all";

/* Elementos da página de cadastro de cachorros*/

const tituloPaginaEl = document.getElementById("tituloPagina");
const nomeTutorEl = document.getElementById("nomeTutor");
const telefoneTutorEl = document.getElementById("telefoneTutor");
const alergiaEl = document.getElementById("alergia");
const nomeCachorroEl = document.getElementById("nomeCachorro");
const listaRacasEl = document.getElementById("listaRacas");
const imagemCachorroEl = document.getElementById("imagemCachorro");
const idadeEl = document.getElementById("idade");
const porteEl = document.getElementById("porte");
const tipoPelagem = document.getElementById("tipoPelagem");
const observacaoEl = document.getElementById("observacao");
const saveBtnEl = document.getElementById("saveBtn");

/* Atualiza a lista de cachorros cadastrados com o conteúdo do Local Storage */

let listaCachorros = buscarPets();

/* Carregar lista das raças */
const promisse = fetch(LISTA_RACAS_URL);
promisse
	.then((response) => response.json())
	.then((processedResponse) => {
		const listaRacas = processedResponse.message;
		Object.keys(listaRacas).forEach((raca) => {
			const item = document.createElement("option");
			item.textContent = raca;
			listaRacasEl.appendChild(item);
		});
		if (idPet) {
			const petEditado = buscarPet(idPet);
			listaRacasEl.value = petEditado.raca;
		}
	});

/* Carregar imagem do cachorro selecionado */

listaRacasEl.addEventListener("change", () => {
	const racaSelecionada = listaRacasEl.value;
	console.log(racaSelecionada);
	const imagemRacaUrl = `https://dog.ceo/api/breed/${racaSelecionada}/images/random`;
	const promisse2 = fetch(imagemRacaUrl);
	promisse2
		.then((response2) => response2.json())
		.then((processedResponse2) => {
			imagemCachorroEl.src = processedResponse2.message;
		});
});

function salvarCachorro() {
	const listaCahorros = {
		nomeTutor: nomeTutorEl.value,
		telefoneTutor: telefoneTutorEl.value,
		alergia: alergiaEl.value,
		nomeCachorro: nomeCachorroEl.value,
		raca: listaRacasEl.value,
		imagem: imagemCachorroEl.src,
		idade: idadeEl.value,
		porte: porteEl.value,
		tipoPelagem: tipoPelagem.value,
		observacao: observacaoEl.value,
	};
	salvarPet(listaCahorros);
	limparCampos();
	alert("Pet cadastrado com sucesso!");
}

saveBtnEl.addEventListener("click", salvarCachorro);

function limparCampos() {
	nomeTutorEl.value = "";
	telefoneTutorEl.value = "";
	alergiaEl.value = "";
	nomeCachorroEl.value = "";
	listaRacasEl.value = "";
	imagemCachorroEl.src = "https://i.postimg.cc/pdbqPX2g/pet.png";
	idadeEl.value = "";
	porteEl.value = "";
	tipoPelagem.value = "";
	observacaoEl.value = "";
}

/* Obter os parâmetros da query string */

const idPet = obterValorParametroURL("idCachorro");

/* Muda Dados da página conforme a query string recebida */

if (idPet) {
	tituloPaginaEl.textContent = "Edita Pet:";
	const petEditado = buscarPet(idPet);
	nomeTutorEl.value = petEditado.nomeTutor;
	telefoneTutorEl.value = petEditado.telefoneTutor;
	alergiaEl.value = petEditado.alergia;
	nomeCachorroEl.value = petEditado.nomeCachorro;
	imagemCachorroEl.src = petEditado.imagem;
	idadeEl.value = petEditado.idade;
	porteEl.value = petEditado.porte;
	tipoPelagem.value = petEditado.tipoPelagem;
	observacaoEl.value = petEditado.observacao;
	saveBtnEl.textContent = "Salvar alterações ->";
	saveBtnEl.removeEventListener("click", salvarCachorro);
	saveBtnEl.addEventListener("click", atualizaCachorro);
}

function atualizaCachorro() {
	const listaCahorros = {
		nomeTutor: nomeTutorEl.value,
		telefoneTutor: telefoneTutorEl.value,
		alergia: alergiaEl.value,
		nomeCachorro: nomeCachorroEl.value,
		raca: listaRacasEl.value,
		imagem: imagemCachorroEl.src,
		idade: idadeEl.value,
		porte: porteEl.value,
		tipoPelagem: tipoPelagem.value,
		observacao: observacaoEl.value,
		id: idPet,
	};
	atualizarPet(listaCahorros);
	limparCampos();
	window.location.href = "./listapets.html";
	alert("Pet atualizado com sucesso!");
}

function formatarTelefone(input) {
    let telefone = input.value.replace(/\D/g, '');

    if (telefone.length > 0) {
        telefone = '(' + telefone;
    }

    if (telefone.length > 3) {
        telefone = telefone.slice(0, 3) + ') ' + telefone.slice(3);
    }

    if (telefone.length > 10) {
        telefone = telefone.slice(0, 10) + '-' + telefone.slice(10);
    }

    if (telefone.length > 15) {
        telefone = telefone.slice(0, 15);
    }


    input.value = telefone;
}
