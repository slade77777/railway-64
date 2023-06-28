

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

function checkIfSeparate2(val: number) {
  return new Promise((resolve, reject) => {
    console.log('kiem tra so 2',val);
    setTimeout(() => {
      if (val % 2 === 0) {
        resolve('chia het cho 2')
      } else {
        reject('khong chia het cho 2')
      }
    }, 2000)
  })
}

function checkIfSeparate3(val: number) {
  return new Promise((resolve, reject) => {
    console.log('kiem tra so 3',val);
    setTimeout(() => {
      if (val % 3 === 0) {
        resolve('chia het cho 3')
      } else {
        reject('khong chia het cho 3')
      }
    }, 3000)
  })
}

function checkIfSeparate5(val: number) {
  return new Promise((resolve, reject) => {
    console.log('kiem tra so 5',val);
    setTimeout(() => {
      if (val % 5 === 0) {
        resolve('chia het cho 5')
      } else {
        reject('khong chia het cho 5')
      }
    }, 5000)
  })
}

function checkIfSeparate30(val: number) {
  checkIfSeparate2(val).then((res) => {
    checkIfSeparate3(val).then((res) => {
      checkIfSeparate5(val).then((res) => {
        console.log('chia het cho 30')
      }).catch(error => console.log(error))
    }).catch(error => console.log(error))
  }).catch(error => console.log(error))
}

async function checkIfSeparate30Async(val: number) {
  try {
    await checkIfSeparate2(val);
    await checkIfSeparate3(val);
    await checkIfSeparate5(val);
    console.log('chia het cho 30')
  } catch (e) {
    console.log(e)
  }
}

checkIfSeparate30Async(5);
checkIfSeparate30Async(2);
checkIfSeparate30Async(12);
checkIfSeparate30Async(30);
