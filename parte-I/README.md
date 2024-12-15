# Treinamento do Desenvolvedor - Parte I - HTML + CSS + JavaScript + NodeJS + Express

**Criado em:** 15-dez-2024 *(faltam 10 dias para o aniversário de 297 do nascimento de Isaac Newton!)*
**Ano**: 296 a.N. (After Newton)
**Criado por**: Ricardo Cezar Volert

Este **Tutorial de Treinamento Desenvolvedor** deverá focar em JavaScript
- HTML: Linguagem de Marcação
- CSS: Folha de Estilo
- JavaScript: Linguagem de programação
- NodeJS: Runtime (Ambiente) de JavaScript
- API RESTful (interface de programação de aplicações - API)
- Express: Framework

Antes de mais tudo, quero que se você está lendo isso por ter encontrado sem querer, saiba que se trata da primeira parte de meus estudos sobre JavaScript, pois sou um velho programador de PHP e Python, mas tentava passar longe de JavaScript pois em minha época servia apenas para emitir alert no browser e montar calculadora ou alguma animação AJAX ou jQuery. 

Este material não precisa fazer sentido para você, pois são minhas anotações, mas de alguma forma está carregada de exemplos e dicas partindo de fundamentos de frontend (visual), para iniciar posteriormente o backend (lógica) e assim poder desenvolver projetos sem necessidade de linguagens LLMs. 

Confesso que seria um hipócrita se falar que não utilizei auxilio de AI para o desenvolvimento desta primeira parte, mas confesso que todo material foi testado e está sendo estudado em peso para o desenvolvimento de aplicações futuras, inclusive com novas atualizações em novas partes, e dando lugar a explorar outras linguagens.

> Este material foi desenvolvido sem gastar um centavo em cursos. Diferentemente dos que paguei e não acessei, via de exemplo Alura, Udemy, etc.

---
# HTML (linguagem de marcação) + CSS (folha de estilo)

## Exemplo Mínimo

`00-html/basico.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

- No exemplo básico é o resultado de apenas inserir `!` no VSCODE.
- Para adicionar uma folha de estilos que irá formatar o HTML, utilizamos`: `<link rel="stylesheet" href="styles.css">`
- Para um padrão do HTML separamos o código em 3 regiões pelas tags `<header>`, `<main>` e `<footer>`, sendo que dentro da `<main>` utilizamos as tags `<section>` para especificar que são assuntos ou seções diferentes dentro da página.
## Exemplo Introdutório

`00-html/index.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Página</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Bem-vindo ao Meu Site</h1>
    </header>
    <main>
        <section>
            <h2>Sobre Mim</h2>
            <p>Este é um exemplo básico de uma página HTML com um estilo simples.</p>
        </section>
        <section>
            <h2>Contato</h2>
            <p>Email: exemplo@dominio.com</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Meu Site</p>
    </footer>
</body>
</html>
```

`00-html/styles.css`
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    text-align: center;
}

main {
    padding: 20px;
}

section {
    background-color: white;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 5px;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    width: 100%;
    bottom: 0;
}
```

## Exemplo TailwindCSS

`00-html/tailwind.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Página com Tailwind</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans">
    <header class="bg-gray-800 text-white p-5 text-center">
        <h1 class="text-3xl">Bem-vindo ao Meu Site</h1>
    </header>
    <main class="p-5">
        <section class="bg-white p-4 mb-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold">Sobre Mim</h2>
            <p class="text-gray-700">Este é um exemplo de uma página com Tailwind CSS.</p>
        </section>
        <section class="bg-white p-4 mb-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold">Contato</h2>
            <p class="text-gray-700">Email: exemplo@dominio.com</p>
        </section>
    </main>
    <footer class="bg-gray-800 text-white text-center p-3 fixed bottom-0 w-full">
        <p>&copy; 2024 Meu Site</p>
    </footer>
</body>
</html>
```

## Exemplo Bootstrap

`00-html/bootstrap.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Página com Bootstrap</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>
<body class="bg-light">
    <header class="bg-dark text-white py-4 text-center">
        <h1 class="display-4">Bem-vindo ao Meu Site</h1>
    </header>
    <main class="container my-5">
        <section class="bg-white p-4 mb-4 rounded shadow-sm">
            <h2 class="h3">Sobre Mim</h2>
            <p>Este é um exemplo de uma página com Bootstrap.</p>
        </section>
        <section class="bg-white p-4 mb-4 rounded shadow-sm">
            <h2 class="h3">Contato</h2>
            <p>Email: exemplo@dominio.com</p>
        </section>
    </main>
    <footer class="bg-dark text-white text-center py-3 fixed-bottom">
        <p>&copy; 2024 Meu Site</p>
    </footer>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
```

# Exemplo com quase todos os recursos de HTML

`00-html/completo.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo Completo de HTML5</title>

    <!-- Metadados -->
    <meta name="description" content="Um exemplo completo de HTML5, com recursos avançados e bem formatados">
    <meta name="keywords" content="HTML5, exemplos, semântica, formulários, mídia">
    <meta name="author" content="Seu Nome">

    <!-- Open Graph para SEO -->
    <meta property="og:title" content="Exemplo Completo de HTML5">
    <meta property="og:description" content="Um exemplo completo de HTML5, com recursos avançados e bem formatados">
    <meta property="og:image" content="imagem.jpg">
    <meta property="og:type" content="website">

    <!-- Ícones -->
    <link rel="icon" href="favicon.ico">
    <link rel="shortcut icon" href="logo.ico">

    <!-- Estilo -->
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            color: #333;
        }

        header, footer {
            background: #f4f4f4;
            padding: 1em 0;
            text-align: center;
        }

        nav ul {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
            gap: 1em;
        }

        nav ul li {
            display: inline;
        }

        nav ul li a {
            text-decoration: none;
            color: #007BFF;
        }

        nav ul li a:hover {
            text-decoration: underline;
        }

        main {
            padding: 2em;
        }

        section {
            margin-bottom: 2em;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1em;
        }

        table, th, td {
            border: 1px solid #ddd;
        }

        th, td {
            padding: 0.5em;
            text-align: left;
        }

        th {
            background: #f4f4f4;
        }

        figure {
            text-align: center;
        }

        canvas {
            display: block;
            margin: 1em auto;
        }

        aside {
            background: #f9f9f9;
            padding: 1em;
            border-left: 5px solid #007BFF;
        }

        footer p, footer address {
            margin: 0.5em 0;
        }
    </style>
</head>

