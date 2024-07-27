
//Hoaiting of fn statment and fn expression
a();  //output a called
b();  // output : typeerror:b is not a function

//Function Statement

//Function statement can be hoisted
function a() {
  console.log("a called")
}


a(); // output a called


// function Expression

//function act as a value

//function expression can not be hoisted
var b = function (){
  console.log("Hello World");
}

b();  // output Hello World



// -----------------------------------------------

//function Declarations

// function declaration is function statement they both are same thing


// ---------------------------------


//Anonymouse function

//A function without name is called anonymouse function

// anonymouse function dont have its own identity