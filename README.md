# 4Cantos Limpeza
O site "4 Cantos Limpeza" é um projeto desenvolvido em HTML e CSS para a disciplina de Programação Web, que apresenta uma empresa especializada em serviços de limpeza. A estrutura do site é composta por um layout responsivo, que se adapta a diferentes tamanhos de tela, e inclui seções como "Sobre Nós", "Serviços" e "Contato". 

## Estrutura do Projeto

4-cantos-limpeza/
```
├── index.html
├── css/
│   └── about.css
│   └── contact.css
│   └── gallery.css
│   └── services.css
│   └── style.css
├── img/
│   └── 4cantos.jng
│   └── bars-solid.svg
│   └── check.svg
│   └── grupo.jpg
│   └── limpeza.jpg
│   └── mulher-mesa.jpg
│   └── mulher.jpg
│   └── pessoas-limpando.jpg
├── js/
│   └── script.js
├── about.html
├── contact.html
├── gallery.html
├── services.html
└── README.md
```

## Funcionalidades Implementadas

1. Eventos de clique:
- Adicionado botão "Solicitar Orçamento" na página inicial, redirecionando para a página de contato. 
- Botão na página inicial que leva para a página de serviços. 
- Ao enviar o formulário de contato sem preencher todos os campos obrigatórios, é exibido um alerta solicitando que todos os campos sejam preenchidos. 
- Clique no logo no footer para voltar para o início da página. 
- Criação de um botão na tela inicial que leva para a página de serviços. 

2. Eventos de mouse
- Efeito de zoom nas imagens da página inicial ao passar o mouse sobre elas. 

3. Eventos de entrada de teclado
- Validação do campo de telefone para aceitar apenas números e exatamente 11 dígitos na página de contato. 

## Instruções para Executar o Projeto

Para executar o projeto localmente usando o Live Server, siga estas etapas:

- Faça o download do arquivo ZIP do repositório e extraia-o para sua máquina local.

- Certifique-se de que você tenha o Live Server instalado no seu ambiente de desenvolvimento. 

Dessa forma, você poderá visualizar e interagir com o projeto localmente usando o Live Server.

## Bugs e Melhorias
- A validação do campo de telefone pode não funcionar corretamente em todos os navegadores.

- Separação do código JavaScript em um arquivo externo chamado script.js, o que melhora a organização e legibilidade do código.

- Remoção do código JavaScript inline do HTML e a adição das funcionalidades através de manipulação de eventos no arquivo script.js.

- Adição de eventos de clique para redirecionar o usuário ao clicar no botão "Solicite um Orçamento" na página inicial e na página de serviços, bem como no logotipo no rodapé para voltar para o início da página.

- Implementação de um evento de clique no botão "Enviar" na página de contato para validar os campos do formulário antes de enviar, mostrando um alerta em caso de campos obrigatórios não preenchidos.

- Adição de um evento de entrada de teclado para restringir o campo de telefone na página de contato a aceitar apenas números.

- Implementação de um evento de mouse (mouseenter e mouseleave) para criar o efeito de zoom nas imagens da página inicial ao passar o mouse sobre elas.

## Melhorias Futuras
1. Adicionar uma validação de e-mail mais robusta para garantir que os endereços de e-mail inseridos tenham o formato correto.
2. Integrar API para fornecer funcionalidades adicionais, como um sistema de reservas online.


