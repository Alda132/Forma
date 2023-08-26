
import Katror from '../Katror.js'

export default  class Kubi extends Katror{

constructor (name,width,height,depth){
super(name,width,height);
this.depth=depth;
}

siperfaqja(){

return 6*Math.pow(this.width,2);

}

vellimi(){

return Math.pow(this.width,3);

}

}