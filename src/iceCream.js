// Understand Asynchronous function
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// let order = (fruit_name, call_production) => {

//     setTimeout(function(){
//         console.log(`${stocks.Fruits[fruit_name]} was selected`);
//     // console.log("Order placed. Please call production");
//         call_production();
//     }, 2000)
// };

// // 2nd function illustrate callback hell
// // which promises is design to resolve this issue
// let production = () => {
//     setTimeout(()=>{
//         console.log("production has started")
//         setTimeout(()=>{
//           console.log("The fruit has been chopped")
//           setTimeout(()=>{
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//             setTimeout(()=>{
//               console.log("start the machine")
//               setTimeout(()=>{
//                 console.log(`Ice cream placed on ${stocks.holder[1]}`)
//                 setTimeout(()=>{
//                   console.log(`${stocks.toppings[0]} as toppings`)
//                   setTimeout(()=>{
//                     console.log("serve Ice cream")
//                   },2000)
//                 },3000)
//               },2000)
//             },1000)
//           },1000)
//         },2000)
//       },0)
// };
//
// // Trigger
// order(0, production)

// // // // // // // // //
// // Now use Promises
// // // // // // // // //
// let is_shop_open = true;
// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed!!"));
//     }
//   });
// };

// // set time here
// // use .then, .catch, & .finally handler
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   .then(() => {
//     return order(0, () => console.log("Production has Started"));
//   })
//   .then(() => {
//     return order(2000, () => console.log("Fruit has been chopped"));
//   })
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//     );
//   })
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })
//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[1]}`)
//     );
//   })
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
//   })
//   .then(() => {
//     return order(2000, () => console.log("Serve Ice Cream"));
//   })
//   .catch(() => {
//     console.log("Customer left...");
//   })
//   .finally(() => {
//     console.log("End of Day!!");
//   });


// // // // // // // // // // // // // // // // // //
// NOW a better way to write promise - Async/Await
// // // // // // // // // // // // // // // // // //
// function toppings_choice() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve( console.log("which topping would you love?"))
//         }, 3000)
//     })
// }

// async function kitchen(){
//     console.log("A");
//     console.log("B");
//     console.log("C");

//     await toppings_choice();

//     console.log("D");
//     console.log("E");
// }

// kitchen()

// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking orders")

// // Another Example
let is_shop_open = false;

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}

async function kitchen(){
    try{
 
 // time taken to perform this 1 task
      await time(2000)
      console.log(`${stocks.Fruits[0]} was selected`)
    }
 
    catch(error){
      console.log("Customer left", error)
    }
 
    finally{
       console.log("Day ended, shop closed")
     }
 }
 
 // Trigger
 kitchen();