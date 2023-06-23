var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var object1 = {
    a: 1,
    b: 2
};
var object2 = __assign(__assign({}, object1), { c: 3 });
function returnName(name, familiy) {
    return familiy + name;
}
var returnNumber = function (numb) {
    return numb * 2;
};
// const returnNumber = (a) => a * 2
var sum = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < a.length; i++) {
        total = total + a[i];
    }
    return total;
};
var bonus100 = function (a) { return (a || 0) + 100; };
var fullName = function (familyName, fistName, lastName) { return familyName + fistName + lastName; };
var fullNameObject = function (_a) {
    var familyName = _a.familyName, fistName = _a.fistName, lastName = _a.lastName;
    return familyName + fistName + lastName;
};
fullName("cuong", "dang", "nguyen");
fullNameObject({
    familyName: "cuong",
    fistName: "dang",
    lastName: "nguyen"
});
var printInformation = function (name, email) {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        console.log('start action');
        setTimeout(function () {
            if (email) {
                resolve("toi la ".concat(name, ", Email cua toi la ").concat(email));
            }
            else {
                reject("toi la ".concat(name, ". Toi chua co Email"));
            }
        }, 5000);
    });
};
printInformation('cuong', 'cuong@gmail.com').then(function (response) {
    console.log('ket qua tra ve', response);
}).catch(function (error) {
    console.log('loi tra ve', error);
});
printInformation('cuong').then(function (response) {
    console.log('ket qua tra ve', response);
}).catch(function (error) {
    console.log('loi tra ve', error);
});
