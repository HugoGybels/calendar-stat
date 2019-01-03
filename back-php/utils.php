<?php

/**
 * * Fonction permettant de lire le fichier csv et de le retourner sous forme de tableau :
 *
 * @param $fileName
 * @return array
 */
function readCsv($fileName) {

	// Lecture du fichier src :
	$myfile = fopen($fileName, "r") or die("Unable to open file!");
	$dataStr = fread($myfile,filesize($fileName));
	fclose($myfile);

	$lines = explode("\n", $dataStr);
	$days = array();

	foreach ($lines as $line) {
		$temp = explode(";", $line);
		if (count($temp) == 2) {
			array_push($days, new Day($temp[0], $temp[1]));
		}
	}
	return $days;
}

/**
 * Fonction permettant d'écrire le contenu d'un tableau dans le fichier csv
 *
 * @param $fileName
 * @param $days
 * @return bool ok
 */
function writeCsv($fileName, $days) {

	// Ouverture du fichier src :
	$myfile = fopen($fileName, "w") or die("Unable to open file!");

	foreach ($days as $day) {
		fwrite($myfile, $day->day.";".$day->nb_c."\n");
	}
	fclose($myfile);
	return true;
}

?>