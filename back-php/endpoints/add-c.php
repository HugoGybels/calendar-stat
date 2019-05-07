<?php
// Imports :
include("../model/day.php");
include("../config.php");
include("../utils.php");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    /*****************************************/
    /*            Lecture du fichier         */
    /*****************************************/
    $days = readCsv($statsFileName);
    $found = false;

    foreach ($days as $day) {
        if ($day->day == date("d/m/Y")) {
            $day->nb_c++;
            $found = true;
            break;
        }
    }

    if ($found == false) {
        array_push($days, new Day(date("d/m/Y"), "1"));
    }

    writeCsv($statsFileName, $days);

    echo json_encode($days);

    /*****************************************/
    /*        Retour sous forme de JSON      */
    /*****************************************/

}
?>