export class Jornada {
  inicioJornada?: Date;
  finJornada?: Date;

  /*Si no lo metes queda en undifined*/
  constructor(inicio?: Date, fin?: Date) {
    this.inicioJornada = inicio ?? new Date();
    this.finJornada = fin;
  }

  getInicio(){
    return this.inicioJornada
  }

  getFin(){
    return this.finJornada;
  }

  setInicio(inicio?: Date){
    this.inicioJornada = inicio;
  }

  setFin(fin?: Date){
    this.finJornada = fin;
  }

}
