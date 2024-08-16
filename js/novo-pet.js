const LISTA_RACAS_URL = "https://dog.ceo/api/breeds/list/all";

/* Elementos da página de cadastro de cachorros*/

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

let localStorageContent = localStorage.getItem("pets");
localStorageContent = JSON.parse(localStorageContent);

let listaCachorros = [];

if (localStorageContent) {
	listaCachorros = [...localStorageContent];
}

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
			console.log(processedResponse2.message);
		});
});

saveBtnEl.addEventListener("click", () => {
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
});

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
