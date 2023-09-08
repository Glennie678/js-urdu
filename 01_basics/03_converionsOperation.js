let score = undefined
//console.log(typeof score)
//console.log(typeof (score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

//"33" => 33, iss ma ak string value nbr ma chnge kar shkta ha or kr type be nuber ho jy ge.
//"33abc" => NaN, iss ma string ke type tu chage ho shkt but wo ap ko kbi be ak pure nbr ni show ho ga. 
// true => 1, iss ma ke type boolen show ho ge or ak nbr show wo 0 or 1 ke form ma ho ga agra ap true kar gy tu 1show ho ga or agra ap false show karya gy tu 0 show ho ga.

//undefined => same as comment 2

let isLoggedIn = 0
let boolenIsLoggedIn = Boolean(isLoggedIn)
// console.log(boolenIsLoggedIn)


// 1=> true, iss ma ak number ko boolen ma change kar shkta ha or ya koe be nbr ho shkta is ma koe limit ni ha ka 0 ya 1 he likhana ha but false tb he show ho ga jb ap 0 likha gy other 2nd condition ma true he show ho ga.

// "" => false, iss ma agra hm empty kar dy tu phir show kary ga otherwise mean jese name linkha tu true show kary ga jese "Ali".

let someNuber = 45
let stringInNubmer = String(someNuber)
// console.log(stringInNubmer)
// console.log(typeof stringInNubmer)

// 45 =>45, ya nazar ana ma tu ak pure number ha but is ke type ak srting ban gy ha as ma bs ya he change ha 






// *****************Operations*****************

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "Hello"
let str2 = " Ali bro"

let str3 = str1 +str2
// console.log(str3)

console.log(1 +"2");
console.log("1"+2);
console.log("1"+ 2 + 3);
console.log(1+ 2 + "3");

// agra kis be opertions a 2 value ho tu mean a str or 2nd nbr ho tu us ke ouput string he show ho gee chaha wo phel str ho ya nbr output same ho gee but agra ap ka pass 3 value ha tu mean phel str or next two nbrs to output string ma he dhow ho gee but agra in ka sequnce change kar dy jy tu output ba chang ho jy gee. 
console.log((3+4) *5%2);
// agra ap ko as kuch karn jis line nbr 61 pa tu nuber ko direct na lihka q ka a sb fun ka lay theek ha but real ma as as ko koe kam ni ha.

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

