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
    
}
?>

<br><br>

<a href="../index.php">
    Voltar
</a>