<body>
    <header>
        <nav aria-label="Navegação principal">
            <ul>
                <li><a href="#formulario">Formulário</a></li>
                <li><a href="#tabelas">Tabelas</a></li>
                <li><a href="#multimidia">Mídia</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#canvas">Canvas</a></li>
                <li><a href="#imagem">Imagens</a></li>
            </ul>
        </nav>
        <h1>Exemplo Completo de HTML5</h1>
    </header>

    <main>
        <section id="formulario">
            <h2>Formulário Interativo</h2>

            <form action="#" method="post">
                <fieldset>
                    <label for="usuario">Username:</label>
                    <input type="text" id="usuario" name="usuario" placeholder="Seu username" required aria-required="true"><br><br>
                    
                    <label for="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required aria-required="true"><br><br>
                    
                    <legend>Dados Pessoais</legend>

                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required aria-required="true"><br><br>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required aria-required="true"><br><br>

                    <label for="idade">Idade:</label>
                    <input type="number" id="idade" name="idade" min="1" max="120" required aria-required="true"><br><br>

                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="5" cols="30" placeholder="Escreva sua mensagem"></textarea><br><br>

                    <label for="slider">Avaliação (0-10):</label>
                    <input type="range" id="slider" name="avaliacao" min="0" max="10" value="5" aria-valuenow="5">
                    <span id="valor-slider">5</span><br><br>

                    <label>Gênero:</label><br>
                    <input type="radio" id="masculino" name="genero" value="Masculino">
                    <label for="masculino">Masculino</label><br>
                    <input type="radio" id="feminino" name="genero" value="Feminino">
                    <label for="feminino">Feminino</label><br><br>

                    <label for="aceitar">Aceito os termos:</label>
                    <input type="checkbox" id="aceitar" name="aceitar" required aria-required="true"><br><br>

                    <!-- Campo de texto -->
                    <div>
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required aria-required="true">
                    </div>
                
                    <!-- Campo de e-mail -->
                    <div>
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required aria-required="true">
                    </div>
                
                    <!-- Campo de senha -->
                    <div>
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required aria-required="true">
                    </div>
                
                    <!-- Campo numérico -->
                    <div>
                        <label for="idade">Idade:</label>
                        <input type="number" id="idade" name="idade" placeholder="Digite sua idade" min="1" max="120">
                    </div>
                
                    <!-- Campo de telefone -->
                    <div>
                        <label for="telefone">Telefone:</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="(XX) XXXXX-XXXX" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}">
                    </div>
                
                    <!-- Campo de data -->
                    <div>
                        <label for="nascimento">Data de Nascimento:</label>
                        <input type="date" id="nascimento" name="nascimento">
                    </div>
                
                    <!-- Campo de cor -->
                    <div>
                        <label for="cor-favorita">Cor Favorita:</label>
                        <input type="color" id="cor-favorita" name="cor-favorita">
                    </div>
                
                    <!-- Campo de upload de arquivo -->
                    <div>
                        <label for="curriculo">Currículo (PDF):</label>
                        <input type="file" id="curriculo" name="curriculo" accept=".pdf">
                    </div>
                
                    <!-- Campo de URL -->
                    <div>
                        <label for="site">Site Pessoal:</label>
                        <input type="url" id="site" name="site" placeholder="https://example.com">
                    </div>
                
                    <!-- Caixa de seleção -->
                    <div>
                        <label for="aceito-termos">
                        <input type="checkbox" id="aceito-termos" name="aceito-termos" required>
                        Aceito os termos e condições
                        </label>
                    </div>
                
                    <!-- Botões de rádio -->
                    <fieldset>
                        <legend>Gênero:</legend>
                        <div>
                        <input type="radio" id="genero-m" name="genero" value="M" required>
                        <label for="genero-m">Masculino</label>
                        </div>
                        <div>
                        <input type="radio" id="genero-f" name="genero" value="F">
                        <label for="genero-f">Feminino</label>
                        </div>
                        <div>
                        <input type="radio" id="genero-o" name="genero" value="O">
                        <label for="genero-o">Outro</label>
                        </div>
                    </fieldset>
                
                    <!-- Select (dropdown) -->
                    <div>
                        <label for="estado">Estado:</label>
                        <select id="estado" name="estado" required>
                        <option value="">Selecione</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="RS">Rio Grande do Sul</option>
                        </select>
                    </div>
                
                    <!-- Textarea -->
                    <div>
                        <label for="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem aqui" rows="4" required></textarea>
                    </div>
                
                    <!-- Botão de envio -->
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                    
                    
                    <button type="submit">Enviar</button>


                </fieldset>
            </form>
        </section>

        <section id="tabelas">
            <h2>Tabelas</h2>

            <table>
                <caption>Exemplo de Tabela Simples</caption>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Mensagem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>João</td>
                        <td>joao@exemplo.com</td>
                        <td>Gostei do site!</td>
                    </tr>
                    <tr>
                        <td>Maria</td>
                        <td>maria@exemplo.com</td>
                        <td>Muito informativo!</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="multimidia">
            <h2>Mídia</h2>

            <figure>
                <img src="imagem.jpg" alt="Exemplo de imagem">
                <figcaption>Uma imagem descritiva.</figcaption>
            </figure>

            <figure>
                <audio controls aria-label="Player de áudio">
                    <source src="audio.mp3" type="audio/mpeg">
                    Seu navegador não suporta o elemento de áudio.
                </audio>
                <figcaption>Exemplo de áudio.</figcaption>
            </figure>

            <figure>
                <audio controls aria-label="Player de áudio">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
                    Seu navegador não suporta o elemento de áudio.
                </audio>
                <figcaption>Exemplo de áudio.</figcaption>
            </figure>

            <figure>
                <video width="320" height="240" controls aria-label="Player de vídeo">
                    <source src="video.mp4" type="video/mp4">
                    Seu navegador não suporta o elemento de vídeo.
                </video>
                <figcaption>Exemplo de vídeo.</figcaption>
            </figure>

            <figure>
                <video width="320" height="240" controls aria-label="Player de vídeo">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                    Seu navegador não suporta o elemento de vídeo.
                </video>
                <figcaption>Exemplo de vídeo.</figcaption>
            </figure>

        </section>

        <section id="canvas">
            <h2>Canvas</h2>
            <canvas id="meuCanvas" width="400" height="200" style="border:1px solid #000;" role="img" aria-label="Gráfico desenhado no canvas."></canvas>
            <script>
                const canvas = document.getElementById('meuCanvas');
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = 'blue';
                ctx.fillRect(50, 50, 300, 100);
            </script>
        </section>

        <section id="imagem">
            <h2>Imagem</h2>
            <figure>
                <img src="https://via.placeholder.com/600x300" alt="Exemplo de imagem">
                <figcaption>Figura 1: Imagem ilustrativa</figcaption>
            </figure>
        </section>


        <section id="sobre">
            <h2>Sobre</h2>
            <article>
                <header>
                    <h3>O que é HTML5?</h3>
                </header>
                <p>HTML5 é a mais recente versão da linguagem de marcação HTML. Ele introduz novas tags e funcionalidades para facilitar o desenvolvimento web.</p>
            </article>

            <article>
                <header>
                    <h3>Por que usar HTML5?</h3>
                </header>
                <p>HTML5 é mais semântico, acessível e robusto, permitindo a criação de sites modernos e responsivos.</p>
            </article>
        </section>
    </main>

    <aside aria-label="Dicas úteis">
        <h3>Dicas:</h3>
        <ul>
            <li>Utilize tags semânticas para melhorar a acessibilidade.</li>
            <li>Insira metadados relevantes para SEO.</li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
        <address>
            Contato: <a href="mailto:seuemail@exemplo.com">seuemail@exemplo.com</a>
        </address>
    </footer>
</body>

</html>

```

# JS (linguagem de programação)

## Temporizador

`01-js/temporizador.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Controle de Tempo</title>
</head>
<body>
    <h1 id="titulo">Olá, Mundo!</h1>
    
	<script>
	    setTimeout(function() {
	        alert("3 segundos se passaram!");
	    }, 3000);
	</script>
</body>
</html>
```


- O script JavaScript roda no navegador e contribuí para deixar as páginas interativas. Um script JavaScript vem no final de cada página HTML. 
- `setTimeout` realiza algo que é solicitado para ele (que no caso foi uma função que emite um aviso de tela, chamado `alert`) após um tempo em milissegundos, que no caso é 3000ms que significa 3s.
## Manipulação de DOM (Document Object Model)

`01-js/dom.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulação de DOM</title>
</head>
<body>
    <h1 id="titulo">Olá, Mundo!</h1>
    <button onclick="alterarTexto()">Clique para mudar o texto</button>

    <script>
        function alterarTexto() {
            document.getElementById("titulo").textContent = "Texto alterado!";
        }
    </script>
