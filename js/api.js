var chaveCachorro = "pets"

var chaveAtendimento = "atendimentos"


// Função para gerar um ID único
function gerarIdUnico() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Função para salvar pet no localStorage
function salvarPet(pet) {
    pet.id = gerarIdUnico()
    const pets = JSON.parse(localStorage.getItem(chaveCachorro)) || [];
    pets.push(pet);
    localStorage.setItem(chaveCachorro, JSON.stringify(pets));
}

// Função para atualizar pet no localStorage
function atualizarPet(petAtualizado) {
    let pets = JSON.parse(localStorage.getItem(chaveCachorro)) || [];
    pets = pets.map(pet => pet.id === petAtualizado.id ? petAtualizado : pet);
    localStorage.setItem(chaveCachorro, JSON.stringify(pets));
}

// Função para carregar e exibir a lista de pets
function buscarPets() {
    const pets = JSON.parse(localStorage.getItem(chaveCachorro)) || [];
    return pets
}

// Função para carregar e exibir a lista de atendimentos
function buscarAtendimentos() {
    const atendimentos = JSON.parse(localStorage.getItem(chaveAtendimento)) || [];
    return atendimentos
}

// Função para editar pet
function buscarPet(id) {
    const pets = JSON.parse(localStorage.getItem(chaveCachorro)) || [];
    const pet = pets.find(p => p.id === id);
    return pet
}
