<?php
session_start();
            if (isset($_SESSION['user'])) {
                
            } else {
                header("Location: ../index.php");
                exit();
            }

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Inicio|PHP Proyecto UTD
    </title>
    <link rel="stylesheet" href="../css/estilos.css" type="text/css">
</head>
<body>
    <header>
        <div id="logotipo">
            <img src="../img/logophp.png" alt="Imagen Django" title="Django">
            <h1>PHP Proyecto Web</h1>
        </div>
    </header>
    <nav>
        <ul>
                <li><a href="../index.php" >Inicio</a></li>
                <li><a href="mision.php">Mision</a></li>
                <li><a href="vision.php">Vision</a></li>
                <li><a href="acercade.php">Acerca de</a></li>
                <li><a href="registrar_articulo.php">Registrar articulos</a></li>
                <li><a href="mostrar_articulos.php">Articulos</a></li>
                <li><a href="mostrar_categorias.php">Categorias</a></li>
                <li><a href="cerrar_sesion.php">Cerrar sesión</a></li>
        </ul>
    </nav>
    <section id="content">
       <div class="box">
            <h1>Mostrar articulos</h1>
            <?php
            include_once('conexion.php');

            // Consulta SQL
            $sql = "SELECT 
                        articulos.id, 
                        articulos.descripcion AS articulo, 
                        articulos.pu, 
                        articulos.cantidad, 
                        categorias.descripcion AS categoria 
                    FROM articulos 
                    INNER JOIN categorias 
                    ON articulos.id_categoria = categorias.id";

            $ejecucion_sql = $conexion->query($sql);

            // Verificar si hay resultados
            if ($ejecucion_sql->num_rows > 0) {
                echo '<hr>';
                while ($fila = $ejecucion_sql->fetch_assoc()) {
                    echo '
                            <img src="../img/logophp.png" alt="Imagen Django" title="Django">
                            <h2>Id:</h2>
                            <p>' . htmlspecialchars($fila['id']) . '</p>
                            <h2>Articulo:</h2>
                            <p>' . htmlspecialchars($fila['articulo']) . '</p>
                            <h2>PU:</h2>
                            <p>' . htmlspecialchars($fila['pu']) . '</p>
                            <h2>Cantidad:</h2>
                            <p>' . htmlspecialchars($fila['cantidad']) . '</p>
                            <h2>Categoria:</h2>
                            <p>' . htmlspecialchars($fila['categoria']) . '</p>
                            
                        ';
                }
            } else {
                echo 'No hay datos disponibles.';
            }
            ?>
            <hr>
       </div>
    </section>
    <footer>
        <p>Curso de PHP con Mario Lira &copy; 2024 | Visitado el: 01/10/24</p>
    </footer>
</body>
</html>