</body>
</html>
```

- o botão que está HTML possuí um recurso que é chamar uma função `alterarTexto()` quando clica-se nele `onclick`
- a função `alterarTexto()` pertence ao JavaScript e a sua função é procurar dentro do documento uma determinada tag HTML, que possuí sua id com valor de `titulo`, para isso ele usa o comando `document.getElementById("titulo")`. Uma vez localizada esta ID, ele aplica o recurso de alteração do conteúdo de texto dado por `textContent` que possuí como valor `Texto Alterado!`. 
## Eventos e Interatividade

`01-js/eventos.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos e Interatividade</title>
</head>
<body>
    <h1 id="titulo">Olá, Mundo!</h1>
	<button id="meuBotao">Clique-me</button>
	
	<script>
	    document.getElementById("meuBotao").addEventListener("click", function() {
	        alert("Você clicou no botão!");
	    });
	</script>
</body>
</html>
```
- Aqui não precisamos utilizar uma função, pois o script está programado para procurar o botão através da sua ID (`document.getElementById("meuBotao")`), e adicionará um evento (`addEventListener`) na lista que será que quando houver um `click` ele realizará uma função que emitirá um alerta.
## Manipulação de Dados e Algoritmos

`01-js/manipulacao-de-dados.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulação de Dados</title>
</head>
<body>
	<input type="number" id="num1">
	<input type="number" id="num2">
	<button onclick="somar()">Somar</button>
	<p id="resultado"></p>
	
	<script>
	    function somar() {
	        var num1 = parseInt(document.getElementById("num1").value);
	        var num2 = parseInt(document.getElementById("num2").value);
	        var resultado = num1 + num2;
	        document.getElementById("resultado").textContent = "Resultado: " + resultado;
	    }
	</script>
</body>
</html>
```
- Aqui ele usa uma função chamada somar que é ativada no click do botão html.
- Está função captura o valor dos inputs pelas suas ids do html, recebendo elas como variáveis (num1 e num2) do tipo inteiro (`parseInt`).
- Depois é realizado a soma, criando a variável resultado e utilizado o recurso de adicionar texto, é colocado a concatenação/junção (+) do texto com o resultado dentro da ID de nome `resultado`.
## Validação de Formulários

`01-js/valida-form.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validação de Formulários</title>
</head>
<body>
	<form id="meuFormulario">
	    <label for="email">E-mail:</label>
	    <input type="email" id="email" required>
	    <button type="submit">Enviar</button>
	</form>
	
	<script>
	    document.getElementById("meuFormulario").addEventListener("submit", function(event) {
	        var email = document.getElementById("email").value;
	        if (!email) {
	            alert("O campo de e-mail é obrigatório!");
	            event.preventDefault(); // Impede o envio do formulário
	        }
	    });
	</script>
</body>
</html>
```
- Aqui ele adiciona um evento ao ser realizado o submit para o formulário todo. Ele procura o elemento de id `email` atribuindo seu valor a uma variável e verificando se ela atende os requisitos do campo e-mail, avisando um alerta se tiver problemas quanto ao e-mail e realizando um evento que impede o formulário de ser enviado (`event.preventDefault();`).
## Modificação de Estilos

`01-js/modifica-estilos.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificação de Estilos</title>
</head>
<body>
	<div id="caixa" style="width: 100px; height: 100px; background-color: red;"></div>
	<button onclick="mudarCor()">Mudar cor</button>
	
	<script>
	    function mudarCor() {
	        document.getElementById("caixa").style.backgroundColor = "blue";
	    }
	</script>
</body>
</html>
```
- Aqui ele procura o elemento de `id` chamado "caixa" (`document.getElementById("caixa")`) e altera a propriedade background-color de seu estilo por meio de  `style.backgroundColor`.
## Animações e Efeitos Dinâmicos

`01-js/animacao.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animações e Efeitos Dinâmicos</title>
</head>
	<div id="caixa" style="width: 100px; height: 100px; background-color: green;"></div>
	<button onclick="desaparecer()">Desaparecer</button>
	
	<script>
	    function desaparecer() {
	        var caixa = document.getElementById("caixa");
	        caixa.style.transition = "opacity 1s";
	        caixa.style.opacity = 0;
	    }
	</script>
