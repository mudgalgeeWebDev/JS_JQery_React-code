//console.log('sajay mudgal');

//console.log("Hellow World , How Are you all ... ");

/*fullName = "Sanjay Mudgal";
age = 36;
price = 358.57;
rdius   = 3.14;  
x = null;
y = undefined;
isFollow = true;
console.log(isFollow);b  */

// using   let/constl/var before variable;

/*let name = "Mr. X ";
let age = 36
let totalPrice = 1000;
    console.log(totalPrice);

*/

// differnce between let/const/var 


  /*
  let name = "Hellow World";     // ynha par Hellow World, name me store hai., 
let name = 25;                       // ynha par 25 ko bhi name me store kr diyahai 
  console.log(name)
*/


/*
var name = "Sanjay";
var name = 25;
    console.log(name)
*/

// how to const working....

/*
const author = "Modi";
const author = "gandhi"; // will show error: already been decalred ;
author = "rahul Gandhi";

    console.log(author)
*/

// Airthmetic Operators.......   +   -    *   / 

/*
let a = 15;
let b = 12;
let name = "Sanjay";
let lastName = "  Mudgal";
    console.log("a + b = ", a + b);
    console.log("a + b = ", a - b);
    console.log("a + b = ", a * b);
    console.log("a + b = ", a / b);

    console.log("Full Name is ", name + lastName);
*/
 
// Modulus..... Exponentiation.... increment... Decrement...

//let a = 5;
//let b = 2;
//
//    console.log("a % b = ", a % b);  // Modulus:   its give reminder. 
//    console.log("a ** b = ", a ** b); // Exponentiation:   its give you power 2*2*2    3*3*3
//    

// Unary Operatros:  post/pre Increments (++) and post/pre Decrement (--) Operators.  
//let a = 5;
//let b = 4;
//a++    // post increment
//b--    //post decrement
//console.log("Increments a++ is   ", a);
//console.log("Decrement: B-- is  ", b)
//


// pre increment and pre decrement

//let a = 5;
//let b = 10;
// --a
// --b
//
//     console.log("Pre Increment:  ", a);
//     console.log("Pre Decrement;  ", b);


// How to use..Asign Value,  +=   -=   *=   %=

//a = 25;
//b = 180;
//c = 15;
//d = 154;
//
//a += 10;
//b -= 10;
//c %= 10;
//d *= 10;
//
//console.log("a  += value is :  ", a);
//console.log("b  -= value is :  ", b);
//console.log("c  %= value is :  ", c);
//console.log("d  *= value is :  ", d);

//  String:  Sequence of Character

//let str = "this is my First upper String"    //  for Upperer case
//  console.log(str.toUpperCase(str))


// for lower case
//let str = "CHANGE INTO LOWER CASE"    
//console.log(str.toLowerCase(str))     //it will be change into lower case


// Proper Case

//let str = "change into proper case"
//console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())


// Use of Replace: 

//console.log(str)
//console.log(str.replace('Hellow', 'Hey Hi..'))
//let str = "Hellow, every one How Are You, How your day today. "
//let newStr="how are u all how is it going"
//
//console.log(newStr.replaceAll('how', 'this'))

// how to split any string/sentences. 

//let str = "hurry, we won the match"
//console.log(str.split('we'))
//let emaiId ="mudgal@gmail.com"
//console.log(emaiId.split('@'),[0])

//let str="Hurray we won the match"
//let newStr=str.split('we').join('')
//let nextStr=(newStr.split('the')).join('')
//console.log(nextStr)


// how to Split multiple string ??

//let str = "Hurry, We won the match"
//console.log(str.split('We').join(' '))
//
//let newstr = str.split('We').join(' ')
//let nextstr = (newstr.split('the').join(''))
//
//console.log(nextstr)

// indexof  and slice   working kaise karta hia

//let str = "CAPITAL"
//console.log(str.indexOf('I'))        // it will find index value of I

//let str12 = "Do the work as i told you"
//console.log(str12.slice(-7,-1))

// Find ' includes' .... in any string

//let str = "Good morning, what a lovely day";
//console.log(str.includes('i'));     // true 

//find vowels in string... by using 'length'


//let str = "Good morning, what a lovely day";
//
//let count = 0;
//let i = 0;
//while(i<=str.length-1)
//{
//  if(str[i].includes('a')||str[i].includes('e')||str[i].includes('i')
//    ||str[i].includes('o')||str[i].includes('u'))
//
//  count = count+1
//  i=i+1;
//
//
//}
//
//  console.log(`vowel are ${count}`)



//let str = "Good morning, what a lovely day";
//
//let count = 0;
//let i = 0;
//while(i<=str.length-1)
//{
//  if(str[i].includes('a')||str[i].includes('e')||str[i].includes('i')
//    ||str[i].includes('o')||str[i].includes('u'))
//
//  count = count+1
//  i=i+1;
//
//
//}
//
//  console.log(`vowel are ${count}`)


//how to reverse with While loop string.

//let str = "Hello Dave";
//let newstr = " ";
//
//let i = str.length-1;
//while(i>=0){
// newstr = newstr + str[i]
// i--
//}
//console.log(newstr)

// reverse with For loop

//let str = "Hello, Dave";
//let newstr = " ";
//
//for(let i = str.length-1; i>=0; i--)
//{
//  newstr = newstr + str[i];
//}  
//console.log(newstr)


//Find Palidrom value

let str = "baab";
var newstr = " ";

for(let i = str.length-1; i>=0; i=i-1)
{
 plndrm = plndrm + str[i]; 
}
console.log(newstr)

if(str===newstr)
{
console.log('plndrm')

}
else{
  console.log("Not plandorm ")
}
