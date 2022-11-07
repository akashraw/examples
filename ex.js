console.log(Array.from("hello world", (x) => (x = x + x)));

console.log(Array.of(7, 4, "5"));

let arr = [12, 24, 34, 44];
const arr1 = [55, 5, 555, 55, 5];

console.log(arr.concat(arr1));

arr.fill(9, 2, 3);
setTimeout(() => {
  console.log(arr);
}, 3000);

// filter

const array = [
  -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 53, 457, 457, 8686,
  34, 212, 5734, 346, 3467, 7879, 88, 0, 808546, 78, 7, 780,
];
function isPrime(n) {
  for (var i = 2; n > i; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

console.log(array.filter(isPrime));


// fill
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(arr, query) {
  return arr.filter((el) => {
    return el.toLowerCase().includes(query.toLowerCase());
  });
}

console.log(filterItems(fruits, "an"));




const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.push.call(arrayLike, 1, 2);
console.log(arrayLike);


let data={
    location:[
        {
            longitude:'213 ,123',
            latitude:'123,213',
            city:'hyderabad',
            country:'india'
        }
    ]
};
let obj={
    location:[
        {
            longitude:myLongitude,
            latitude:myLatitude,
            city:myCity,
        }
    ]
}=data;

const person = {
    name: ["Bob", "Smith"],
    age: 32,
  };
  
  function logProperty(propertyName) {
    console.log(person[propertyName]);
  }
  
  logProperty('age');