</body>
</html>
```
- Aqui o clique ativa a função, onde um elemento `caixa` é procurado pela ID.
- Na sequência é alterado no seu estilo, aplicando uma transição de 1 segundo para a caixa ficar com opacidade, e após isso a opacidade é mantida em 0.
# Projeto 1: Alteração do Plano de Fundo

`02-projeto-html-css-js/projeto01.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alterar Cor de Fundo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            transition: background-color 0.5s ease;
        }

        .button-container {
            margin-top: 50px;
        }

        button {
            padding: 10px 20px;
            font-size: 18px;
            margin: 10px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        button:hover {
            opacity: 0.8;
        }

        .red { background-color: red; color: white; }
        .blue { background-color: blue; color: white; }
        .green { background-color: green; color: white; }
        .yellow { background-color: yellow; color: black; }
        .purple { background-color: purple; color: white; }
        .orange { background-color: orange; color: white; }
    </style>
</head>
<body>

    <h1>Alterar Cor de Fundo</h1>
    <div class="button-container">
        <button class="red" onclick="alterarCor('red')">Vermelho</button>
        <button class="blue" onclick="alterarCor('blue')">Azul</button>
        <button class="green" onclick="alterarCor('green')">Verde</button>
        <button class="yellow" onclick="alterarCor('yellow')">Amarelo</button>
        <button class="purple" onclick="alterarCor('purple')">Roxo</button>
        <button class="orange" onclick="alterarCor('orange')">Laranja</button>
    </div>

    <script>
        // Função que altera a cor de fundo conforme o botão clicado
        function alterarCor(cor) {
            document.body.style.backgroundColor = cor;
        }
    </script>

</body>
</html>
```
- Aqui a função recebe um valor chamado cor. sua função é alterar no documento, dentro do body, o estilo na propriedade background-color do html/css. 
- Neste caso, os botões, quando clicados, já encaminham o novo valor da classe a ser alterada quando chamam a função e por sua vez a classe possuí os novos valores para plano de fundo do corpo do texto e a cor da fonte, mas aqui esta cor de fonte só serve para o botão, pelo menos inicialmente.
# Projeto 2: Calculadora

`02-projeto-html-css-js/projeto02.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Simples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .calculator {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            width: 260px;
        }

        .display {
            font-size: 2em;
            width: 100%;
            height: 50px;
            text-align: right;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
            background-color: #f9f9f9;
            box-sizing: border-box;
        }

        .button-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        button {
            padding: 20px;
            font-size: 1.5em;
            cursor: pointer;
            border: none;
            background-color: #f0f0f0;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #ddd;
        }

        .equal {
            background-color: #4CAF50;
            color: white;
        }

        .equal:hover {
            background-color: #45a049;
        }

        .clear {
            background-color: #f44336;
            color: white;
        }

        .clear:hover {
            background-color: #e53935;
        }

        .operator {
            background-color: #2196F3;
            color: white;
        }

        .operator:hover {
            background-color: #1976D2;
        }
    </style>
</head>
<body>

    <div class="calculator">
        <input type="text" id="display" class="display" disabled>
        <div class="button-container">
            <button class="clear" onclick="clearDisplay()">C</button>
            <button class="operator" onclick="appendToDisplay('/')">/</button>
            <button class="operator" onclick="appendToDisplay('*')">*</button>
            <button class="operator" onclick="appendToDisplay('-')">-</button>

            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button class="operator" onclick="appendToDisplay('+')">+</button>

            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="appendToDisplay('1')">1</button>

            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button class="equal" onclick="calculate()">=</button>
        </div>
    </div>

    <script>
        // Função para limpar o display
        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        // Função para adicionar valores ao display
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        // Função para calcular a expressão
        function calculate() {
            try {
                const result = eval(document.getElementById('display').value);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Erro';
            }
        }
    </script>

</body>
</html>
```
- Este algoritmo requer uma análise melhor para ver o que ele faz.
# Algoritmo de Estruturas Lógicas para JavaScript

`03-estruturas-logicas-javascript/index.html`
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo Completo de HTML com JS</title>
</head>
<body>
  <h1>Exemplo de Lógica com JavaScript</h1>

  <!-- Entrada de dados -->
  <div>
    <label for="numero">Digite um número (inteiro):</label>
    <input type="number" id="numero" placeholder="Ex: 5">
    <button onclick="processarNumero()">Processar</button>
  </div>

  <!-- Resultado -->
  <h2>Resultados:</h2>
  <div id="resultado" style="border: 1px solid #ccc; padding: 10px; margin-top: 10px;"></div>

  <script>
    // Função principal chamada pelo botão
    function processarNumero() {
      const input = document.getElementById('numero').value;
      const numero = parseInt(input);

      if (isNaN(numero)) {
        alert('Por favor, insira um número válido.');
        return;
      }

      let resultado = `<p><strong>Número inserido:</strong> ${numero}</p>`;

      // Condicional IF/ELSE
      if (numero % 2 === 0) {
        resultado += `<p>O número ${numero} é <strong>par</strong>.</p>`;
      } else {
        resultado += `<p>O número ${numero} é <strong>ímpar</strong>.</p>`;
      }

      // Switch para faixa de valores
      switch (true) {
        case numero > 0 && numero <= 10:
          resultado += `<p>O número está entre 1 e 10.</p>`;
          break;
        case numero > 10 && numero <= 20:
          resultado += `<p>O número está entre 11 e 20.</p>`;
          break;
        default:
          resultado += `<p>O número está fora da faixa de 1 a 20.</p>`;
          break;
      }

      // Laço FOR (tabuada)
      resultado += `<p><strong>Tabuada do número:</strong></p><ul>`;
      for (let i = 1; i <= 10; i++) {
        resultado += `<li>${numero} x ${i} = ${numero * i}</li>`;
      }
      resultado += `</ul>`;

      // Operadores lógicos e WHILE (contagem regressiva)
      let contagem = numero;
      resultado += `<p><strong>Contagem regressiva:</strong></p><ul>`;
      while (contagem >= 0) {
        resultado += `<li>${contagem}</li>`;
        contagem--;
      }
      resultado += `</ul>`;

      // Operações matemáticas e função personalizada
      resultado += `<p><strong>Raiz quadrada:</strong> ${Math.sqrt(numero).toFixed(2)}</p>`;
      resultado += `<p><strong>Potência ao quadrado:</strong> ${Math.pow(numero, 2)}</p>`;

      // Exemplo de função com operador ternário
      resultado += `<p>${numero >= 0 ? 'O número é positivo ou zero.' : 'O número é negativo.'}</p>`;

      // Mostrar o resultado na página
      document.getElementById('resultado').innerHTML = resultado;
    }
  </script>
</body>
</html>
```

- Aqui temos um código recheado de estruturas lógicas no JavaScript.
- Quando clicado no botão do formulário é chamada a função `processarNumero()`
- A função procura o valor da id que tem o input e adiciona este este como constante, mas logo na sequência, passa o mesmo para inteiro `numero` para garantir que não terá outros tipos de valores. 
- Em seguida ele verifica se de fato existe um número ou é NaN (Not a number) utilizando um `if` que interrompe a execução para preservar o resto do código
```js
if (isNaN(numero)) {
	alert('Por favor, insira um número válido.');
	return;
}
```
- Logo em seguida ele começa a atribuir os valores concatenados para uma variável (ou uma alocação de memória com um nome específico) `resultado` que é inicializada com `let`
```js
let resultado = `<p><strong>Número inserido:</strong> ${numero}</p>`;
```
- A cada incremento neste `resultado` será utilizado o símbolo `+=`, por exemplo: 
```js
resultado += `<p>O número está entre 1 e 10.</p>`;
```
- Perceba que quando eu coloco uma variável dentro do HTML no JavaScript eu uso `${}`, com o valor da variável dentro, por exemplo, `${numero}`.
- Agora aqui começa os mais diversos testes de estruturas lógicas:
	- IF/ELSE `if (numero % 2 === 0)`
	- Switch/CASE `case numero > 0 && numero <= 10:` (por exemplo, o caso onde a proposição onde número é maior que 0 e menor ou igual à 10) , que utiliza o `break` para interromper quando encontrou a resposta para sua sua primeira situação favorável.
	- Laço FOR `for (let i = 1; i <= 10; i++){}` onde o primeiro item é o contador, a segunda é a verificação do ciclo e a terceira é o incremento no contador.
	- WHILE (contagem regressiva) `while (contagem >= 0){}` onde enquanto a contagem é maior ou igual a zero ele repete o ciclo dentro do `while`, onde é feito um decremento, `contagem--;`.
	- Operações matemáticas e função personalizada
		- `${Math.sqrt(numero).toFixed(2)}`: ele repassa para o HTML a raíz quadrada de do número, com duas casas decimais `toFixed(2)`
		- `${Math.pow(numero, 2)}`: aqui ele eleva o número ao quadrado. O `pow` é a função de potência onde 2 é a potência.
	- Operador ternário
		- `${numero >= 0 ? 'O número é positivo ou zero.' : 'O número é negativo.'}`: O operador ternário é como se fosse a função SE do Excel. Primeiro vem a condição, em seguida ele me dá uma reposta se a condição for verdadeira, seguida de uma resposta for falsa.
- Por fim, o resultado é exibido na página, colocando todo o valor da variável `resultado` no elemento HTML que possuí o nome da sua id como `resultado`.
```js
document.getElementById('resultado').innerHTML = resultado;
```

---
# NodeJS (ambiente JavaScript)

- O JavaScript permite escrever scripts gerais de frontend e backend sem precisar converter pois é compreendido pelos navegadores, mas não apresenta o Suporte `HTML-like` 
- Diferentemente do JavaScript, o node não é uma linguagem de programação, mas sim uma runtime (ambiente) de Javascript que permite executar ele no lado do servidor (backend => fora do navegador).
- Ele adiciona funcionalidades que não eram disponíveis no navegador, como acesso a sistema de arquivos para leitura e escrita, gerenciamento de servidores, módulos nativos, entre outros, que possibilita criar ferramentas de linhas de comando, desenvolvimento de aplicações em tempo real, construção de API's e servidores web.
- Os arquivos do NodeJS podem ser em .js mas normalmente projetos com React (ou bibliotecas/frameworks com sintaxes parecidas) utilizam .jsx como extensão dos arquivos.
- Os arquivos de Javascript não suportam sintaxes específicas como o JSX.
- JSX é uma extensão para JavaScript permitindo escrever `HTML-like syntax` (`JavaScript + XML-like (HTML-like)`) diretamente no código JavaScript.
- O JSX permite escrever a interface do usuário diretamente no código JavaScript.
- Os arquivos JSX precisam ser transpilados (convertidos para javascript puro) usadno ferramentas como BABEL, porque navegadores e runtimes como Node.JS não entendem o JSX diretamente.
- Assim, mesmo que use o JSX, no final ele é transpilados para JavaScript puro para a sua execução. Portanto, o que roda no navegador é sempre JavaScript.
- Vários projetos por convenção usam .js como padrão mas possuem dentro do arquivo conteúdo de .jsx, mesmo que deixar originalmente .jsx já identificaria que se trata de um arquivo que contém JSX e é parte de um componente visual. 
- Um aliás para Node.JS é apenas `node` e o gerenciador de pacotes do `node` (ou Node.JS) é o `npm`.
- Existe outro gerenciador para Node.JS que é o `yarn`.
- O Node.js foi projetado para trabalhar com JavaScript. Outras linguagens podem ser integradas ao Node.js, mas não são nativas ao ecossistema Node.js ou npm.
- O Node.JS foi escrito inicialmente para operar com JavaScript mas hoje, devido sua versatilidade, tanto o `node` como o `npm` trabalham também com o **TypeScript** e o **CoffeeScript**.
#### Funções:

`04-nodejs/funcoes-e-escopo/funcoes.js`
```javascript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Maria"));
```

- Para executar basta: `node funcoes.js` ou `node funcoes` no terminal.
#### Funções anônimas (Arrow Functions):

`04-nodejs/funcoes-e-escopo/funcoes-anonimas.js`
```javascript
const soma = (a, b) => a + b;
console.log(soma(2, 3));
```

- Aqui o console chama um método soma que recebe dois valores sendo que é aplicado a operação `=> a + b` para definir o valor de retorno do método.
- Para executar basta: `node funcoes-anonimas.js` ou `node funcoes-anonimas` no terminal.
#### Funções dentro de objetos:

`04-nodejs/funcoes-e-escopo/funcoes-dentro-de-objetos.js`
```javascript
const pessoa = {
  nome: "João",
  idade: 30,
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};

pessoa.apresentar();
```

- `pessoa` é um objeto e dele está sendo solicitado a execução de um método (ou função) chamado `apresentar`.
- Para executar basta: `node funcoes-dentro-de-objetos.js` ou `node funcoes-dentro-de-objetos` no terminal.
## Orientação a Objetos utilizando Node.JS
- O JavaScript é uma linguagem orientada a objetos baseada em protótipos (objetos podem herdar características de outros objetos). 
- Neste momento, utilizaremos o `node` e trabalharemos apenas coletando valores via terminal, ou seja, não utilizaremos o `http`.
### Classe e Objeto

`04-nodejs/orientacao-a-objetos/classe-e-objeto.js`
```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa("João", 30);
pessoa1.apresentar();
```
- A **classe** `class` é um modelo ou um "molde" que define como os objetos serão estruturados.
- No seu exemplo, a classe é `Pessoa`. Ela descreve:
    - As **propriedades** (ou atributos `this`) que os objetos terão (`nome` e `idade`);
    - Os **métodos** (funções) associados a esses objetos (`apresentar`).
- Aqui, a classe `Pessoa` define que cada "pessoa" terá:
	1. Um **nome** e uma **idade** passados como parâmetros no construtor.
	2. Um comportamento chamado `apresentar()`, que exibe esses valores no console.
- Para executar: `node classe-e-objeto.js`
### Herança

`04-nodejs/orientacao-a-objetos/heranca.js`
```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  
  fazerSom() {
    console.log("Som de animal");
  }
}
  
class Cachorro extends Animal {
  fazerSom() {
    console.log("Au Au");
  }

  exibirNome() {
    console.log(`${this.nome}`);
  }
}

const cachorro = new Cachorro("Rex");
console.log(cachorro.nome); // Saída: "Rex"
cachorro.fazerSom(); // Saída: Au Au
cachorro.exibirNome(); // Saída: "Rex"
```
- A **herança** é o mecanismo que permite que uma classe "filha" (ou "subclasse") herde as características (atributos e métodos) de uma classe "pai" (ou "superclasse"). Isso permite **reaproveitar código** e **especializar o comportamento** da classe filha.
- **Classe "Pai" ou Superclasse**:  A classe `Animal` é a classe "pai".  Ela define:
	- O atributo `nome`, que é passado pelo construtor.
	- O método `fazerSom()`, que imprime "Som de animal".
- **Classe "Filha" ou Subclasse**: A classe `Cachorro` **herda** da classe `Animal` usando a palavra-chave `extends`.  Classe filha não tem seu próprio construtor. Isso significa que `Cachorro`:
	- Herdará o atributo `nome` e o método `fazerSom()` definidos em `Animal`.
	- Pode **sobrescrever (ou reescrever)** o método `fazerSom()` para fornecer um comportamento específico para cachorros.
- A subclasse `Cachorro` redefine o método `fazerSom()` para que, ao invés de "Som de animal", ela imprima "Au Au". Já como Cachorro é uma classe filha de Animal que tinha como atributo o nome, ele herda o atributo nome também.
- **Instância do objeto**:  Quando você cria um objeto da classe `Cachorro` com `new Cachorro("Rex")`:
	- O construtor da classe `Animal` é chamado automaticamente (porque `Cachorro` não tem seu próprio construtor).
	- O atributo `nome` é definido como `"Rex"`.
	- O método sobrescrito `fazerSom()` da classe `Cachorro` será usado.
- Além disso como teste, foi colocado um método chamado `exibirNome`, que é próprio de `Cachorro`, mas que puxa um atributo que foi passado pelo construtor de `Animal`, mas que foi herdado.
- Para executar: `node heranca.js`
## JSON - Convertendo para JSON e fazendo parse:

`04-nodejs/json/main.js`
```javascript
const usuario = {
  nome: "João",
  idade: 30
};

// Convertendo para JSON
const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);  // Saída: {"nome":"João","idade":30}

// Convertendo de JSON para objeto
const usuarioObj = JSON.parse(usuarioJSON);
console.log(usuarioObj.nome);  // Saída: João
```
- O `node` tem suporte nativo para trabalhar com JSON. O pacote `JSON` é parte da API padrão.
- A conversão para JSON ocorre com o `stringify`, enquanto que a conversão de JSON para `objeto` ocorre por meio de `parse`.
- Para executar: `node main` ou `node main.js`
## Exemplo Básico de uso do Node.JS para WEB

`04-nodejs/server/server.js`
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Olá, Node.js!');
  res.end();
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```
- O javascript trabalha muito com `request` (pedidos do cliente para o servidor) e `response` (repostas do servidor a pedido do cliente). Estas são chamadas funções de **callback**. `(req, res) => { ... }`. Dentro de uma função de callback é onde detectamos que um pedido chega ao servidor e a resposta pode ser enviada a um cliente. Resumindo: a função de callback é onde se executa o código que vai processar os pedidos e enviar as respostas.
	- **Pedidos (`request`)** contém informações como:
		- Uma mensagem ou uma sequência de bytes a serem transmitidas.
		- Um cabeçalho com metadados sobre a solicitação, como o método de solicitação (GET, POST, PUT, DELETE, etc.) e os parâmetros da solicitação.
	- **Respostas (`response`)** contém informações como:
		- A sequência de bytes solicitada pelo cliente.
		- Um cabeçalho com metadados sobre a resposta, como o status do pedido (OK, Erro, etc.) e os cabos-reparte da resposta.
- Neste código é criado o `server` como uma constante e dentro dele estão os pedidos recebidos no servidor. 
- No caso, este código cria um servidor (`createServer`) na localhost:3000 e usa o `http` que é um pacote aparentemente nativo no node para que trabalhe com protocolos http. 
- Como **response** `res`, pois é o servidor que tem que entregar algo ao cliente, o servidor escreve uma mensagem `write` e finaliza a sua resposta `end()`. 
- Agora este servidor, inicia a sua `escuta de pedidos (callback)` dos clientes, onde o `listen` diz o portão/porta que está sendo utilizado para o servidor ouvir os pedidos do cliente. O `listen` é um método que será chamado automaticamente quando chega um pedido ao servidor.
	- No caso, existe um `console.log` que é um método que pode ser usado em qualquer local do código e sua função é fornecer uma saída no console do navegador. Se ele fosse aplicado fora de uma função de callback, o JS não saberia onde executar ele e não funcionaria.
	- Quando o `console.log` é executado no `listen`, podemos ver a mensagem de servidor inicializado apenas no terminal quando executamos o código
	- Para executar o código acima: 
```bash
node server.js
```
- Quando o servidor `http://localhost:3000` é ativado com a execução do código acima, podemos ver que o acento agudo em `Olá` não será executado adequadamente pois ele não reconhece caracteres nativos do Português e observaremos isso no `navegador (Browser)`.
- Para interromper o `server` no terminal basta dar um `Ctrl + C`. Entretanto, a porta 3000 ainda estará em uso, por isso, as vezes precisamos encerrar o processo utilizando os seguintes comandos:
	- No Linux/WSL, execute o seguinte comando para identificar o processo que está usando a porta 3000: `lsof -i :3000`
	- Agora teremos as informações sobre o processo que está usando a porta 3000, incluindo o **PID** (Process ID).
	- Agora para encerrar/matar o processo: `kill -9 PID` onde o `PID` será o número informado na consulta anterior que foi utilizado o `lsof`.

## Exemplo: Estruturas condicionais

`04-nodejs/restricao-idade/idade.js`
```js
const http = require('http');

// Função de callback para processar pedidos e enviar respostas.
function handleRequest(req, res) {
  let idade = 20;

  // Condição no servidor que verifica a idade do usuário.
  if (req.url === '/maior-de-idade') {
    if (idade >= 18) {
      console.log("Você é maior de idade.");
      res.write('Você é maior de idade.');
      res.end();
    } else {
      console.log("Você é menor de idade.");
      res.write('Você é menor de idade.');
      res.end();
    }
  } else if (req.url === '/') {
    console.log("Servidor executou a função de callback.");
    console.log("Olá, Node.js!");
    res.write('Olá, Node.js!');
    res.end();
  }
}

// Cria um servidor com o método HTTP GET.
const server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.');
});
```
- Semelhante ao exemplo passado temos o servidor `http` sendo criado `const server = http.createServer(handleRequest);`
- Temos que o mesmo está sendo solicitado a estar na porta 3000 (pedido), onde a resposta será uma mensagem no terminal.
- A novidade é uma função `handleRequest` que é chamada dentro do `createServer`.
	- Dentro desta função estarão os pedidos e respostas.
	- A função inicializa com uma palavra chave (estática) `let` chamada `idade`, o qual é atribuída o valor de '20'.
	- O código irá verificar SE a URL do pedido `req.url` é exatamente igual (`===`) à `/maior-de-idade` e SENÂO, SE a URL é exatamente igual à `/` . Em cada caso ele processará de forma diferente. 
		- Caso seja  '/' ele dará uma mensagem em tela e em console. 
		- Caso seja `/maior-de-idade` ele realizará uma nova estrutura condicional IF-ELSE emitindo uma mensagem para caso a idade seja `>= 18` e outra caso essa condição não seja atendida. 
	- Agora ao executar o código `node idade.js` podemos ter duas urls para testar e ver as diferenças:
		- `http://localhost:3000/maior-de-idade`
		- `http://localhost:3000`
- Novamente, para interromper o `server` no terminal basta dar um `Ctrl + C`. Entretanto, a porta 3000 ainda estará em uso, por isso, as vezes precisamos encerrar o processo utilizando os seguintes comandos:
	- No Linux/WSL, execute o seguinte comando para identificar o processo que está usando a porta 3000: `lsof -i :3000`
	- Agora teremos as informações sobre o processo que está usando a porta 3000, incluindo o **PID** (Process ID).
	- Agora para encerrar/matar o processo: `kill -9 PID` onde o `PID` será o número informado na consulta anterior que foi utilizado o `lsof`.

## Exemplo: Estruturas condicionais, recebendo valor por URL

`04-nodejs/restricao-idade/idade-por-url.js`
```js
const http = require('http');

// Função de callback para processar pedidos e enviar respostas.
function handleRequest(req, res) {
  // Cria um objeto URL usando a requisição
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`); // Necessário para resolver URLs absolutas
  const pathname = parsedUrl.pathname; // Pega apenas o caminho (ex: '/maior-de-idade')
  const query = parsedUrl.searchParams; // Pega os parâmetros da query string

  // Verifica se o parâmetro 'idade' foi passado na URL
  const idade = query.has('idade') ? parseInt(query.get('idade'), 10) : null; // Converte o valor para número, se presente

  // Condição no servidor que verifica a idade do usuário.
  if (pathname === '/maior-de-idade') {
    if (idade !== null && !isNaN(idade)) {
      if (idade >= 18) {
        console.log("Você é maior de idade.");
        res.write(`Você é maior de idade. Sua idade é ${idade}`);
      } else {
        console.log("Você é menor de idade.");
        res.write(`Você é menor de idade. Sua idade é ${idade}`);
      }
    } else {
      console.log("Idade não especificada.");
      res.write('Por favor, forneça sua idade na URL usando ?idade=SEU_VALOR.');
    }
    res.end();
  } else if (pathname === '/') {
    console.log("Servidor executou a função de callback.");
    console.log("Olá, Node.js!");
    res.write('Olá, Node.js!');
    res.end();
  } else {
    // Rota não encontrada
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Página não encontrada.');
    res.end();
  }
}

