// Importar as histórias do arquivo stories.js
import stories from './stories.js';

let currentStoryIndex = 0;  // Índice da história atual que o jogador está visualizando
let currentPartIndex = 0;   // Índice da parte atual dentro da história selecionada
let filteredStories = [...stories];  // Cria uma cópia do array de histórias para permitir filtragem durante a pesquisa

// Função para exibir uma parte específica da história
function displayStory(index, partIndex = 0) {
    const story = filteredStories[index];  // Obtém a história com base no índice
    const storyBox = document.getElementById("current-story");  // Elemento HTML onde a história será exibida

    // Verifica se a história ou a parte da história existe
    if (!story || partIndex >= story.parts.length) {
        storyBox.innerHTML = `<p>Nenhuma história encontrada.</p>`;  // Caso não exista, exibe uma mensagem de erro
        return;
    }

    // Cria o conteúdo inicial com o título da história
    let storyContent = `
        <h2>${story.title}</h2>
    `;

    // Exibe a descrição da história se for a primeira parte
    if (partIndex === 0) {
        storyContent += `
            <p>${story.description}</p>
        `;
    }

    const part = story.parts[partIndex];  // Obtém a parte atual da história
    storyContent += renderImage(part);  // Renderiza a imagem, se houver uma na parte atual

    // Exibe a descrição da parte atual da história
    storyContent += `
        <div id="story-part">
            <p>${part.description}</p>
    `;

    // Adiciona os botões com as opções de escolha para a parte atual
    part.options.forEach((option, optionIndex) => {
        if (option.nextPart) {
            // Se a escolha leva a uma próxima parte, exibe o botão para continuar a história
            storyContent += `
                <button onclick="advanceToNextPart(${index}, '${option.nextPart}')">
                    ${option.text}
                </button>
                <br>
            `;
        } else {
            // Caso contrário, exibe o desfecho da escolha
            storyContent += `
                <button onclick="showOutcome(${index}, ${partIndex}, ${optionIndex})">
                    ${option.text}
                </button>
                <br>
            `;
        }
    });

    storyContent += `</div>`;  // Fecha o bloco de conteúdo
    storyBox.innerHTML = storyContent;  // Atualiza o conteúdo na página
}

// Função para avançar para a próxima parte da história
function advanceToNextPart(storyIndex, nextPartTitle) {
    const story = filteredStories[storyIndex];  // Obtém a história atual

    // Encontra a próxima parte usando o título exato, incluindo a numeração
    const nextPart = story.parts.find(part => part.title === nextPartTitle);

    // Verifica se a próxima parte foi encontrada
    if (nextPart) {
        const partIndex = story.parts.indexOf(nextPart);  // Obtém o índice da próxima parte
        displayStory(storyIndex, partIndex);  // Exibe a próxima parte da história
        window.scrollTo({ top: 0, behavior: 'smooth' });  // Rola a página para o topo suavemente
    } else {
        console.error(`Próxima parte não encontrada: ${nextPartTitle}`);
    }
}

// Função para normalizar texto, removendo acentuação e espaços extras
function normalizeText(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();
}

