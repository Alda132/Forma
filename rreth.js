
import Forma from './forma.js'

export default class Rrethi extends Forma{
  pi=3.14;


   constructor(name,radius){
    super(name);
    this.radius=radius;

    }
siperfaqja (){

return this.pi*Math.pow(this.radius,2);


}

}