// Cria um servidor com o método HTTP GET.
const server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.');
});

```
- Aqui, precisaremos usar o mesmo código anterior, mas com algumas modificações:
	- Substituiremos a palavra chave idade, por uma verificação na url: 
```js
  // Cria um objeto URL usando a requisição
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`); // Necessário para resolver URLs absolutas
  const pathname = parsedUrl.pathname; // Pega apenas o caminho (ex: '/maior-de-idade')
  const query = parsedUrl.searchParams; // Pega os parâmetros da query string

  // Verifica se o parâmetro 'idade' foi passado na URL
  const idade = query.has('idade') ? parseInt(query.get('idade'), 10) : null; // Converte o valor para número, se presente
```
- Por isso `let idade = 20;` foi removido dando lugar a um operador ternário que atribuí um valor a constante `idade`.
- Além disso colocamos um condicionador para saber se a idade não é um valor nulo e que é um número: `idade !== null && !isNaN(idade)` antes de exibir o conteúdo em `localhost:3000/maior-de-idade?idade=50`, por exemplo.
- Quando vamos imprimir o valor de uma variável no texto, não podemos usar aspas simples, pois a interpolação de variáveis só funciona com **template literals**, que usam acentos graves: 
```js
res.write(`Sua idade é ${idade}`);
```

