import Forma from '../forma.js';
import Katror from '../katror.js';
import Drejtkendesh from '../drejtkendesh.js';
import Rreth from '../rreth.js';
import Kubi from '../kubi.js';

const forma=new Forma ("Forma");
console.log(forma.siperfaqja());

const katror=new Katror ("katror",2,2);
console.log(katror.siperfaqja());


const drejtkendesh=new Drejtkendesh ("Drejtkendesh", 2,3);
console.log (drejtkendesh.siperfaqja());

const rreth = new Rreth ("rreth",3);
console.log(rreth.siperfaqja());

const kubi= new Kubi ("Kubi", 2,2,2);
console.log(kubi.siperfaqja());
console.log(kubi.vellimi());