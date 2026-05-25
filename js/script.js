const exercises = [

{
title: "1. Tabuada",
html: `
<h2>Tabuada</h2>

<form action="forms/processar.php" method="POST">
    <input type="hidden" name="exercicio" value="1">
    <input type="number" name="numero" placeholder="Digite um número">
    <button type="submit">Calcular</button>
</form>
`
},

{
title: "2. Desconto",
html: `
<h2>Calcular desconto</h2>

<form action="forms/processar.php" method="POST">

    <input type="hidden" name="exercicio" value="2">
    <input type="number" step="0.01" name="preco" placeholder="Preço">
    <input type="number" step="0.01" name="desconto" placeholder="Desconto(%)">
    <button type="submit">Calcular</button>

</form>
`
},

{
title: "3. Média de 4 notas",
html: `
<h2>Verificar aprovação</h2>

<form action="forms/processar.php" method="POST">
    <input type="hidden" name="exercicio" value="3">
    <input type="number" step="0.1" name="n1" placeholder="Nota 1">
    <input type="number" step="0.1" name="n2" placeholder="Nota 2">
    <input type="number" step="0.1" name="n3" placeholder="Nota 3">
    <input type="number" step="0.1" name="n4" placeholder="Nota 4">
    <button type="submit">Verificar</button>
</form>
`
},

{
title: "4. Troca A e B",
html: `
<h2>Trocar valores</h2>

<form action="forms/processar.php" method="POST">
    <input type="hidden" name="exercicio" value="4">
    <input type="number" name="a" placeholder="Valor A">
    <input type="number" name="b" placeholder="Valor B">
    <button type="submit">Trocar</button>
</form>
`
},

{
title: "5. Soma dos quadrados",
html: `
<h2>Soma dos quadrados</h2>

<form action="forms/processar.php" method="POST">
    <input type="hidden" name="exercicio" value="5">
    <input type="number" name="n1" placeholder="Número 1">
    <input type="number" name="n2" placeholder="Número 2">
    <input type="number" name="n3" placeholder="Número 3">
    <button type="submit">Calcular</button>
</form>
`
},

{
title: "6. Salário líquido",
html: `
<h2>Salário líquido</h2>

<form action="forms/processar.php" method="POST">
    <input type="hidden" name="exercicio" value="6">
    <input type="number" step="0.01" name="salario" placeholder="Salário bruto">
    <button type="submit">Calcular</button>
</form>
`
},

{
title: "7. Média aritmética",
html: `
<h2>Média e situação</h2>

<form action="forms/processar.php" method="POST">
    <input type="hidden" name="exercicio" value="7">
    <input type="number" step="0.1" name="n1" placeholder="Nota 1">
    <input type="number" step="0.1" name="n2" placeholder="Nota 2">
    <input type="number" step="0.1" name="n3" placeholder="Nota 3">
    <input type="number" step="0.1" name="n4" placeholder="Nota 4">
    <button type="submit">Calcular</button>
</form>
`
},
{
  title: "8. Maior e Menor Número",
  html: `
<h2>Maior e Menor Número</h2>

<form action="forms/processar.php" method="POST">
    <input type="hidden" name="exercicio" value="8">
    <input type="number" name="n1" placeholder="Número 1">
    <input type="number" name="n2" placeholder="Número 2">
    <input type="number" name="n3" placeholder="Número 3">
    <button type="submit">Verificar</button>
</form>
`
},

  {
    title: "9. Soma dos ímpares",
    html: `
<h2>Soma dos Ímpares do Intervalo</h2>

<form action="forms/processar.php" method="POST">
    <input type="hidden" name="exercicio" value="9">
    <input type="number" name="inicio" placeholder="Valor inicial">
    <input type="number" name="fim" placeholder="Valor final">
    <button type="submit">Calcular</button>
</form>
`
  },

  {
    title: "10. Par ou ímpar",
    html: `
<h2>Par ou Ímpar</h2>

<form action="forms/processar.php" method="POST">
    <input type="hidden" name="exercicio" value="10">
    <input type="number" name="numero" placeholder="Digite um número">
    <button type="submit">Verificar</button>
</form>
`
  },

  {
    title: "11. Calculadora",
    html: `
<h2>Calculadora</h2>

<form action="forms/processar.php" method="POST">
    <input type="hidden" name="exercicio" value="11">
    <input type="number" step="any" name="n1" placeholder="Primeiro valor">
    <select name="operador">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="number" step="any" name="n2" placeholder="Segundo valor">
    <button type="submit">Calcular</button>
</form>
`
  },

  {
    title: "12. Ímpares decrescentes",
    html: `
<h2>Ímpares em Ordem Decrescente</h2>

<form action="forms/processar.php" method="POST">
    <input type="hidden" name="exercicio" value="12">
    <input type="number" name="inicio" placeholder="Primeiro número">
    <input type="number" name="fim" placeholder="Segundo número">
    <button type="submit">Exibir</button>
</form>
`
  }
];

const tabBar = document.getElementById("tabBar");
const contentArea = document.getElementById("contentArea");

exercises.forEach((ex, index) => {

    const tab = document.createElement("div");

    tab.className = "tab";
    tab.innerText = ex.title;
    tab.onclick = () => openTab(index);
    tabBar.appendChild(tab);

});

function openTab(i) {

    document.querySelectorAll(".tab").forEach(t => {
        t.classList.remove("active");
    });

    document.querySelectorAll(".tab")[i].classList.add("active");
    contentArea.innerHTML = exercises[i].html;
}

openTab(0);

const secretButton = document.getElementById("secretButton");
const dvdLogo = document.getElementById("dvdLogo");

let posX = 100;
let posY = 100;
let velX = 3;
let velY = 3;
let animando = false;

secretButton.addEventListener("click", () => {
    animando = !animando;

    if(animando) {
        dvdLogo.style.display = "block";
        moverDVD();
    } else {
        dvdLogo.style.display = "none";
    }
});

function moverDVD() {

    if(!animando) return;

    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
    const larguraLogo = dvdLogo.offsetWidth;
    const alturaLogo = dvdLogo.offsetHeight;

    posX += velX;
    posY += velY;

    if(posX + larguraLogo >= larguraTela || posX <= 0) {
        velX *= -1;
    }

    if(posY + alturaLogo >= alturaTela || posY <= 0) {
        velY *= -1;
    }

    dvdLogo.style.left = posX + "px";
    dvdLogo.style.top = posY + "px";
    requestAnimationFrame(moverDVD);
}
