// console.log("Api");


// Api

// Application programming interface


// const data = "data manga lo"
// console.log("data");
// setTimeout(data);


//promises ===> jab data ajaye to console krwadena


// fetch().then().catch()

// const bankbalance = 2000000;

// const shaddi = new Promise((resolve, reject) => {
//     if (bankbalance > 500000) {
//         console.log("Shaddi mubaarak ho");
//         resolve()
//     }else{
//         console.log("Nalla bheto");
//         reject()
//     }
// })

// shaddi
// .then(()=>{
//     console.log('Successfull');
// })
// .catch(()=>{
//     console.log('Rejected');
// }

// const marks = 90;

// const result = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (marks > 80) {
//             // console.log("You are passed");
//             resolve("You are passed")
//         }else{
//             // console.log("You are faled");
//             reject("You are faled")
//         }
//     }, 1000);
// })

// result
// .then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);

// })



// function shaddi(bankbalance) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bankbalance > 100000) {
//                 console.log("Shaddi mubarak ho.......");
//                 resolve('Shaddi mubarak ho')
//             }else{
//                 console.log("Nally bheto......");
//                 reject('Nally bheto')
//             }
//         }, 1000);
//     })
// }

// shaddi(200000)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })



//fetch
//axios


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     return res.json()
// }).then((res)=>{
//      console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

const div = document.querySelector("div")

axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML += `
        <h1>
        <h1>Title: ${item.title}</h1>
        <h1>Price: ${item.price}</h1>
         <img width = "300" src = "${item.image}" alt = "product.img" />
        </h1>
        <hr/>
        `
    })
})
.catch((err)=>{
    console.log(err);
})





























































