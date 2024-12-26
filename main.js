/*1. Simple Division
Write a function that takes two numbers and divides the first by the second. Use try...catch to handle division by zero errors.
________________________________________
2. JSON Parsing
Write a function that takes a string input and parses it as JSON. Use try...catch to handle invalid JSON strings.
Example input: '{"name": "Alice"}' or 'invalid JSON'
________________________________________
3. File Read Simulation
Simulate reading a file by using a function that throws an error if the filename is not "example.txt". Use try...catch to handle the error.
________________________________________
4. Null Value Handling
Create a function that tries to access a property of an object, but the object might be null. Use try...catch to handle the error.
________________________________________
5. Promise with Try...Catch
Write an asynchronous function that fetches data from a simulated API (use setTimeout for the simulation). Use try...catch to handle any potential errors.
________________________________________
6. String Conversion
Write a function that takes a string and converts it to a number using Number(). Use try...catch to handle cases where the string cannot be converted.
Example input: "123" or "abc"
________________________________________
7. Custom Error Handling
Create a custom error class called InvalidInputError. Throw this error if a function receives an invalid input. Use try...catch to handle the custom error.
________________________________________
8. Math Operation Validator
Write a function that takes a math operation as a string (e.g., "5 + 3") and evaluates it using eval(). Use try...catch to handle invalid math expressions.
Example input: "5 + 3" or "5 / 0" or "invalid expression"
________________________________________
9. Array Access
Write a function that takes an array and an index as arguments. Try to access the element at the given index, but use try...catch to handle cases where the index is out of bounds.
________________________________________
10. Chained Function Calls
Write two functions:
1.	A function readData() that throws an error if the data is null.
2.	A function processData() that calls readData() and handles the error using try...catch.
________________________________________
Bonus Tip
For each exercise:
•	Log the error message in the catch block.
•	Use finally to log a message that will always execute.

*/


/*   1. Simple Division
Write a function that takes two numbers and divides the first by the second. Use try...catch to handle division by zero errors.
*/
// const division=(a,b)=>{

//     try{
//         if(b==0){
//             throw 'error division by zero'
//         }else{
//           return a/b
//         }

//     }catch(err)
//     {
// console.log('error-',err)
//     }
// }

// console.log(division(5,2));

/*   2. JSON Parsing
 Write a function that takes a string input and parses it as JSON. Use try...catch to handle invalid JSON strings.
Example input: '{"name": "Alice"}' or 'invalid JSON' */


// const parseJSON=(obj)=>{

//     try{
//      return JSON.parse(obj)

//     }catch(err)
//     {
// console.log('Error parsing JSON:',err)
//     }
// }

// let user=parseJSON(`{"name": "Alice"}`);


/*  3. File Read Simulation
Simulate reading a file by using a function that throws an error if the
filename is not "example.txt". Use try...catch to handle the error.*/

//  const readFile = (file)=>{
//     console.log('Reading....')
//     try{
// if(file !=='example.txt'){
//     throw "Incorrect format"
// }

// console.log('file read successfully')
//     }catch(err){
//         console.log('Error',err)
//     }
//  }

//  readFile('example.txt');

/*  4. Null Value Handling
Create a function that tries to access a property of an object,
but the object might be null. Use try...catch to handle the error.*/

// const user={
//     name:null,
//     age:25,
// }
// const propertyOfObj = (obj,property) => {
//     try {
//         if (obj[property]===null) {
//             throw 'The object property is "null"'
//         } else {
//             console.log(obj[property]);
//         }
//     } catch (err) {
//         console.log('Error', err)
//     }
// }

// propertyOfObj (user,'name')

/**________________________________________
    5. Promise with Try...Catch
Write an asynchronous function that fetches data from a simulated API (use setTimeout for the simulation). Use try...catch to handle any potential errors.
________________________________________ */

// const data = () => {
//     console.log('connect to server..')
//     try {
//         setTimeout((str) => {
//             console.log('server response..')
//             throw 'error';
//         }, 2000)

//     } catch (err) {
//         console.log('server error')
//     }
// };

// data();


/*   6. String Conversion

 Write a function that takes a string and converts it to a number using Number(). Use try...catch to handle cases where the string cannot be converted.
 Example input: "123" or "abc"*/

//  const converctorStrToNumber=(string) =>{
// try{
//     if(isNaN(string)){
//         throw 'string can beconverts it to a number'
//     }
//     const data=Number(string)
//     console.log('type of data',typeof(data))
//     }catch(err){
// console.log('Error: ',err)
//     }
//  };

//  converctorStrToNumber('123');

/*7. Custom Error Handling
Create a custom error class called InvalidInputError.
Throw this error if a function receives an invalid input.
Use try...catch to handle the custom error.*/

// class InvalidInputError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "InvalidInputError";
//     }
//   }

//   const testError =(element)=>{
//     try{

//       if(element){
//         return element;
//     } else{
//       throw new InvalidInputError(' invalid input')
//     }
//     }catch(error){
//         console.log(error);
//     }

//   }
//   testError(false);


/**  8. Math Operation Validator
Write a function that takes a math operation as a string (e.g., "5 + 3")
and evaluates it using eval(). Use try...catch to handle invalid math expressions.
Example input: "5 + 3" or "5 / 0" or "invalid expression" */


// const evalFn = (str) => {
//     try {
//         eval(str);
//     } catch (err) {
//         if (err instanceof SyntaxError) {
//             console.log(err.message);
//         } else {
//             throw err;
//         }
//     }
// }

// eval('5*8');

// ________________________________________
/*9. Array Access
 Write a function that takes an array and an index as arguments.
 Try to access the element at the given index, but use try...catch to handle cases where the index is out of bounds.
//      ________________________________________*/
// const array = [1, 2, 5, 4, 7, 8]
// const indexArray = (arr, index) => {
//     try {
//         if (arr.length <= index) {
//             throw new Error('index incorect');
//         } else {
//             console.log(arr[index])
//         }
//     } catch (Error) {
//         console.log(Error.message)
//     }
// }

// indexArray(array, 6)

/**---------------------------------------------------
 *        10. Chained Function Calls
          Write two functions:
   1.	A function readData() that throws an error if the data is null.
   2.	A function processData() that calls readData() and handles the error using try...catch.
 */

// const readData = (data) => {

//     if (data === null) {
//         throw new Error('Data is null')
//     } else {
//         return data;
//     }

// }

// const processData = (readData) => {
//     try {
//         console.log(readData)
//         // return readData();
//     } catch (err) {
//         console.log(Error.message)
//     }
// }

// processData(readData('read...complet'));
// processData(readData(null));