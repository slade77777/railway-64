// function printInformation(name: string, email?: string)  {
//   //@ts-ignore
//   return new Promise(function(resolve, reject) {
//     console.log('start action')
//     setTimeout(() => {
//       if (email) {
//         resolve(`toi la ${name}, Email cua toi la ${email}`)
//       } else {
//         reject(`toi la ${name}. Toi chua co Email`)
//       }
//     }, 5000)
//   })
// }
//
// printInformation('cuong', 'cuong@gmail.com').then(response => {
//   console.log('ket qua tra ve', response)
// }).catch(error  => {
//   console.log('loi tra ve', error)
// })
//
// async function test() {
//   try {
//     const response = await printInformation('cuong', 'cuong@gmail.com');
//     console.log('ket qua tra ve', response)
//   } catch (error) {
//     console.log('loi tra ve', error)
//   }
// }
//
// test();
// kiem tra 1 so chia het cho 30
//
// function checkIfSeparate2(val: number) {
//   return new Promise((resolve, reject) => {
//     console.log('kiem tra so 2',val);
//     setTimeout(() => {
//       if (val % 2 === 0) {
//         resolve('chia het cho 2')
//       } else {
//         reject('khong chia het cho 2')
//       }
//     }, 2000)
//   })
// }
//
// function checkIfSeparate3(val: number) {
//   return new Promise((resolve, reject) => {
//     console.log('kiem tra so 3',val);
//     setTimeout(() => {
//       if (val % 3 === 0) {
//         resolve('chia het cho 3')
//       } else {
//         reject('khong chia het cho 3')
//       }
//     }, 3000)
//   })
// }
//
// function checkIfSeparate5(val: number) {
//   return new Promise((resolve, reject) => {
//     console.log('kiem tra so 5',val);
//     setTimeout(() => {
//       if (val % 5 === 0) {
//         resolve('chia het cho 5')
//       } else {
//         reject('khong chia het cho 5')
//       }
//     }, 5000)
//   })
// }
//
// function checkIfSeparate30(val: number) {
//   checkIfSeparate2(val).then((res) => {
//     checkIfSeparate3(val).then((res) => {
//       checkIfSeparate5(val).then((res) => {
//         console.log('chia het cho 30')
//       }).catch(error => console.log(error))
//     }).catch(error => console.log(error))
//   }).catch(error => console.log(error))
// }
//
// async function checkIfSeparate30Async(val: number) {
//   try {
//     await checkIfSeparate2(val);
//     await checkIfSeparate3(val);
//     await checkIfSeparate5(val);
//     console.log('chia het cho 30')
//   } catch (e) {
//     console.log(e)
//   }
// }
//
// checkIfSeparate30Async(5);
// checkIfSeparate30Async(2);
// checkIfSeparate30Async(12);
// checkIfSeparate30Async(30);
//higher order function
function higherFunction(functionA) {
    // logic dung chung
    console.log('da goi vao function: ');
    // logic rieng
    return functionA;
}
var multiple = higherFunction(function (a, b) {
    console.log(a * b);
});
var sum = higherFunction(function (a, b) {
    console.log(a + b);
});
// multiple(10, 4)
// sum(10, 4)
// reduce function
var listNumber = [4, 3, 3, 5, 1, 5];
var totalSum = listNumber.reduce(function (total, item) { return total + item; }, 0);
var multipleSum = listNumber.reduce(function (total, item) { return total * item; }, 1);
// console.log(totalSum);
// console.log(multipleSum);
//curring function
function multipleNumber(a) {
    return function (b) {
        console.log(a * b);
    };
}
var multiple2 = multipleNumber(2);
var multiple3 = multipleNumber(3);
var multiple4 = multipleNumber(4);
console.log(multiple2(5));
console.log(multiple3(5));
console.log(multiple4(5));
