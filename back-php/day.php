<?php

/**************************************************************/
/*       Class représentant une jorunée et ses valeurs        */
/**************************************************************/

class Day {

	public $day;
	public $nb_c; 

	function __construct($day, $nb_c) {		
			$this->day = $day;		
			$this->nb_c = $nb_c;		
	}		
	
	public function __toString() {
		if (isset($this->day) && isset($this->nb_c)) {
			return strval($this->day) + " : " + strval($this->nb_c);
		} else {
			return "wrong format";
		}
	 }
}

?>