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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// kiem tra 1 so chia het cho 30
function checkIfSeparate2(val) {
    return new Promise(function (resolve, reject) {
        console.log('kiem tra so 2', val);
        setTimeout(function () {
            if (val % 2 === 0) {
                resolve('chia het cho 2');
            }
            else {
                reject('khong chia het cho 2');
            }
        }, 2000);
    });
}
function checkIfSeparate3(val) {
    return new Promise(function (resolve, reject) {
        console.log('kiem tra so 3', val);
        setTimeout(function () {
            if (val % 3 === 0) {
                resolve('chia het cho 3');
            }
            else {
                reject('khong chia het cho 3');
            }
        }, 3000);
    });
}
function checkIfSeparate5(val) {
    return new Promise(function (resolve, reject) {
        console.log('kiem tra so 5', val);
        setTimeout(function () {
            if (val % 5 === 0) {
                resolve('chia het cho 5');
            }
            else {
                reject('khong chia het cho 5');
            }
        }, 5000);
    });
}
function checkIfSeparate30(val) {
    checkIfSeparate2(val).then(function (res) {
        checkIfSeparate3(val).then(function (res) {
            checkIfSeparate5(val).then(function (res) {
                console.log('chia het cho 30');
            }).catch(function (error) { return console.log(error); });
        }).catch(function (error) { return console.log(error); });
    }).catch(function (error) { return console.log(error); });
}
function checkIfSeparate30Async(val) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, checkIfSeparate2(val)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, checkIfSeparate3(val)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, checkIfSeparate5(val)];
                case 3:
                    _a.sent();
                    console.log('chia het cho 30');
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
checkIfSeparate30Async(5);
checkIfSeparate30Async(2);
checkIfSeparate30Async(12);
checkIfSeparate30Async(30);
