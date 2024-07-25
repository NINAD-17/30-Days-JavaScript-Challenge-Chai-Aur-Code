import _ from "lodash"
import axios from "axios"

let arr = ["hello", "my", "name", "is", "ninad"];
let chunks = _.chunk(arr, 2);
console.log(chunks);

let concatArr1 = _.concat(arr, [4, 8], [[9]]);
console.log(concatArr1);

let concatArr2 = _.concat(5, 6, arr, [4, 8], [9]);
console.log(concatArr2);

let removeFalsy = _.compact([0, 1, false, 2, '', 3]);
console.log(removeFalsy);


// axios
axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log("unexpected error occured :(");
    });