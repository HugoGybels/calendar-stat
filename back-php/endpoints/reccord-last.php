<?php
// Imports :
include("../config.php");
include("../utils.php");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    /*******************************************************/
    /*            Lecture/Ecriture dans le fichier         */
    /*******************************************************/
    $myfile = fopen($lastFileName, "w") or die("Unable to open file!");
	fwrite($myfile, date("d/m/Y")."\n");
	fclose($myfile);
} else {
    die("Method not allowed");
}
?>