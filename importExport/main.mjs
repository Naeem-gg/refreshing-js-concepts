import adds from "./module.mjs";
import { sub, mul } from "./module.mjs";
import * as op from "./module.mjs";
const opt = Math.floor((Math.random() * 4) + 1);
switch (opt) {
    case 1:

        console.log(`your option is: ${opt}`);
        console.log("Addition is:" + adds(10, 20));

        break;

    case 2:
        console.log(`your option is: ${opt}`);
        console.log("Substraction is: " + sub(10, 20));
        break;
    case 3:
        console.log(`your option is: ${opt}`);
        console.log("Multiplication is: " + mul(10, 20))
        break;
    case 4:
        console.log(`your option is: ${opt}`);
        console.log(`Division is: ` + op.div(10, 20));

        break;
    default:
        console.log(`your option is: ${opt}`);

        break;
}
