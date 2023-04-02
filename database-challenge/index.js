
//misc. for adding security if needed
import { decryptData, encryptData} from "./utils/security.js";
//raw data
import data from './data/data.json' assert { type: 'json' };
//data object of cleaned json
import { Cleaner } from './models/Cleaner.js'
//premade sql commands 
import { addUserSQL, addOrderSQL, addBookToOrderSQL, addBookSQL, addCoachingServiceSQL, addCoachServiceToOrderSQL } from "./models/SQLInjection.js";

const processData = new Cleaner();
data.forEach((d)=>{
    processData.addOrder(d);
    processData.addBookId(d);
    processData.addUser(d);
    processData.addCoachingServiceId(d);
})

//uncomment to view prcessedDara object
// console.log(processData.getMapData());

console.log('_________________________________');
const errors = [];

try {
  console.log(addUserSQL(processData));
  console.log('_________________________________');
} catch (error) {
  errors.push(error);
}

try {
  console.log(addOrderSQL(processData));
  console.log('_________________________________');
} catch (error) {
  errors.push(error);
}

try {
  console.log(addBookSQL(processData));
  console.log('_________________________________');
} catch (error) {
  errors.push(error);
}

try {
  console.log(addCoachingServiceSQL(processData));
  console.log('_________________________________');
} catch (error) {
  errors.push(error);
}

try {
  console.log(addCoachServiceToOrderSQL(processData));
  console.log('_________________________________');
} catch (error) {
  errors.push(error);
}

try {
  console.log(addBookToOrderSQL(processData));
} catch (error) {
  errors.push(error);
}

if (errors.length > 0) {
  console.log('The following errors occurred:');
  errors.forEach((error) => console.error(error));
}
