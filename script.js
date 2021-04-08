let sayHi = function foo()
    {
        alert("Hi !");
    };

//this will print what inside the function
alert(sayHi)

//this will print Hi !
sayHi()

/*
function expresseion means assign function to a variable
function declaration means declare the function

so if a function is decalred it can be called before declaration

but if a function is expressed it can not be used before expression

if a js script is called under strict script then a function can not be called outside the
the block it is created

to do this just write "use strict" at the top of the script

*/

//arrow function

let sum = (a,b) =>
{
    ans = a+b;
    return ans;
}