diferenca

CSR - Client Side Rendering
 - Comportamento natural do React
 - Faz operacoes no navegador do client

SSR - Server-side Rendering
 - Utilizar somente o SSR
 aplicacoes feitas com PHP sao focadas somente em SSR. Toda acao que o client faz no site, ele envia uma requisicao pro servidor carregar  e trazer os novos dados.
 - Mistura CSR com SSR
 O site da twitch e um exemplo de CSR COM SSR. Ele traz o CSR carregando as coisas estaticas, as estruturas do site e depois disso, ele vem trazendo do servidor os dados mais "sensiveis". ISso da uma sensacao de que o site carrega mais rapido. Enquanto ele nao carrega os dados principais do miolo, como ele ja trouxe a estrutura, e so colocar um icone de carregando. O usuario se sente melhor c isso.

SSG - Static-side Generation - user esse p magix static
 - Nunca muda, pagina estatica.
 ou 
 - pre-carregamento de todas as paginas possiveis
