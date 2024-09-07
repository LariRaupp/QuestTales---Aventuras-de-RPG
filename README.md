# QuestTales

**QuestTales** é um site interativo de histórias de RPG com múltiplas escolhas, desenvolvido por mim. A ideia é proporcionar uma experiência imersiva, onde os jogadores podem explorar aventuras medievais, tomar decisões e visualizar essas histórias através de ilustrações geradas por inteligência artificial.

Este site foi inicialmente criado como um projeto para a **Imersão Dev com Google Gemini e Alura**, mas pretendo continuar trabalhando nele!

## 📜 Funcionalidades

- **Navegação entre histórias**: O usuário pode avançar e voltar entre diferentes histórias.
- **Escolhas interativas**: As decisões do jogador têm diferentes desfechos.
- **Pesquisa interativa**: É possível pesquisar histórias por palavras-chave, buscando em todos os detalhes do conteúdo, incluindo títulos, descrições, opções e desfechos.
- **Imagens personalizadas**: As histórias contam com ilustrações geradas por inteligência artificial, com base nas escolhas e desfechos.
- **Design responsivo**: O site é totalmente compatível com dispositivos móveis e desktops.

> **Nota**: Atualmente, o site conta com apenas três histórias. Elas foram desenvolvidas para servirem como base durante o processo de criação e teste das funcionalidades. Com o tempo, novas histórias serão adicionadas, expandindo o conteúdo e aprimorando a experiência.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do site.
- **CSS3**: Estilos e responsividade.
- **JavaScript**: Lógica interativa e dinâmica.
- **Fontes Google**: Usei a fonte "Press Start 2P" para dar aquele toque retrô.
- **Imagens geradas por IA**: Ilustrações dinâmicas para dar vida às histórias, criadas com toques de RPG medieval.

### 🎨 Estilo Visual

A ideia por trás da questão visual do site é criar uma estética "retrô", remetendo a jogos vintage, RPG de mesa e aventuras medievais. O uso de fontes pixeladas, texturas de pergaminho e cores suaves ajudam a reforçar essa atmosfera nostálgica.

Embora o design geral do site tenha esse estilo mais clássico, as imagens geradas por IA seguem um estilo mais realista, pois a intenção é que representem a imaginação dos jogadores ao visualizarem as cenas narradas nas histórias. É como se essas ilustrações fossem o que o jogador "vê" ao vivenciar as aventuras em sua mente, complementando a imersão.

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Você pode rodar o projeto localmente ou acessar a versão hospedada no **Vercel**.

#### Opção 1: Acessar no Vercel
O projeto também está disponível online. Você pode acessá-lo através do seguinte link:

🔗 **Link para QuestTales no Vercel**

#### Opção 2: Rodar Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/QuestTales.git
   ```

2. **Abra o projeto** no VSCode ou qualquer outro editor de sua preferência.

3. **Instale a extensão "Live Server"** no VSCode para rodar o site localmente.

4. **Inicie o Live Server**:
   - Clique com o botão direito no arquivo `index.html` e escolha a opção "Open with Live Server".

5. **Acesse o projeto**:
   - O site estará disponível em `http://127.0.0.1:5500/`.

## 📂 Estrutura do Projeto

```bash
QuestTales/
│
├── assets/                   # Imagens e recursos visuais
│   ├── textures-and-bgs/      # Texturas e fundos do site
│   ├── story-images/          # Imagens específicas das histórias
│
├── stories.js                 # Arquivo com as histórias interativas
├── game.js                    # Lógica de navegação e interatividade
├── style.css                  # Estilos do site
├── index.html                 # Página principal
└── README.md                  # Documentação do projeto
```

### `index.html`
Aqui fica a estrutura principal do site. Incluí os elementos essenciais como o `<header>`, `<main>`, e `<footer>`, além de chamarmos os arquivos de estilo (`style.css`) e os scripts (`game.js` e `stories.js`).

### `stories.js`
Este arquivo contém todas as histórias interativas que desenvolvi. Cada história é um objeto dentro de um array, contendo título, descrição, partes, opções e desfechos. As partes estão organizadas para garantir que a navegação seja linear e fluída.

### `game.js`
Este arquivo contém a lógica principal do site, controlando:
- A **navegação** entre histórias.
- A exibição das **opções de escolha** e seus desfechos.
- A **pesquisa interativa** de histórias.
- A apresentação de imagens e textos dinâmicos de acordo com a escolha do jogador.

Além disso, o código foi comentado para facilitar a manutenção e possíveis contribuições futuras.

### `style.css`
Aqui ficam todos os estilos do site, incluindo responsividade, fontes e o layout visual. O objetivo foi criar um design que remetesse a jogos de RPG retrô, utilizando fontes pixeladas e texturas de pergaminho.

## 🔍 Pesquisa Interativa

A **pesquisa interativa** do QuestTales é uma das ferramentas mais poderosas e intuitivas, permitindo aos jogadores buscar histórias de maneira rápida e precisa. Essa funcionalidade não apenas facilita a navegação entre as aventuras, como também aprimora a imersão, ajudando os jogadores a encontrar temas específicos que desejam explorar.

