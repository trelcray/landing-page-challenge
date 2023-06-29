# Front-end Challenge - Leadster Landing Page

A [Leadster](https://leadster.com.br/) está com [uma vaga aberta](https://www.linkedin.com/jobs/view/3642375120) para o cargo de desenvolvedor front-end. A primeira etapa do processo de seleção consiste em concluir o desafio descrito neste documento.

## Table of contents

- [Overview](#overview)
  - [Screencast](#screencast)
  - [Links](#links)
  - [Getting started](#getting-started)
- [My process](#my-process)
    - [Decisions](#decisions)
  - [Organization](#organization)
  - [Built with](#built-with)
  - [Continued Development](#continued-development)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

O desafio consiste em desenvolver uma página de destino (landing page) utilizando HTML e CSS para estrutura e layout, e Next.js para a renderização da página no lado do servidor. Todas as exigências detalhadas podem ser encontradas na [apresentação](https://docs.google.com/presentation/d/1nq7d1rpntpfQGOabVO0R7TZzf6_rfFTd/edit#slide=id.g1e43248c0b5_0_22) fornecida.

#### Design

    ✓ Aplicação correta de fontes, cores, tamanhos, espaçamentos, ilustrações, ícones, textos e imagens.
    ✓ Comportamento adequado de botões e links ao passar o cursor (hover) ou ao receber o foco (focus).
    ✓ Responsividade garantida em dispositivos com larguras entre 352px e 1920px, tanto na orientação retrato quanto paisagem.
    ✓ Texto e espaçamento adaptáveis e fluidos.
    ✓ Galeria de imagens com comportamento responsivo.
    ✓ Animações suaves durante as transições de estados.

Obs: Algumas medidas podem ter uma margem de erro devido a avaliações manuais.

#### Funcionalidades

- [x] A aplicação deve permitir filtrar os vídeos.
- [x] Os vídeos devem ser ordenados adequadamente.
- [x] A paginação deve ser implementada levando em consideração a quantidade de vídeos.
- [x] Deve existir um diálogo para apresentar informações sobre um vídeo específico, incluindo seus dados relevantes.
- [x] A cobertura dos testes deve ser de pelo menos 90%.
- [x] A otimização para mecanismos de busca (SEO) deve atingir pelo menos 90%.

### Screencast

![App preview](./screenshots/screencast.gif)

### Links

- [Remote repository](https://github.com/trelcray/landing-page-challenge)

- [Live preview](https://landing-page-leadster-challenge.vercel.app)

### Getting started

Você pode utilizar a aplicação disponível na URL de *live preview* acima. Porém, caso queira construí-la em sua máquina:

#### Prerequisites

Certifique-se de que sua máquina possui Node 18+ instalado e o gerenciador de pacotes `npm`.

Certifique-se de ter instalado a extensão do ESlint.

#### Installation

Clone o repositório do projeto para sua máquina.

Using HTTPS:
```bash
https://github.com/trelcray/landing-page-challenge.git
```

Using GitHub CLI:
```bash
gh repo clone trelcray/landing-page-challenge
```

Navegue para o diretório recém-baixado:

```bash
cd landing-page-challenge
```

Instale as dependências do projeto utilizando `npm`:

```bash
npm install
```

#### Development

Para executar o projeto em modo de desenvolvimento, execute o comando:

```bash
npm run dev
```

Isso irá iniciar o servidor de desenvolvimento no endereço `http://localhost:3000`. Abra seu navegador e cole o endereço para visualizar a aplicação.

#### Test

Para executar o teste do projeto, execute o comando:

```bash
npm run test
```

Para executar o teste do projeto em modo watch, execute o comando:

```bash
npm run watch
```

Para executar o coverage do projeto, execute o comando:

```bash
npm run coverage
```

#### Building for Production

Para construir o projeto para produção, execute o comando:

```bash
npm run build
```

Isso irá gerar uma versão otimizada e minificada da aplicação na pasta `.next`.

#### Running in Production Mode

Após a construção do projeto, você pode iniciar um servidor em modo de produção executando o comando:

```bash
npm run start
```

Isso irá iniciar o servidor de produção no mesmo endereço `http://localhost:3000`. Abra seu navegador e cole o endereço para visualizar a aplicação otimizada.

## My process

### Decisions

Primeiramente, analisei o escopo do projeto e seus requisitos. Após cuidadosa avaliação, decidi quais tecnologias utilizar e criei a configuração inicial do projeto, incorporando tudo o que havia planejado utilizar.

Em seguida, comecei a desenvolver os componentes e a parte estática da aplicação. Posteriormente, implementei as funcionalidades necessárias. Após concluir essa etapa, introduzi os testes automatizados e realizei refatorações para garantir a qualidade do código.

Por fim, realizei o deploy da aplicação e analisei o SEO, fazendo as alterações necessárias para melhorar a otimização para mecanismos de busca.

### Organization

O Next.js é um framework que possui um padrão de organização de pastas próprio, o qual passou por uma importante alteração na versão 13.4. No meu projeto, sigo fielmente esses padrões e utilizo a pasta "src" para conter os arquivos específicos do projeto. Além disso, opto por separar as pastas de acordo com as responsabilidades dos componentes. Qualquer recurso que não faça parte do projeto é colocado na raiz do projeto, exceto a pasta "public".

### Built with

#### Technologies, libraries and tools

- React.js
- Next.js
- TypeScript
- Tailwind CSS
- Tailwind-merge
- Radix UI
- React Player
- Vitest
- Husky
- Prettier
- ESlint
- Testing-library
- Clsx
- Lucide-react

#### Techniques, concepts and more

- Mobile-first workflow
- Semantic HTML5 markup
- Flexbox / Grid
- Factory
- Hosted on Vercel

### Continued development

1. SEO 100%.

2. Coverage 100%.

3. Integration and E2E tests.

4. Get videos data from Google APIs (I didn't do that because of the challenge instructions)

5. Fix that errors generated by bad YouTube *iframe* setup.

### What I learned

1. The importance of using coverage.

2. That a project should always have at least unit tests, because even using strict typing and ESlint some errors pass.

3. How to actually perform commits.

4. The importance of having a well-documented project.



### Useful resources

1. [Analysis SEO](https://pagespeed.web.dev/)

## Author

- GitHub - [trelcray](https://github.com/trelcray)

- LinkedIn - [Thalis Zambarda](https://www.linkedin.com/in/thalis-zambarda/)

## Acknowledgments

Agradeço a [Leadster](https://leadster.com.br/) pela oportunidade de demonstrar minhas habilidades na prática. Estou entusiasmado em poder mostrar o que sou capaz de fazer e espero que essa experiência possa contribuir para o processo de seleção.