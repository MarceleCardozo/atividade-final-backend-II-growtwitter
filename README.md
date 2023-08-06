# GrowTwitter - Back-end

## Descrição
Este é o projeto de desenvolvimento da camada back-end do GrowTwitter, uma rede social estilo Twitter, usando as tecnologias Typescript e Programação Orientada a Objetos (POO).

## Funcionalidades

### Feature #1 - Cadastro de Usuários
- Permite criar novos usuários na aplicação.
- Cada usuário tem um identificador único (ID) gerado automaticamente.
- Campos obrigatórios: Nome, E-mail, Username e Senha.

### Feature #2 - Cadastro de Tweets
- Usuários podem criar tweets.
- Cada tweet tem um identificador único (ID) gerado automaticamente.
- Relacionamento 0-N entre usuários e tweets.
- Campos obrigatórios: Conteúdo e Tipo (normal ou reply).

### Feature #3 - Exibição de Tweets
- Exibe tweets no console com o formato: `@<username>: <conteúdo>\n<likes> *\n<replies> *`.
- Tweets podem ter likes e replies.
- Veja as Features #7 e #8 para mais informações sobre likes e replies.

### Feature #4 - Followers
- Usuários podem seguir outros usuários (exceto a si mesmos).
- Os usuários têm acesso à lista de quem eles seguem.

### Feature #5 - Likes em Tweets
- Usuários podem curtir tweets de outros usuários.
- Um tweet pode ter 0 ou N curtidas.

### Feature #6 - Replies em Tweets
- Usuários podem responder a tweets de outros usuários.
- Uma resposta é um novo tweet do tipo "reply".
- Um tweet pode ter 0 ou N replies.

### Feature #7 - Exibição de Tweets com Likes
- Exibe tweets com informações sobre os likes recebidos.
- Formato da exibição varia de acordo com a quantidade de likes.

### Feature #8 - Exibição de Tweets com Replies
- Exibe tweets com seus replies.
- Cada reply é indicado com o caractere ">".

### Feature #9 - Feed de Tweets
- Usuários podem ver seu feed de tweets.
- Feed inclui tweets do usuário e dos usuários que ele segue.
- Cada tweet é exibido conforme as Features anteriores.

## Configuração do Projeto

### Instalação
1. Clone este repositório.
2. Execute `npm install` para instalar as dependências.

### Execução
- Execute `npm run dev` para iniciar o servidor.

## Testes
- Foram criados testes para as funcionalidades de criação de usuários, criação de tweets, likes e replies.

## Tecnologias Utilizadas
- Node.js
- Typescript
- Banco de Dados em Memória (Listas)

## Equipe
Desenvolvido por Marcele Dutra Cardozo.

