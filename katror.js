import Forma from '../forma.js'
export default class Katror extends Forma{
constructor(name,width,height){
super(name);
this.width=width;
this.height=height;

}

siperfaqja(){
return this.width*this.height;

}



}
