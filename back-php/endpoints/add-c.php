<?php
// Imports :
include("../model/day.php");
include("../config.php");
include("../utils.php");

/*****************************************/
/*            Lecture du fichier         */
/*****************************************/
$days = readCsv($fileName);
$found = false;

foreach ($days as $day) {
    if ($day->day == date("d/m/Y")) {
        $day->nb_c++;
        $found = true;
        break;
    }
}

if ($found == false) {
    array_push($days, date("d/m/Y").";0\n");
}

writeCsv($fileName, $day);

echo json_encode($days);

/*****************************************/
/*        Retour sous forme de JSON      */
/*****************************************/

?>