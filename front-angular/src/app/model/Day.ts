
export class Day {
  public day: Date;
 	public nb_c: number;

 	constructor(day: string, nb_c: number) {
 	  this.day = new Date(day);
 	  this.nb_c = nb_c;
  };
}
