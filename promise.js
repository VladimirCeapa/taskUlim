// 1. Simple Promise
// Create a promise that resolves after 2 seconds with the value "Promise Resolved!" and log the result.
// ________________________________________

/*const promise=new Promise((filfull)=>{
    setTimeout(() => filfull("Promise Resolved!"), 2000);

})
promise.then(data=>console.log(data));*/

// 2. Rejected Promise
// Create a promise that rejects after 3 seconds with the message "Promise Rejected!". Handle the rejection with .catch().
// ________________________________________

/* const promise=new Promise((_,reject)=>{
    setTimeout(() => reject("Promise Rejected!"), 3000);

})
promise.catch(data=>console.log(data)); */


// 3. Promise with setTimeout
// Create a promise that resolves with "Hello, World!" after a 2-second delay using setTimeout. Log the result after the promise resolves.
// ________________________________________

/*const promise=new Promise((filfull)=>{
    setTimeout(() => filfull("Hello, World!"), 2000);

})
promise.then(data=>console.log(data));*/


// 4. Chaining Promises
// Create two promises:
// •	The first one resolves with "First".
// •	The second one resolves with "Second" after 2 seconds.
// Chain these promises and log "First Second" after both are resolved.
// ________________________________________


// const first=new Promise((filfull)=>{
//     setTimeout(() => filfull("First"), 1000);


// }).then(data=>{
//     const second=new Promise((filfull)=>{
//     setTimeout(() => filfull("Second"), 2000);

// }).then(secondData=>console.log(data +" "+ secondData))
// })


// 5. Using .then()
// Write a promise that resolves with the value "Data received!" and chain a .then() method to log the value.
// ________________________________________

/* const promise=new Promise((filfull)=>{
    setTimeout(() => filfull("Data received!"), 3000);

})
promise.then(data=>console.log(data)); */


// 6. Promise with setTimeout and Reject
// Create a promise that simulates a failed network request. Use setTimeout to reject the promise with "Request failed" after 3 seconds. Handle the rejection.
// ________________________________________

// const promise = new Promise((_, reject) => {
//     setTimeout(() => reject("Data received!"), 3000)
// })

// promise.catch(data => console.log(data));



// 7. Promise.all()
// Create three promises that resolve after 1, 2, and 3 seconds, respectively. Use Promise.all() to wait for all promises to resolve, then log their results.
// ________________________________________

// const promis_1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Data resolve!"), 1000)
// })
// const promis_2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Data resolve!"), 2000)
// })
// const promis_3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Data resolve!"), 3000)
// })

// Promise.all([promis_1, promis_2, promis_3])
//     .then(data => console.log(data));


// 8. Promise.race()
// Create three promises with different timeouts. Use Promise.race() to log the result of the promise that resolves first.
// ________________________________________

// const promis_1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Data resolve!1"), 2000)
// })
// const promis_2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Data resolve!2"), 3000)
// })
// const promis_3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Data resolve!3"), 1000)
// })

// Promise.race([promis_1, promis_2, promis_3])
//     .then(data => console.log(data));




// 9. Promise with Conditional Resolve
// Create a promise that resolves with "Success" if a random number is above 0.5, and rejects with "Failure" if it's below 0.5. Log the result.
// ________________________________________


// const promise = new Promise((resolve, reject) => {
//     Math.random() > 0.5 ? resolve("Success") : reject("Failure");
// }).then(data => console.log(data))
//     .catch(error => console.log(error))


// 10. Promise that Resolves with Data
// Create a promise that resolves with the following data after 2 seconds: { name: "John", age: 30 }. Log the data after it resolves.
// ________________________________________

// const promise = new Promise((resolve) => {
//     const data = { name: "John", age: 30 }
//     resolve(data)

// }).then(data => console.log(data));




// 11. Handling Multiple Rejections
// Create three promises: one that resolves, one that rejects, and one that resolves after a delay. Use Promise.all() to handle both successful and rejected promises.
// ________________________________________


// const promis_1 = new Promise((resolve) => {
//     resolve("Data resolve!1")
// })
// const promis_2 = new Promise((_, reject) => {
//     reject("Data rejectet 2")
// })
// const promis_3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Data resolve!3"), 3000)
// })

// Promise.all([promis_1, promis_2, promis_3])
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// 12. Chaining .then() with Values
// Create a promise that resolves with "Start", then chain another .then() to append " - Middle", and finally append " - End" in another .then().
// ________________________________________

// const promise = new Promise((resolve) => {
//     resolve('Start ')
// }).then(data => {
//     new Promise((resolve) => {
//         resolve(data + 'Middle')
//     }).then(data => {
//         new Promise((resolve) => {
//             resolve(data + ' End')
//         }).then(data => console.log(data))
//     })
// })



// 13. Delayed Promise with .then()
// Write a promise that resolves after 3 seconds and use .then() to log "Completed" after it resolves.
// ________________________________________

// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Comppleted")
//     }, 3000)
// }).then(() => console.log('Completed'))


// 14. Simulating API Call with Promises
// Create a promise that simulates an API call by resolving with "API Data" after 4 seconds. Log the data once the promise resolves.
// ________________________________________

// let dataJSON = `{
//   "data": [{
//     "type": "articles",
//     "id": "1",
//     "attributes": {
//       "title": "JSON:API paints my bikeshed!",
//       "body": "The shortest article. Ever."
//     }
//   }]
//   }`

// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(JSON.parse(dataJSON))
//     }, 4000)
// }).then(data => console.log(data));


// 15. Promise with Input Validation
// Write a promise that validates a user input. If the input is "valid", resolve with "Valid Input". If the input is anything else, reject with "Invalid Input". Handle both cases.
// ________________________________________