- Para testar o código basta ir no terminal e aplicar o seguinte comando: `node idade-por-url.js` e podemos ter cinco URLs para testar e ver as diferenças:
	- `http://localhost:3000/maior-de-idade`
	- `http://localhost:3000/maior-de-idade?idade=17`
	- `http://localhost:3000/maior-de-idade?idade=40`
	- `http://localhost:3000/maior-de-idade?idade=AAA`
	- `http://localhost:3000`
- Novamente, para interromper o `server` no terminal basta dar um `Ctrl + C`. Entretanto, a porta 3000 ainda estará em uso, por isso, as vezes precisamos encerrar o processo utilizando os seguintes comandos:
	- No Linux/WSL, execute o seguinte comando para identificar o processo que está usando a porta 3000: `lsof -i :3000`
	- Agora teremos as informações sobre o processo que está usando a porta 3000, incluindo o **PID** (Process ID).
	- Agora para encerrar/matar o processo: `kill -9 PID` onde o `PID` será o número informado na consulta anterior que foi utilizado o `lsof`.

## Resumo de JavaScript e Node.JS (até aqui)

Até aqui foi visto que existem funções, que são chamadas `function`, entretanto elas podem ser anônimas e operar dentro de objetos. Mas normalmente funções são chamadas de `métodos` quando estão dentro um objeto ou classe. 

