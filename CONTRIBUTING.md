# Contribuindo com o Saia de Casa!


## Licença

Ao abrir um pull request nesse repositório, você concorda em fornecer seu trabalho sob a [licença do projeto](LICENSE).

## Inclusão e exclusão de eventos

> Se você não estiver familiarizado com o GitHub, este [guia de fluxo (flow guide)](https://guides.github.com/introduction/flow/) pode ser útil.

Os eventos atualmente estão listados no arquivo [javascripts/events.js](javascripts/events.js).

A estrutura de um evento é a seguinte:

```javascript
{
    titulo      : "como o evento vai aparecer no Saia de Casa!",
    data        : "no formato -> 01 de janeiro de 2099",
    local       : "nome do local onde o evento acontece",
    endereco    : "endereço de onde o evento acontece, tente ser o mais completo possível",
    embed_link  : "link do mapa do Google Maps, ajuda aqui: http://goo.gl/PxxQHo",
    localizacao : { latitude: -25.2218113 , longitude: -54.3462431 },
    link        : "link da página do evento"
},
```

Fora as erratas (que encorajamos que você nos encaminhe logo que perceber um problema), as duas contribuições padrão que o projeto espera receber são as seguintes:

- inclusão de novos eventos
- exclusão de eventos passados

E aqui a regra de ouro para a sua contribuição:

- cada inclusão de evento **DEVE** ser colocada em um Pull Request (PR) exclusivo
- todas as exclusões **PODEM** ser colocadas juntas em um único Pull Request

Isso facilita a análise e posterior aceitação de seus Pull Requests, ok?

## Grandes Reescritas

Abra uma issue para discussão antes de começar. Assim, podemos escutar o que você tem a dizer, e podemos fornecer  um encaminhamento se valerá a pena mudar grandes partes do projeto.

