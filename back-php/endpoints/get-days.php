 <?php
// Imports :
include("../model/day.php");
include("../config.php");
include("../utils.php");

/*****************************************/
/*            Lecture du fichier         */
/*****************************************/
$data = readCsv($fileName);

/*****************************************/
/*        Retour sous forme de JSON      */
/*****************************************/
echo json_encode($data);

?>