O Javascript como toda linguagem de programação possuí estruturas lógicas e estruturas de repetição que podem ser implementadas. Além disso, o JavaScript permite concatenação por meio de `template literals` onde usamos acentos graves para imprimir variáveis dentro de mensagens de texto. Para isso, colocamos a variável dentro de um conjunto iniciado por `${` e finalizado por `}`, por exemplo: ${nome_cachorro}

Foi visto que JavaScript é Orientado a objetos onde existem dentro de classes `class` diversos atributos (onde usamos contexto `this`) que são acessados pelo `constructor` usando `this` nas classes pai (superclasses) e podem ser herdados (herança) para classes filhas (subclasses) através do uso de `extends`. A herança permite reescrever métodos, fornecendo compartamentos específicos para a classe filha, além de herdar atributos da classe pai, possibilitando o compartilhamento de características entre as classes.

Existem APIs nativas dentro do Node.JS que permitem a praticidade em operações e reduz o código. O `JSON` é uma das APIs nativas e permite conversões de dados através dos seus métodos `JSON.stringify()` e `JSON.parse()`.

O NodeJS não só roda códigos JavaScript via terminal mas também permite a construção de servidores Web através do pacote `http` que cria um servidor por meio de `createServer`. O servidor http atua com funções de `callback` pelo processamento de objetos `Requests` (pedidos do cliente) e `Response` (respostas do servidor), possibilitando  informações no Browser (navegador) do cliente e no Console (terminal) do servidor.

Uma outra API nativa do Node.JS é a URL e por meio dela podemos analisar a URL e seus componentes.

# API RESTful (ou REST API) (interface de programação de aplicações - API)

> **APIs (Interfaces de Programação de Aplicações)** são conjuntos de regras e especificações que permitem que softwares diferentes se comuniquem entre si. Elas definem os métodos e os formatos de dados que podem ser utilizados para interagir com um serviço ou sistema, sem a necessidade de entender a implementação interna do mesmo.

Um conceito importante são **APIs RESTful** que interface de programação de estruturas (API) sendo uma uma forma de estruturar a comunicação entre sistemas usando os principios e restrições da arquitetura REST (Representational State Transfer => REST é um conjunto de princípios arquiteturais usados para o desenvolvimento de sistemas distribuídos, especialmente na criação de APIs para comunicação entre servidores e clientes). 

**REST API** facilita a interação entre clientes e servidores com base em recursos, utilizando métodos HTTP para realizar operações em recursos identificados por URLs, mantendo a comunicação sem estado, e utilizando formatos de dados como JSON ou XML.

> As APIs RESTful permitem que um servidor envie dados em formatos como JSON ou XML para um cliente que solicita essas informações.

Assim, em resumo: A API **RESTful** é uma forma de estruturar a comunicação entre sistemas usando a arquitetura **REST**. Ela facilita a interação entre clientes e servidores com base em recursos, utilizando métodos HTTP para realizar operações em recursos identificados por URLs, mantendo a comunicação sem estado (`stateless`), e utilizando formatos de dados como JSON ou XML.
## Conceitos que definem o API RESTful
### 1. Baseada em recursos
- Em uma API RESTful, os **recursos** (como usuários, produtos, artigos) são identificados por **URLs** (endereços da web). Cada URL corresponde a um recurso específico.
- Exemplo: `/usuarios/123` pode representar o recurso "usuário com ID 123".
### 2. Operações padrão com HTTP (Métodos HTTP)
- A API RESTful usa os métodos HTTP padrão para operar sobre os recursos:
    - **GET**: Para obter (ler) informações de um recurso.
    - **POST**: Para criar um novo recurso.
    - **PUT**: Para atualizar completamente um recurso existente.
    - **PATCH**: Para atualizar parcialmente um recurso.
    - **DELETE**: Para excluir um recurso.
Esses métodos correspondem às operações CRUD (Criar, Ler, Atualizar, Deletar).
### 3. Stateless (Sem Estado)
- Cada requisição feita a uma API RESTful deve ser independente e conter todas as informações necessárias para processar a solicitação. Ou seja, o servidor não armazena estado entre as requisições.
- A sessão de usuário, por exemplo, não é mantida no servidor; ela deve ser gerenciada pelo cliente (geralmente usando cookies ou tokens, como JWT).
### 4. Formato de dados comum (geralmente JSON ou XML)
- As APIs RESTful normalmente trocam dados no formato **JSON** (JavaScript Object Notation) ou **XML**. JSON é o mais comum atualmente devido à sua simplicidade e compatibilidade com JavaScript.
Exemplo de uma resposta JSON:
```json
{
  "id": 123,
  "nome": "João",
  "email": "joao@email.com"
}
```
### 5. Comunicação sem estado (Stateless)
- Cada requisição da API deve conter toda a informação necessária para processar a solicitação. O servidor não deve depender de informações de chamadas anteriores.
### 6. Uso de HTTP status codes
- Uma API RESTful utiliza **códigos de status HTTP** para informar o resultado de uma operação:
    - **200 OK**: A requisição foi bem-sucedida.
    - **201 Created**: Um novo recurso foi criado.
    - **400 Bad Request**: A requisição foi malformada ou inválida.
    - **404 Not Found**: O recurso solicitado não foi encontrado.
    - **500 Internal Server Error**: Ocorreu um erro no servidor.
### 7. Navegabilidade (HATEOAS - Hypermedia As The Engine of Application State)
- Embora nem todas as APIs RESTful implementem o HATEOAS, ele é um conceito importante: a API deve fornecer ao cliente informações sobre o que pode ser feito a seguir. Ou seja, as respostas da API podem incluir links para outras ações que o cliente pode realizar.
## Exemplo de uma API RESTful
1. **GET /usuarios**: Retorna uma lista de todos os usuários.
2. **GET /usuarios/123**: Retorna os dados do usuário com ID 123.
3. **POST /usuarios**: Cria um novo usuário.
4. **PUT /usuarios/123**: Atualiza o usuário com ID 123.
5. **DELETE /usuarios/123**: Exclui o usuário com ID 123.

# Express (framework)
- **Express** é um **framework** para construir aplicativos web em Node.js.
- Embora o módulo `http` forneça uma funcionalidade básica para construir um servidor JavaScript, o `express` fornece abstrações e funcionalidades extras que podem deixar o trabalho mais eficiente e produtivo, além de permitir o desenvolvimento de APIs e servidores mais rápido, fácil e flexível.
- O **Express** facilita a criação de rotas e o processamento de requisições HTTP com uma sintaxe mais simples. 
## Exemplos: Rotas com Express

`05-nodejs-express/basico/rotas.js`
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('O servidor está rodando na porta 3000');
});
```

- Como o `Express` não faz parte do núcleo do Node.js, você precisa instalá-lo antes de executar o código. Para isso:
	- Inicialize o projeto como Node.JS: `npm init -y`
	- Isso irá criar o arquivo `package.json` que gerencia dependências do projeto.
	- Em seguida, instalamos o Express no nosso servidor: `npm install express`
	- Isso adicionará o pacote `express` à sua lista de dependências no `package.json` e criará uma pasta `node_modules` onde o pacote será armazenado.
	- Agora, após instalado o Express e sem nenhum conflito de dependências, podemos rodar executar o arquivo por meio de: `node rotas.js` ou `node rotas`

## Exemplo: API RESTful com Express (CRUD para JavaScript)

Abaixo está um exemplo básico de como criar uma API com o Express que suporta os métodos **GET**, **POST**, **PUT** e **DELETE**. Ele utiliza **JSON** para manipular os dados e roda na porta 3000. O exemplo simula uma pequena API que gerencia uma lista de usuários.

`05-nodejs-express/api-restful/main.js`
```javascript
const express = require('express');
const app = express();

