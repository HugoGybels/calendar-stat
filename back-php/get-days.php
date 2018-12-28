 <?php
// Imports :
include("day.php");
 
// Affichage des erreurs :
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Configuration CORS :
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");

$fileName = "calendarStats.csv";


/*****************************************/
/*            Lecture du fichier         */
/*****************************************/
$data = readCsv($fileName);

echo json_encode($data);
/*
foreach($data as $value) {
	echo ($value->day);
	echo (" - ");
	echo ($value->nb_c);
	echo ("<br/>");
}
*/

/* ---------------------- */

// Fonction permettant de transformer le csv en tableau :
function readCsv($fileName) {

	// Lecture du fichier src :
	$myfile = fopen($fileName, "r") or die("Unable to open file!");
	$dataStr = fread($myfile,filesize("calendarStats.csv"));
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

?> 