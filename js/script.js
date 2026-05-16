const exercises = [

{
title: "1. Tabuada",
html: `
<h2>Tabuada</h2>

<form action="processar.php" method="POST">
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

<form action="processar.php" method="POST">

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

<form action="processar.php" method="POST">

    <input type="hidden" name="exercicio" value="3">

    <input type="number" step="0.1" name="n1" placeholder="Nota 1">
    <input type="number" step="0.1" name="n2" placeholder="Nota 2">
    <input type="number" step="0.1" name="n3" placeholder="Nota 3">
    <input type="number" step="0.1" name="n4" placeholder="Nota 4">

    <button type="submit">Verificar</button>

</form>
`
},