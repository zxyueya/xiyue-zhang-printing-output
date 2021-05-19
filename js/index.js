//TASK 1
/*
Declare three variables, a and b and c.
If a has value 3, b has value 5, and c doesn't have a value, alert
*/

let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\nlet b = 5;\nlet c;\n--------'

// a + b
output = output + '\na + b = ' + (a + b);//prints 8
alert(output);

// a - b
output = output + '\na - b = ' + (a - b);//prints -2
alert(output);

// a * b 
output = output + '\na * b = ' + (a * b);//prints 15
alert(output);

// a / b
output = output + '\na / b = ' + (a / b);//prints 0.6
alert(output);

// a % b 
output = output + '\na % b = ' + (a % b);//prints 3
alert(output);

// a += b
output = output + '\na += b = ' + (a += b); //prints 8
alert(output);

// a -= b 
output = output + '\na -= b = ' + (a -= b); 
alert(output);

// a *= b = 15
output = output + '\na *= b = ' + (a *= b);
alert(output);

// a /= b 
output = output + '\na /= b = ' + (a /= b);
alert(output);

// a %= b 
output = output + '\na %= b = ' + (a %= b);
alert(output);

// a == b 
output = output + '\na == b: ' + (a == b);
alert(output); 

// a != b 
output = output + '\na != b: ' + (a != b);
alert(output); 

// a > b 
output = output + '\na > b: ' + (a > b);
alert(output); 

// a < b 
output = output + '\na < b: ' + (a < b);
alert(output); 

// !a && !c 
output = output + '\n!a && !c: ' + (!a && !c);
alert(output); 

// !a || !c
output = output + '\n!a || !c: ' + (!a || !c);
alert(output); 


//TASK 2
let first_name = 'Xiyue ';
let last_name = 'Zhang';
let email = 'zhan0722@algonquinlive.com';
let output_task2 = 'My name is ' + first_name + last_name + '. ' + 'You can contact me at ' + email + '.';
console.log(output_task2);