// Função para exibir o desfecho da escolha feita e encerrar a história
function showOutcome(storyIndex, partIndex, optionIndex) {
    const story = filteredStories[storyIndex];  // Obtém a história atual
    const outcome = story.parts[partIndex].options[optionIndex].outcome;  // Obtém o desfecho da opção escolhida
    const storyBox = document.getElementById("current-story");  // Elemento HTML onde o desfecho será exibido

    // Cria o conteúdo com o título da história e o desfecho da escolha
    let outcomeContent = `
        <h2>${story.title}</h2>
        <div id="outcome">
            <p>${outcome}</p>
        </div>
    `;

    // Adiciona o botão de "Jogar Novamente" no desfecho da história
    outcomeContent += `
        <button onclick="resetStory(${storyIndex})">
            Jogar Novamente
        </button>
    `;

    // Atualiza o conteúdo na página
    storyBox.innerHTML = outcomeContent;

    // Rola a página para o topo suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para reiniciar a história a partir do início
function resetStory(storyIndex) {
    currentPartIndex = 0;  // Reseta o índice para a primeira parte
    displayStory(storyIndex, currentPartIndex);  // Exibe a primeira parte da história
    window.scrollTo({ top: 0, behavior: 'smooth' });  // Rola a página para o topo suavemente
}


// Função para renderizar a imagem de uma parte, se houver
function renderImage(part) {
    // Verifica se há uma imagem associada à parte da história
    if (part.image) {
        return `
            <div class="story-image">
                <img src="${part.image}" alt="Imagem da Parte ${currentPartIndex + 1}" style="max-width:100%; border-radius:10px; margin-bottom:20px;">
            </div>
        `;
    }
    return '';  // Retorna vazio se não houver imagem
}

// Função para pesquisar histórias com base no termo inserido
function searchStories() {
    const searchTerm = normalizeText(document.getElementById("search-bar").value.toLowerCase());  // Obtém o termo de pesquisa e normaliza o texto

    // Filtra as histórias que contenham o termo de busca no título, descrição ou partes
    filteredStories = stories.filter(story => {
        const titleMatch = story.title ? normalizeText(story.title.toLowerCase()).includes(searchTerm) : false;  // Verifica no título
        const descriptionMatch = story.description ? normalizeText(story.description.toLowerCase()).includes(searchTerm) : false;  // Verifica na descrição

        // Verifica nas partes da história (descrição, opções, desfechos)
        const partsMatch = story.parts ? story.parts.some(part => {
            const partDescriptionMatch = part.description ? normalizeText(part.description.toLowerCase()).includes(searchTerm) : false;
            const optionsMatch = part.options ? part.options.some(option => {
                const optionTextMatch = option.text ? normalizeText(option.text.toLowerCase()).includes(searchTerm) : false;
                const outcomeMatch = option.outcome ? normalizeText(option.outcome.toLowerCase()).includes(searchTerm) : false;
                return optionTextMatch || outcomeMatch;
            }) : false;
            return partDescriptionMatch || optionsMatch;
        }) : false;

        return titleMatch || descriptionMatch || partsMatch;  // Retorna histórias que contenham o termo de busca
    });

    currentStoryIndex = 0;  // Reinicia o índice para a primeira história filtrada
    currentPartIndex = 0;  // Reinicia o índice para a primeira parte da história filtrada
    displayStory(currentStoryIndex, currentPartIndex);  // Exibe a primeira história filtrada
    document.getElementById("back-to-main").style.display = 'block';  // Exibe o botão de "Voltar para a página principal"
    toggleNavigationButtons();  // Atualiza os botões de navegação
}

// Função para resetar a pesquisa e voltar à lista completa de histórias
function resetSearch() {
    document.getElementById("search-bar").value = '';  // Limpa o valor da barra de pesquisa
    filteredStories = [...stories];  // Restaura a lista completa de histórias
    currentStoryIndex = 0;  // Reinicia para a primeira história
    currentPartIndex = 0;  // Reinicia para a primeira parte
    document.getElementById("back-to-main").style.display = 'none';  // Oculta o botão de "Voltar para a página principal"
    displayStory(currentStoryIndex, currentPartIndex);  // Exibe a primeira história completa
    toggleNavigationButtons();  // Atualiza os botões de navegação
    window.scrollTo({ top: 0, behavior: 'smooth' });  // Rola a página para o topo suavemente
}

// Função para avançar para a próxima história
function nextStory() {
    if (currentStoryIndex < filteredStories.length - 1) {
        currentStoryIndex++;  // Avança para a próxima história
        displayStory(currentStoryIndex);  // Exibe a nova história
        toggleNavigationButtons();  // Atualiza os botões de navegação
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });  // Rola a página para o topo suavemente
}

// Função para voltar para a história anterior
function previousStory() {
    if (currentStoryIndex > 0) {
        currentStoryIndex--;  // Volta para a história anterior
        displayStory(currentStoryIndex);  // Exibe a história anterior
        toggleNavigationButtons();  // Atualiza os botões de navegação
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });  // Rola a página para o topo suavemente
}

// Função para mostrar ou ocultar os botões de navegação com base na condição fornecida
function toggleButtonVisibility(buttonId, condition) {
    document.getElementById(buttonId).style.display = condition ? 'inline-block' : 'none';
}

// Função para atualizar a visibilidade dos botões de navegação (próxima/voltar)
function toggleNavigationButtons() {
    toggleButtonVisibility("previous-story", currentStoryIndex > 0);  // Exibe ou oculta o botão "Anterior"
    toggleButtonVisibility("next-story", currentStoryIndex < filteredStories.length - 1);  // Exibe ou oculta o botão "Próximo"
}

// Expor as funções para o escopo global para que possam ser usadas no HTML
window.advanceToNextPart = advanceToNextPart;
window.nextStory = nextStory;
window.previousStory = previousStory;
window.showOutcome = showOutcome;
window.resetStory = resetStory;
window.searchStories = searchStories;
window.resetSearch = resetSearch;


// Função executada quando a página é carregada (DOM pronto)
window.addEventListener('DOMContentLoaded', (event) => {
    displayStory(currentStoryIndex);  // Exibe a primeira história da lista ao carregar a página
    toggleNavigationButtons();  // Configura os botões de navegação
});
