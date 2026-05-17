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
}
?>

<br><br>

<a href="index.php">
    Voltar
</a>