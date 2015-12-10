# Contribuindo com o Saia de Casa!


## Licença

Ao abrir um pull request nesse repositório, você concorda em fornecer seu trabalho sob a [licença do projeto](LICENSE).

## Inclusão e exclusão de eventos

> Se você não estiver familiarizado com o GitHub, este [guia de fluxo (flow guide)](https://guides.github.com/introduction/flow/) pode ser útil.

Os eventos atualmente estão listados no arquivo [javascripts/data/events.json](javascripts/data/events.json).

A estrutura de um evento é a seguinte:

```javascript
{
    titulo      : "como o evento vai aparecer no Saia de Casa!",
    dataInicio  : "no formato -> 2015-09-22",
    dataFim     : "no formato -> 2015-09-22",
    local       : "nome do local onde o evento acontece",
    endereco    : "endereço de onde o evento acontece, tente ser o mais completo possível",
    localizacao : { latitude: -25.2218113 , longitude: -54.3462431 },
    link        : "link da página do evento"
},
```

Fora as erratas (que encorajamos que você nos encaminhe logo que perceber um problema), as duas contribuições padrão que o projeto espera receber são as seguintes:

- inclusão de novos eventos
- exclusão de eventos passados

### Regra de ouro para sua contribuição

E aqui a regra de ouro para a sua contribuição:

- cada inclusão de evento **DEVE** ser colocada em um Pull Request (PR) exclusivo
- todas as exclusões **PODEM** ser colocadas juntas em um único Pull Request

Isso facilita a análise e posterior aceitação de seus Pull Requests, ok?

## Revise suas alterações

Cada Pull Request no GitHub é automaticamente compilado e publicado pelo
[Platform.sh](https://platform.sh/) num ambiente único que você pode acessar pelo seu navegador para revisar suas alterações.

![Platform.sh Pull Request Deployment](images/docs-pull-request-platformsh.png)

Para acessar a URL do ambiente [Platform.sh](https://platform.sh/), simplesmente acesse a página do Pull Request no GitHub e clique em `Details`.

Os arquivos específicos de configuração na raiz do repositório Git:

- `.platform.app.yaml`, `.platform/services.yaml` e     `.platform/routes.yaml` permitem que a`Platform.sh`_ compile Pull Requests.

## Como testamos sua contribuição

Quando o seu Pull Request for enviado, alguns testes serão feitos automaticamente no projeto (Travis-CI), a fim de garantir que todas as mudanças estão corretas.

Caso você queira realizar os testes no seu ambiente antes de enviar o Pull Request, é bem simples.
Basta executar estes comandos no seu terminal (você precisará ter o `node` instalado para isso):

```bash
# Com este passo todas as dependencias (htmlhint, jshint, csslint e mocha) serão instaladas
npm install

# Valida a estrutura do HTML
node_modules/.bin/htmlhint index.html

# Valida a estrutura dos arquivos Javascript e JSON
node_modules/.bin/jshint javascripts/**/*.{js,json}

# Valida a estrutura dos arquivos CSS
node_modules/.bin/csslint **/*.css --exclude-list=node_modules/

# Executa testes Javacript
node_modules/.bin/mocha javascripts/tests/*.js
```

## Grandes Reescritas

Abra uma issue para discussão antes de começar. Assim, podemos escutar o que você tem a dizer, e podemos fornecer  um encaminhamento se valerá a pena mudar grandes partes do projeto.
