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