// const userInput = false;

// const promise = new Promise((resolve, reject) => {
//     if (userInput) {
//         resolve("Valid Input")
//     } else {
//         reject("Invalid Input")
//     }
// }).then(data => console.log(data))
//     .catch(err => console.log(err));


// 16. Promise Chaining for Calculations
// Create a promise that resolves with the number 5. Chain .then() methods to multiply the number by 2, then add 3, and finally subtract 1. Log the final result.
// ________________________________________



// const promise = new Promise((resolve) => {
//     resolve(5)
// }).then(result => result * 2)
//     .then(result => result + 3)
//     .then(result => result - 1)
//     .then(result => console.log(result))

// 17. Promise with setInterval
// Create a promise that resolves after 5 seconds, using setInterval to log "In Progress" every second until it resolves.
// ________________________________________



// const promise = new Promise((resolve) => {
//     resolve('Rezolve')
//     let timerId = setInterval(() => console.log("In Progress..."), 1000);

//     setTimeout(() => { clearInterval(timerId), promise.then(res => console.log(res)) }, 5000);
// });



// 18. Simulate API Success with .then()
// Write a promise that resolves with the string "Success". Use .then() to log the result and chain another .then() to modify the value to "Success!".
// ________________________________________



// const promise = new Promise((resolve) => {
//     resolve("Success")
// }).then(result => {
//     console.log(result)
//     return result + '!'
// })
//     .then(result => console.log(result))


// 19. Promise with Timeout
// Create a promise that simulates a long-running task by using setTimeout. The promise should resolve after 3 seconds with "Task Completed!". Log the result.
// ________________________________________


// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Task Completed!")
//     }, 4000)
// }).then(data => console.log(data));



// 20. Promise Chaining with Objects
// Create a promise that resolves with the following object: { username: "alice", role: "admin" }. Use .then() to log the role property.
// ________________________________________


// const promise = new Promise((resolve) => {
//     const data = { username: "alice", role: "admin" }
//     resolve(data)

// }).then(data => console.log(data.role));



// 21. Handling Multiple Promises with .then()
// Create three promises, each resolving after 1, 2, and 3 seconds. Use .then() to log all results once all promises resolve.
// ________________________________________

// const promis_1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Data resolve!1"), 1000)
// })
// const promis_2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Data resolve!2"), 2000)
// })
// const promis_3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Data resolve!3"), 3000)
// })

// Promise.all([promis_1, promis_2, promis_3])
//     .then(data => console.log(data.toString()));



// 22. Rejecting a Promise with .catch()
// Create a promise that rejects with the message "Something went wrong". Use .catch() to handle the rejection and log the error.
// ________________________________________

// const promise = new Promise((_, reject) => {
//     reject("Something went wrong")
// }).catch(err => console.log(err))



// 23. Promise Chain with Nested Promises
// Write a promise that resolves with "Step 1 complete". Chain another promise that resolves with "Step 2 complete", and then chain another promise that resolves with "Step 3 complete". Log the results.
// ________________________________________



// const promise = new Promise((resolve) => {
//     resolve("Step 1 complete")
// }).then(data => {
//     console.log(data)
//     new Promise((resolve) => {
//         resolve("Step 2 complete")
//     }).then(data => {
//         console.log(data)
//         new Promise((resolve) => {
//             resolve("Step 3 complete")
//         }).then(data => { console.log(data) });
//     })
// })


// 24. Simulate Network Delay
// Create a promise that resolves with "Network Success" after a 2-second delay. Log the result when it resolves.
// ________________________________________
// const promis = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("Network Success")
//     }, 2000)
// }).then(data => console.log(data));


// 25. Promise with Random Number
// Write a promise that resolves with "Even" if a randomly generated number is even, or rejects with "Odd" if the number is odd. Handle both cases.
// ________________________________________

// const promis = new Promise((resolve, reject) => {
//     let number = Math.floor(Math.random() * 10)
//     if (number % 2 === 0) {
//         resolve("Even")
//     } else {
//         reject('Odd')
//     }
// }).then(even => console.log(even))
//     .catch(odd => console.log(odd))

// 26. Delayed Fetch Simulation
// Create a promise that resolves with "Fetching data..." after 4 seconds. Log the result when the promise resolves.
// ________________________________________

// const promis = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("Fetching data...")
//     }, 4000)
// }).then(data => console.log(data));


// 27. Using Promise.all() with Mixed Results
// Create two promises: one that resolves and one that rejects. Use Promise.all() to handle both results and log the final outcome.
// ________________________________________

// const promis_1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Data resolve!1"), 3000)
// })
// const promis_2 = new Promise((_, reject) => {
//     setTimeout(() => reject("Data reject"), 1000)
// })


// Promise.all([promis_1, promis_2])
//     .then(data => console.log(data.toString()))
//     .catch(error => console.log(error))

// 28. Delayed Message with Promise
// Create a promise that resolves with the message "Message Delivered" after 5 seconds. Use .then() to log the message when it resolves.
// ________________________________________

// const promis = new Promise((resolve) => {
//     setTimeout(() => resolve("Message Delivered"), 5000)
// }).then(data => console.log(data))

// 29. Handling Promise.resolve()
// Create a promise using Promise.resolve() that immediately resolves with the string "Instant Resolution". Log the result.
// ________________________________________


// Promise.resolve("Instant Resolution").then(data => { console.log(data) })



// 30. Promise with Error Handling
// Create a promise that rejects with an error message "Error occurred!". Use .catch() to handle and log the error.


// const pronis = new Promise((_, reject) => {
//     reject("Error occurred!")
// }).catch(error => console.log(error))

