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
  if (email) {
    return `toi la ${name}, Email cua toi la ${email}`
  } else {
    return `toi la ${name}. Toi chua co Email`
  }
}

console.log(printInformation('cuong', 'cuong@gmail.com'))
console.log(printInformation('cuong'))
