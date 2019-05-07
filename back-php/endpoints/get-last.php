<?php
// Imports :
include("../config.php");
include("../utils.php");


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    /*****************************************/
    /*            Lecture du fichier         */
    /*****************************************/
    $myfile = fopen($lastFileName, "r") or die("Unable to open file!");
    if (filesize($lastFileName)) {
        $dataStr = fread($myfile,filesize($lastFileName));
    }
	fclose($myfile);

    /*****************************************/
    /*        Retour sous forme de JSON      */
    /*****************************************/
    echo json_encode($dataStr);
}

?>