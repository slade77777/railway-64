let object1 = {
  a: 1,
  b: 2
}

const object2 = {
  ...object1,
  c: 3
}


function returnName(name: string, familiy: string) {
  return familiy + name;
}

const returnNumber = (numb: number) => {
  return numb * 2;
}

// const returnNumber = (a) => a * 2

const sum = (...a) => {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total = total + a[i]
  }
  return total
}

const bonus100 = (a?: number) => (a || 0) + 100;

const fullName = (familyName: string, fistName: string, lastName: string) => familyName + fistName + lastName;

const fullNameObject = ({
  familyName, fistName, lastName
}: {
  familyName: string; fistName: string; lastName: string
}) => familyName + fistName + lastName;

fullName("cuong", "dang", "nguyen")
fullNameObject({
  familyName: "cuong",
  fistName: "dang",
  lastName: "nguyen"
})

const printInformation = (name: string, email?: string) => {
  // @ts-ignore
  return new Promise(function(resolve, reject) {
    console.log('start action')
    setTimeout(() => {
      if (email) {
        resolve(`toi la ${name}, Email cua toi la ${email}`)
      } else {
        reject(`toi la ${name}. Toi chua co Email`)
      }
    }, 5000)
  })
}

printInformation('cuong', 'cuong@gmail.com').then(response => {
  console.log('ket qua tra ve', response)
}).catch(error  => {
  console.log('loi tra ve', error)
})

printInformation('cuong').then(response => {
  console.log('ket qua tra ve', response)
}).catch(error  => {
  console.log('loi tra ve', error)
})
