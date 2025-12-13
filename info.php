<?php
// Déclaration des variables
$nomApplication = "Calculatrice PHP";
$version = 1;
$nombreA = 10;
$nombreB = 5;

// Calculs simples
$addition = $nombreA + $nombreB;
$soustraction = $nombreA - $nombreB;
$multiplication = $nombreA * $nombreB;
$division = $nombreA / $nombreB;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
</head>
<body>

    <header>
        <h1><?php echo $nomApplication; ?></h1>
        <p>Version : <?php echo $version; ?></p>
    </header>

    <main>
        <section>
            <h2>Valeurs utilisées</h2>
            <p>Nombre A : <?php echo $nombreA; ?></p>
            <p>Nombre B : <?php echo $nombreB; ?></p>
        </section>

        <section>
            <h2>Résultats des calculs</h2>
            <ul>
                <li>Addition : <?php echo $addition; ?></li>
                <li>Soustraction : <?php echo $soustraction; ?></li>
                <li>Multiplication : <?php echo $multiplication; ?></li>
                <li>Division : <?php echo $division; ?></li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 - PHP Débutant</p>
    </footer>

</body>
</html>
