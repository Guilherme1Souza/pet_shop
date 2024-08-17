/* Elementos da página listapets*/

const petsCadastradosEl = document.getElementById("petsCadastrados");

/* Atualiza a lista de atendimentos cadastrados com o conteúdo do Local Storage */

const listaPets = buscarPets();

/* Renderiza cards com pets */
if (listaPets) {
	let petCard = "";

	Object.values(listaPets).forEach((pet) => {
		petCard += `
        <div
				class="item-lista bg-white p-0 border-20 d-flex justify-content-center align-items-center border border-1"
			>
				<img src=${pet.imagem} alt="Foto do ${pet.nomeCachorro}" class="imgCachorro" />

				<div class="atributos d-flex flex-column p-4">
					<div class="d-flex justify-content-end">
						<button onclick="editarCachorro('${pet.id}')"
							class="editar d-flex justify-content-center align-items-center"
						>
							<img src="../assets/editar.svg" alt="Editar" />
						</button>
					</div>
					<h3>${pet.nomeCachorro}</h3>

					<div
						class="container-fluid p-0 row d-flex mt-1 container-atributos"
					>
						<div
							class="conteudo-atributos p-0 rounded-4 d-flex align-items-center px-2 mt-2"
						>
							<img
								src="../assets/osso.svg"
								class="rounded-4 bg-light p-3"
								alt=""
							/>
							<div class="d-flex flex-column mx-2 text-atributos">
								<span class="tertiary-text-color">Raça</span>
								<p class="primary-text-color m-0">
                                ${pet.raca}
								</p>
							</div>
						</div>

						<div
							class="conteudo-atributos p-0 rounded-4 d-flex align-items-center px-2 mt-2"
						>
							<img
								src="../assets/osso.svg"
								class="rounded-4 bg-light p-3"
								alt=""
							/>
							<div class="d-flex flex-column mx-2 text-atributos">
								<span class="tertiary-text-color">Nascimento</span>
								<p class="primary-text-color m-0">${pet.idade}</p>
							</div>
						</div>

						<div
							class="conteudo-atributos p-0 rounded-4 d-flex align-items-center px-2 mt-2"
						>
							<img
								src="../assets/osso.svg"
								class="rounded-4 bg-light p-3"
								alt=""
							/>
							<div class="d-flex flex-column mx-2 text-atributos">
								<span class="tertiary-text-color">Alergia</span>
								<p class="primary-text-color m-0">${pet.alergia}</p>
							</div>
						</div>

						<div
							class="conteudo-atributos p-0 rounded-4 d-flex align-items-center px-2 mt-2"
						>
							<img
								src="../assets/osso.svg"
								class="rounded-4 bg-light p-3"
								alt=""
							/>
							<div class="d-flex flex-column mx-2 text-atributos">
								<span class="tertiary-text-color">Porte</span>
								<p class="primary-text-color m-0">${pet.porte}</p>
							</div>
						</div>

						<div
							class="conteudo-atributos p-0 rounded-4 d-flex align-items-center px-2 mt-2"
						>
							<img
								src="../assets/osso.svg"
								class="rounded-4 bg-light p-3"
								alt=""
							/>
							<div class="d-flex flex-column mx-2 text-atributos">
								<span class="tertiary-text-color">Pelagem</span>
								<p class="primary-text-color m-0">${pet.tipoPelagem}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="contato d-flex flex-column align-items-center py-4">
					<h5 class="m-0">Contato</h5>

					<div class="d-flex flex-column gap-1 align-items-center">
						<span class="primary-text-color mt-4"
							>${pet.nomeTutor}</span
						>
						<span class="secondary-text-color"
							>${pet.telefoneTutor}</span
						>
					</div>

					<button
						class="border-0 btn-mensagem mt-4 d-flex align-items-center justify-content-center text-white fw-medium"
					>
						<img
							src="../assets/whatsappIcon.svg"
							alt="Logo Whatsapp"
						/>
						Enviar mensagem
					</button>
				</div>
			</div>
        `;
		petsCadastradosEl.innerHTML = petCard;
	});
}
