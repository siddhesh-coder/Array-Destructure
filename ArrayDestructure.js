//1
let array = [1,2,3,4,5];

let [a,b,c,d,e] = array; //array Destructuring

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//2
let array2 = [1,2,3,4,5];

let [g,y,,j,t] = array2; //if you want to skip particular element

console.log(g);
console.log(j);

//3
let [l,i,...s] = array2; //using spread operator

console.log(s);
console.log(i);