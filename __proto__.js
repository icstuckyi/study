var superObj = {superVal:'super'}
var subObj = {subVal: 'sub'}

subObj.__proto__=superObj;

console.log("subObj.subVal =>", subObj.subVal);
console.log("superObj.superVal =>", superObj.superVal);


subObj.superVal = 'wwwww';
console.log("subObj.superVal =>", superObj.superVal);
console.log("subObj.superVal =>", superObj.superval='sssss');