Além de sua aplicação no QuestTales, o modelo de pesquisa pode ser facilmente adaptado por outros desenvolvedores para diferentes tipos de sites e conteúdos. Ao ajustar os parâmetros, como os dados a serem pesquisados e os critérios de busca, a função pode ser utilizada em projetos de qualquer natureza, como sites de e-commerce, blogs ou até portais de notícias.

### Recursos:
- **Cobertura Completa**: A pesquisa examina todos os aspectos das histórias, garantindo que nenhum detalhe passe despercebido.
  - **Título da história**
  - **Descrição geral**
  - **Partes específicas da história** (descrições e narrações)
  - **Opções de escolha** que o jogador pode fazer
  - **Desfechos** e suas consequências
  
- **Otimização Textual**: A busca foi projetada para ser extremamente flexível:
  - **Remoção de acentos**: O jogador pode buscar por palavras sem se preocupar com acentuação.
  - **Normalização de texto**: A pesquisa considera diferentes variações ortográficas, permitindo uma experiência de busca mais inclusiva.
  - **Casos alternados**: Não há diferença entre maiúsculas e minúsculas durante a busca.

### Como Funciona:
A pesquisa percorre o arquivo `stories.js`, onde todas as histórias estão organizadas, filtrando o conteúdo de acordo com o termo inserido pelo jogador na barra de busca. Essa função é executada e retorna as histórias que correspondem ao termo pesquisado.

#### Exemplo:
Se o jogador digitar "feitiço", a pesquisa irá procurar essa palavra em todos os títulos, descrições, opções de escolha e desfechos das histórias. Dessa forma, o jogador pode facilmente encontrar aventuras que envolvem magia e feitiçaria.

### Vantagens:
- **Busca Imersiva**: O jogador pode encontrar aventuras específicas ou novos elementos dentro de histórias já conhecidas.
- **Eficiência**: O sistema de busca garante que os resultados sejam retornados rapidamente, otimizando a experiência do usuário.
- **Flexibilidade de Linguagem**: A pesquisa não apenas ignora acentos, como também é tolerante a variações de capitalização, aumentando a acessibilidade.

### Aplicação em Outros Projetos
Essa função de busca é altamente adaptável e pode ser utilizada por outros desenvolvedores para diferentes tipos de conteúdo e sites. Ao ajustar os parâmetros e o conteúdo indexado, você pode aplicar a mesma lógica de busca em:

- **E-commerce**: Pesquisar produtos por nome, descrição, categorias e características.
- **Blogs**: Buscar artigos com base em títulos, tags ou conteúdo específico.
- **Portais de Notícias**: Filtrar notícias por palavras-chave, data de publicação ou tópicos específicos.
- **Catálogos Online**: Procurar itens por detalhes técnicos, como especificações ou marcas.

Com essa versatilidade, a função de pesquisa pode ser adaptada para qualquer aplicação onde o conteúdo precisa ser acessado de maneira rápida e eficiente. Tudo isso com a vantagem de ser flexível e fácil de personalizar para diferentes contextos e necessidades.

## 🖼️ Processo de Criação

1. **Criação da Estrutura HTML**:
   - Comecei pela estrutura básica, com `header`, `main` e `footer`, e defini as áreas onde as histórias seriam exibidas.
   
2. **Adição do CSS**:
   - O foco aqui foi criar uma interface limpa e que lembrasse cenários medievais. Para isso, usei texturas que remetem a pergaminhos e cores complementares.
   
3. **Desenvolvimento em JavaScript**:
   - O arquivo `stories.js` foi construído para armazenar cada história como um objeto. Já o `game.js` contém toda a lógica interativa, controlando a navegação entre as partes das histórias e a pesquisa interativa.

4. **Imagens Geradas por IA**:
   - Utilizei IA para gerar as imagens de cada parte das histórias, adicionando um toque visual que complementa a narrativa e ajuda na imersão do jogador.

🔮 **Melhorias Futuras**:
- Adicionar mais histórias e imagens geradas por IA.
- Refinar as mecânicas de escolha para torná-las ainda mais dinâmicas e impactantes, ampliando a interação do jogador.

## 📝 Contribuições

Este projeto é pessoal, mas ficarei muito feliz se quiserem contribuir com novas funcionalidades, histórias ou melhorias! Para contribuir:

1. Faça um **fork** do repositório.
2. Crie um **branch** para suas alterações: `git checkout -b feature-nova-funcionalidade`.
3. Faça o **commit**: `git commit -m 'Adiciona nova funcionalidade'`.
4. Envie suas alterações: `git push origin feature-nova-funcionalidade`.
5. Abra um **Pull Request** para revisão.

## 📞 Contato

Se você tiver dúvidas ou quiser me contatar para sugestões, estou disponível:

- **Nome**: Larissa Daitx Raupp
- **E-mail**: larissadaitxraupp@gmail.com

---

© 2024 **QuestTales**. Todos os direitos reservados.