// Middleware para interpretar JSON no body das requisições
app.use(express.json());

// Simulando um banco de dados em memória
let usuarios = [
  { id: 1, nome: "João", idade: 25 },
  { id: 2, nome: "Maria", idade: 30 }
];

// Rota GET - Listar todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Rota GET - Obter um usuário pelo ID
app.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

// Rota POST - Adicionar um novo usuário
app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1, // Simulando um ID automático
    nome: req.body.nome,
    idade: req.body.idade
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario); // Retorna o usuário criado com status 201 (Created)
});

// Rota PUT - Atualizar um usuário existente pelo ID
app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (usuario) {
    usuario.nome = req.body.nome || usuario.nome;
    usuario.idade = req.body.idade || usuario.idade;

    res.json(usuario); // Retorna o usuário atualizado
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

// Rota DELETE - Remover um usuário pelo ID
app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = usuarios.findIndex(u => u.id === id);

  if (indice !== -1) {
    usuarios.splice(indice, 1); // Remove o usuário pelo índice
    res.status(204).send(); // Retorna status 204 (No Content)
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

// Inicializando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

- Como o `Express` não faz parte do núcleo do Node.js, você precisa instalá-lo antes de executar o código. Para isso:
	- Inicialize o projeto como Node.JS: `npm init -y`
	- Isso irá criar o arquivo `package.json` que gerencia dependências do projeto.
	- Em seguida, instalamos o Express no nosso servidor: `npm install express`
	- Isso adicionará o pacote `express` à sua lista de dependências no `package.json` e criará uma pasta `node_modules` onde o pacote será armazenado.
	- Agora, após instalado o Express e sem nenhum conflito de dependências, podemos rodar executar o arquivo por meio de: `node main.js` ou `node main`
### Como testar essa API
1. **Inicie o servidor**:
   ```bash
   node nome_do_arquivo.js
   ```
2. **Faça requisições para a API**:
   Você pode usar ferramentas como **Postman**, **Insomnia** ou **curl** para testar as rotas. Aqui estão os exemplos de uso usando o terminal Linux Ubuntu (e funciona no PowerShell do Windows):

   - **GET `/usuarios`**:  
     Retorna todos os usuários.
     ```
     curl http://localhost:3000/usuarios
     ```

   - **GET `/usuarios/:id`**:  
     Retorna um usuário específico pelo `id` (exemplo: `/usuarios/1`).
     ```
     curl http://localhost:3000/usuarios/1
     ```

   - **POST `/usuarios`**:  
     Adiciona um novo usuário (exemplo de corpo JSON: `{ "nome": "Carlos", "idade": 28 }`).
     ```
     curl -X POST -H "Content-Type: application/json" -d '{"nome":"Carlos","idade":28}' http://localhost:3000/usuarios
     ```

   - **PUT `/usuarios/:id`**:  
     Atualiza um usuário pelo `id` (exemplo: `/usuarios/1` com corpo JSON: `{ "nome": "João Atualizado", "idade": 26 }`).
     ```
     curl -X PUT -H "Content-Type: application/json" -d '{"nome":"João Atualizado","idade":26}' http://localhost:3000/usuarios/1
     ```

- Caso o usuário não exista mais com esta ID, ele retorna:
```json
{"error":"Usuário não encontrado"}
```

   - **DELETE `/usuarios/:id`**:  
     Remove um usuário pelo `id` (exemplo: `/usuarios/1`).
     ```
     curl -X DELETE http://localhost:3000/usuarios/1
     ```
### O que cada rota faz
1. **GET `/usuarios`**: Retorna todos os usuários cadastrados.
2. **GET `/usuarios/:id`**: Retorna o usuário correspondente ao ID fornecido.
3. **POST `/usuarios`**: Adiciona um novo usuário à lista.
4. **PUT `/usuarios/:id`**: Atualiza os dados de um usuário específico.
5. **DELETE `/usuarios/:id`**: Remove o usuário do banco de dados simulado.

## Exemplo: Site com algumas páginas

`05-nodejs-express/pequeno-site/main.js`

```js
const express = require('express');
const app = express();

// Middleware opcional para registrar cada acesso no console
app.use((req, res, next) => {
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  next();
});

// Página inicial
app.get('/', (req, res) => {
  res.send(`
    <h1>Bem-vindo ao Meu Site</h1>
    <p>Explore as nossas páginas:</p>
    <ul>
      <li><a href="/contato">Contato</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/portifolio">Portfólio</a></li>
      <li><a href="/quemsomos">Quem Somos</a></li>
    </ul>
  `);
});

// Página Contato
app.get('/contato', (req, res) => {
  res.send(`
    <h1>Contato</h1>
    <p>Envie-nos uma mensagem!</p>
    <form method="post" action="/contato">
      <label for="nome">Nome:</label><br>
      <input type="text" id="nome" name="nome"><br><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br><br>
      <button type="submit">Enviar</button>
    </form>
    <a href="/">Voltar para o início</a>
  `);
});

// Processar envio do formulário de contato (POST)
app.post('/contato', (req, res) => {
  res.send(`<h1>Obrigado por entrar em contato!</h1> <a href="/">Voltar para o início</a>`);
});

// Página Blog
app.get('/blog', (req, res) => {
  res.send(`
    <h1>Blog</h1>
    <p>Confira nossos últimos artigos:</p>
    <ul>
      <li><a href="/blog/post1">Post 1</a></li>
      <li><a href="/blog/post2">Post 2</a></li>
    </ul>
    <a href="/">Voltar para o início</a>
  `);
});

// Exemplo de página de post do blog
app.get('/blog/:post', (req, res) => {
  const post = req.params.post;
  res.send(`
    <h1>${post}</h1>
    <p>Conteúdo do post: "${post}"</p>
    <a href="/blog">Voltar para o blog</a>
  `);
});

// Página Portfólio
app.get('/portifolio', (req, res) => {
  res.send(`
    <h1>Portfólio</h1>
    <p>Veja alguns dos nossos projetos:</p>
    <ul>
      <li>Projeto A</li>
      <li>Projeto B</li>
      <li>Projeto C</li>
    </ul>
    <a href="/">Voltar para o início</a>
  `);
});

// Página Quem Somos
app.get('/quemsomos', (req, res) => {
  res.send(`
    <h1>Quem Somos</h1>
    <p>Somos uma equipe dedicada a criar soluções incríveis!</p>
    <a href="/">Voltar para o início</a>
  `);
});

// Página para rota não encontrada (404)
app.use((req, res) => {
  res.status(404).send(`
    <h1>Página Não Encontrada</h1>
    <p>Desculpe, não conseguimos encontrar a página que você está procurando.</p>
    <a href="/">Voltar para o início</a>
  `);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000. Acesse http://localhost:3000');
});
```

- Como o `Express` não faz parte do núcleo do Node.js, você precisa instalá-lo antes de executar o código. Para isso:
	- Inicialize o projeto como Node.JS: `npm init -y`
	- Isso irá criar o arquivo `package.json` que gerencia dependências do projeto.
	- Em seguida, instalamos o Express no nosso servidor: `npm install express`
	- Isso adicionará o pacote `express` à sua lista de dependências no `package.json` e criará uma pasta `node_modules` onde o pacote será armazenado.
	- Agora, após instalado o Express e sem nenhum conflito de dependências, podemos rodar executar o arquivo por meio de: `node main.js` ou `node main`
