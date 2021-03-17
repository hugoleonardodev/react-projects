### Antes de começar a desenvolver:

1. Clone o repositório

- `git clone https://github.com/tryber/sd-08-project-react-testing-library.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-08-project-react-testing-library`

2. Instale as dependências

- `npm install`

## Linter

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
  npm run lint
  npm run lint:styles
```

## Testes

- Haverá uma pasta chamada `./stryker` com diversos arquivos `nomeArquivo.conf.json`. Cada um deles é a configuração do avaliador para um requisito e ela **não deve ser alterada**. Quando você completar os testes unitarios de um arquivo, rode o comando `npx stryker run ./stryker/nomeDoArquivo.conf.json` para testar aquele arquivo individualmente.

- Por exemplo:
- Passo 1: _"Acabei de fazer os testes unitários do arquivo `Pokedex.test.js`!"_
- Passo 2: _"Vou rodar os meus testes para ver se eles estão todos passando!"_
- Passo 3: _"Agora vou rodar o comando para o requisito com `npx stryker run ./stryker/Pokedex.conf.json`!"_


    * Com o comando acima ele vai executar o stryker e verificar se os seus testes unitários estão corretos.

- Quando o comando `npx stryker run ./stryker/PokemonDetails.conf.json` for executado, com todos os testes passando, o avaliador apresentará uma saída semelhante à abaixo.
