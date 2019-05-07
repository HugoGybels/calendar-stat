<?php
// Imports :
include("../config.php");
include("../model/day.php");
include("../utils.php");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    /*****************************************/
    /*            Lecture du fichier         */
    /*****************************************/
    $days = readCsv($statsFileName);
    $today = new Day(date("d/m/Y"), 0);

    foreach ($days as $day) {
        if ($day->day == date("d/m/Y")) {
            $today->nb_c = $day->nb_c;
            break;
        }
    }

    /*****************************************/
    /*        Retour sous forme de JSON      */
    /*****************************************/
    echo json_encode($today);
}

?>