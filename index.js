// // import chalk from 'chalk';

// const { setTimeout } = require("timers");

// console.log("hello");

// // ASYNCHRONOUS

// // CALLBACK FUNCTION 
// // ! callback adalah sebuah function yg ditempatkan di dalam sebuah parameter 
// // ! di dalam sebuah function, jadi pemanggilan callbakck akan dipanggil setelah
// // ! fungsi pertama/pengeksekusian code pertama selsesai dilanjut dengan call back
// let callBack = (sum)=>{
//     return console.log(sum)
// }

// let fungsiKu = (param1,param2, callbek)=>{
//     // FUNGSI INI AKAN MENG EKSEKUSI PENJUMLAHAN DAN NANTI AKA DILANJUTKAN
//     // DENGAN PEMANGGILAN CALLBEK dengan membawa hasil jumlah sebagai parameternya
//     let total = param1 + param2 
//     return callbek(total)

// }
// // ! NOTE PENTING SAAT PEMANGGILAN CALLBACK SEBAGAI PARAM, YG DIAMBIL HANYA NAMA TANPA MENGGUNAKAN PARENTHESIS()
// fungsiKu(2,2, callBack)


// // ASYNCHRONUS WITH SETTIMEOUT
// let copyOnId = (params)=>{
//     // document.getElementById("demo").innerHTML =  params

//     console.log(params)
// }

// setTimeout(function(){
//     copyOnId("setTimeOut")
// },3000)

// // setInterval
// let setDate = ()=>{
//     let d = new Date();
//    return console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
// }

// // setInterval(setDate,1000)


// // PROMISES
// // A Promise is a JavaScript object(PENDING,FULLFILLED, REJECT) that links producing code and consuming code
// // "Producing code" is code that can take some time
// // "Consuming code" is code that must wait for the result

// let promise = new Promise (function(myResolve,myReject){
//     // ini disebut dengan producing code
//     let i = 2;

//     i > 1 ? myResolve("sukses response") :  myReject("error promise")
//     // ketika hasil fulfilled -> myResolve
//    // ketika hasil reject -> my Reject
// })

// // .then memiliki 2 parameter alias callback yg artinya berisi hasil fullfilled dan reject
// promise.then(
//     function(sukses){
//         console.log("promises =>",sukses)
//     },
//     function(error){
//         console.log(error)
//     },

// )


// // async and await

// // "async and await make promises easier to write"
// // async makes a function return a Promise
// // await makes a function wait for a Promise

// let asynAja = async () => {
//     let a = "coba1"
//     let b = "coba2"
// // ketika await di apply dan ada function yg menggunakan promise, maka
// // function dengan async await akan menunggu function promise terlebih dahulu
//   console.log(a) 
//   console.log(b)


// }

// asynAja()
// // APABILA PENGGUNAAN DIDALAM ASYNC TERDAPAT PROMISE OBJECT MAKA AWAIT DIPERLUKAN UNTUK MENAMPILKAN DATA
// // APABILA ASYNC TIDAK MENGGUNAKAN NEW PROMISE, MAKA RETURN MENYATAKAN BAHWA HASILNYA ADALAH PROMISE
// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       resolve("I love You !!");
//     });
//     let myPromises = "ULALA"
//     console.log("ulala dulu=>", myPromises)
//     console.log( await myPromise)
//     // document.getElementById("demo2").innerHTML =  myPromises;
    
//     // document.getElementById("demo").innerHTML = await myPromise;
  
//   }
  
//   myDisplay();


// //   async function getFile() {
// //     let myPromise = new Promise(function(resolve) {
// //       let req = new XMLHttpRequest();
// //       req.open('GET', "mycar.html");
// //       req.onload = function() {
// //         if (req.status == 200) {
// //           resolve(req.response);
// //         } else {
// //           resolve("File not Found");
// //         }
// //       };
// //       req.send();
// //     });
// //     // document.getElementById("demo").innerHTML =  await myPromise;
// //     console.log("uyey")
// //   }
  
// //   getFile();


// // console.log("1")
// // console.log("2")


// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     // let result = await promise; // wait until the promise resolves (*)
  
//     return console.log(await promise); // "done!"
//   }
  
//   f();

//   async function fetchProducts() {
//     try {
//       // after this line, our function will wait for the `fetch()` call to be settled
//       // the `fetch()` call will either return a Response or throw an error
//       const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
//       // after this line, our function will wait for the `response.json()` call to be settled
//       // the `response.json()` call will either return the parsed JSON object or throw an error
//       const data = await response.json();
//       console.log(data[0].name);
//     }
//     catch (error) {
//       console.error(`Could not get products: ${error}`);
//     }
//   }
  
//   fetchProducts();



// //  PRODUKSI ES KRIM  MENGGUNAKAN PROMISE
// //  BUKA TOKO , TERIMA PESANAN(2), MULAI PRODUKSI(3), PBAYAR(2), TERIMA PESANAN (1)

// let product = {
//     es:["kon","cokelat", "vanila"]
// }
// let toko = false;

// let setProduction = (time, produksi)=>{
//     return new Promise((resolve, reject) => {
            
//             if(toko){

//                 setTimeout(() => resolve(produksi()),time)
                

//             }
//             else{
//                 reject(console.log("toko tutup"))
//             }
//     })   
// }

// setProduction(2000, ()=>{
//     console.log("terima pesanan")
// })
// // HARUS ADA RETURN KALO PAKE .THEN
// .then(()=>{
//     return setProduction(3000, ()=> console.log("MULAI PRODUKSI"))
// })
// .then(()=>{
//     return setProduction(2000, ()=> console.log("BAYAR"))
// })
// .then(()=>{
//     return setProduction(1000, ()=> console.log("terima"))
// })
// .catch(()=>{
//     console.log("pelanggan pulang")
// })
// // There's something called the finally handler which works regardless of whether 
// // our promise was resolved or rejected.
// .finally(()=>{
//     console.log("end of the day")
// })


// BERMAIN DENGAN ASYNC AWAIT MEMBUAT ES KRIM
// membuat fungsi apabila beratanya mengenai toping yg diiinginkan

let toko = true;

let waktu = (time, produksi)=>{
    return new Promise((resolve, reject) => {
            
            if(toko){

                // setTimeout(() => resolve(produksi()),time)
                setTimeout(() => resolve(console.log(produksi)),time)

            }
            else{
                reject(console.log("toko tutup"))
            }
    })   
}

function toppings_choice (){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
  
        resolve(console.log("which topping would you love?") )
  
      },3000)
    })
  } 

  async function kitchen(){
    try {
        await waktu(1000, "buka toko")
    //    console.log("buka toko")

       await waktu(3000, "PILIH MENU")
        // console.log("PILIH MENU")
       await waktu(1000,"produksi")
    //    console.log("produksi")
    
        // memanggil fungsi toping
        // The keyword await makes JavaScript wait until a promise settles and returns its result.
        // PENGGUNAAN AWAIT BERLAKU SAAT MEMANGGIL FUNCTION ATAU CALLBACK
        await toppings_choice()
     
    
        console.log("D")
        console.log("E")
    } catch (error) {
        
    }
    finally {
        console.log("end the day")
    }
  
  
  }
  
  // Trigger the function
  
  kitchen();