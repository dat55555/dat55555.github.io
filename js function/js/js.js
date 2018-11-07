// bai1
function bai1(n){
    var a = n;
    a = a*2;
    return a;
}
// bai2
function bai2(a, b, c) {
	var x;
	x = 3*a + 2*b - c;
	return bai1(x);
}
// bai3
function bai3(str){
    var a = str.slice(0,10) + '...';
   return a;
}
// bai4
function bai4(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// bai5
function bai5(n){
   var a = Math.min(n);
   return a;
}
// bai6
function bai6(){
    var ten = ["bao", "quang", "xinh", "hai","chien"];
   var a = ten.sort();
   return a;
}
// Bài 7
console.log('-----Bài 7-----')
var teacher = {
	firstName: "Kim",
	lastName: "Dung",
	age: 99,
	say: function(){}
}

var student = {
	firstName: "Dương",
	lastName: "Quá",
	age: 22,
	say: function(){}
}

var parent = {
	firstName: "Quách",
	lastName: "Tĩnh",
	age: 40,
	say: function() {}
}

var aboutMe = function() {
	console.log("Xin chào, tôi là " + this.firstName + " " + this.lastName + ". "
	 + "Năm nay tôi " + this.age + " tuổi.");
}


function bai7(teacher) {
	teacher.say = aboutMe;
	teacher.say();
}

function bai7(student) {
	student.say = aboutMe;
	student.say();
}

function bai7(parent) {
	parent.say = aboutMe;
	parent.say();
}