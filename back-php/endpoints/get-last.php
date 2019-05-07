<?php
// Imports :
include("../config.php");
include("../utils.php");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    /*******************************************************/
    /*            Lecture/Ecriture dans le fichier         */
    /*******************************************************/
    $myfile = fopen("../data/last.csv", "w") or die("Unable to open file!");
	fwrite($myfile, new Day(date("d/m/Y"))."\n");
	fclose($myfile);
}
?>