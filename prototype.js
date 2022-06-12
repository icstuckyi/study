function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
}

Person.prototype.sum = function(){
    return 'hyein'+ (this.first+this.second+this.third);
}

var kim = new Person('kim', 10, 20, 30);
kim.sum = function(){
    return 'seulki' + (this.first + this.second + this.third);
}
var lee = new Person('lee', 10, 10, 10);
console.log("kim's score", kim.sum());
console.log("lee's score", lee.sum());