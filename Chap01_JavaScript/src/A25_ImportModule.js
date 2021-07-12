import { onMulti, name } from './A25_DefaultModule'
import onAdd, {longNameFunction as long, num} from './A25_ExportModule'
console.log(num);
console.log(onAdd(10, 20));
console.log(long(10, 20));

console.log(onMulti(10, 20));
console.log(name);



