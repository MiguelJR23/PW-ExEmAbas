<?php
echo "<h1>Resultado</h1>";

$ex = $_POST["exercicio"];
switch($ex) {

    case 1:
        $n = $_POST["numero"];
        echo "<h2>Tabuada do $n</h2>";
        for($i = 1; $i <= 10; $i++) {
            echo "$n x $i = " . ($n * $i) . "<br>";
        }

    break;

        case 2:

        $preco = $_POST["preco"];
        $desc = $_POST["desconto"];
        $valor = $preco - ($preco * $desc / 100);

        echo "Valor com desconto: R$ " . number_format($valor, 2, ",", ".");

    break;

    case 3:

        $media = (
            $_POST["n1"] +
            $_POST["n2"] +
            $_POST["n3"] +
            $_POST["n4"]
        ) / 4;

        if($media >= 5) {
            echo "Aprovado com média $media";
        }
        else {
            echo "Reprovado com média $media";
        }

    break;
    case 4:

        $a = $_POST["a"];
        $b = $_POST["b"];
        $temp = $a;
        $a = $b;
        $b = $temp;

        echo "Novo A: $a <br>";
        echo "Novo B: $b";

    break;

    case 5:

        $n1 = $_POST["n1"];
        $n2 = $_POST["n2"];
        $n3 = $_POST["n3"];
        $resultado =
            ($n1 * $n1) +
            ($n2 * $n2) +
            ($n3 * $n3);

        echo "Resultado: $resultado";

    break;

    case 6:

        $salario = $_POST["salario"];
        $gratificacao = $salario * 0.10;
        $imposto = $salario * 0.20;
        $liquido = $salario + $gratificacao - $imposto;

        echo "Salário líquido: R$ " . number_format($liquido, 2, ",", ".");

    break;

    case 7:

        $media = (
            $_POST["n1"] +
            $_POST["n2"] +
            $_POST["n3"] +
            $_POST["n4"]
        ) / 4;

        if($media >= 6) {
            $situacao = "Aprovado";
        }
        else if($media < 3) {
            $situacao = "Retido";
        }
        else {
            $situacao = "Exame";
        }

        echo "Média: " . number_format($media, 1);
        echo "<br>Situação: $situacao";

    break;

    default:
        echo "Exercício inválido";
    
break;

case 8:

    $n1 = $_POST["n1"];
    $n2 = $_POST["n2"];
    $n3 = $_POST["n3"];

    $maior = max($n1, $n2, $n3);
    $menor = min($n1, $n2, $n3);

    echo "Maior número: $maior <br>";
    echo "Menor número: $menor";

break;

case 9:

    $inicio = $_POST["inicio"];
    $fim = $_POST["fim"];

    $soma = 0;

    for($i = min($inicio, $fim); $i <= max($inicio, $fim); $i++){

        if($i % 2 != 0){
            $soma += $i;
        }
    }

    echo "Soma dos números ímpares: $soma";

break;

case 10:

    $numero = $_POST["numero"];

    if($numero % 2 == 0){
        echo "O número $numero é PAR";
    } else {
        echo "O número $numero é ÍMPAR";
    }

break;

case 11:

    $n1 = $_POST["n1"];
    $n2 = $_POST["n2"];
    $op = $_POST["operador"];

    switch($op){

        case "+":
            $resultado = $n1 + $n2;
        break;

        case "-":
            $resultado = $n1 - $n2;
        break;

        case "*":
            $resultado = $n1 * $n2;
        break;

        case "/":

            if($n2 == 0){
                echo "Não é possível dividir por zero.";
                break 2;
            }

            $resultado = $n1 / $n2;

        break;
    }

    echo "Resultado: $resultado";

break;
case 12:

    $inicio = $_POST["inicio"];
    $fim = $_POST["fim"];

    $maior = max($inicio, $fim);
    $menor = min($inicio, $fim);

    echo "Ímpares em ordem decrescente:<br><br>";

    for($i = $maior; $i >= $menor; $i--){

        if($i % 2 != 0){
            echo $i . "<br>";
        }
    }

break;

}
?>

<br><br>

<a href="../index.php">
    Voltar
</a>
