 <?php
// Imports :
include("../config.php");
include("../model/day.php");
include("../utils.php");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    /*****************************************/
    /*            Lecture du fichier         */
    /*****************************************/
    $data = readCsv($fileName);

    /*****************************************/
    /*        Retour sous forme de JSON      */
    /*****************************************/
    echo json_encode($data);
}

?>