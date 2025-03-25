// function showDialog() {
//     alert("hi xin chao cac ban")
// }

// showDialog();



// function writeLog(log) {
//     console.log(log)
// }

// writeLog('hello')


// var isConfirm = confirm("ok");
// console.log(isConfirm);


// var fisrtName="minh"
// var lastName="pham"
// console.log(`toi la ${fisrtName} ${lastName}`);

// var fullName="Minh";
// console.log(fullName.charAt(0));


// var myInfo={
//     name: "minh",
//     age: 18,
//     diachi: "hanoi",
//     getName: function(){
//         return this.name;
//     }
// }
// var myKey="name"
// myInfo.email="tuanminh100217@gmail.com"
// delete myInfo.age
// console.log(myInfo.getName())


// function User(fisrtName,lastName,avatar){
//     this.fisrtName=fisrtName;
//     this.lastName=lastName;
//     this.avatar=avatar;
// }
// User.prototype.className="F8"
// var author= new User("Minh","Pham","avatar")
// console.log(author)


// var date=new Date();
// console.log(date);
// var year=date.getFullYear();
// var month=date.getMonth() + 1;
// var day=date.getDate();
// var hour=date.getHours();
// var minute=date.getMinutes();
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minute);

    
// console.log(Math.PI)
// console.log(Math.round(1.3))
// console.log(Math.abs(-2))
// console.log(Math.ceil(4.001))
// console.log(Math.floor(5.9))
// console.log(Math.random())
// console.log(Math.min(-100,100,0))
// console.log(Math.max(-100,100,0))


// function run(object) {
//     var Array=[];
//     var i=0;
//     for(var key in object){
//         Array[i]=`Thuộc tính ${key} có giá trị ${object[key]}`
//         i++;
//     }
//     return Array;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));


// function myFunction(param){
//     if(typeof param==="function"){
//         param("hoc lap trinh");
//     }
// }

// function myCallBack(value){
//     console.log("value: ",value)
// }

// myFunction(myCallBack);


// var courses=["1a","2a","3a"]

// courses.forEach(function(courses,index,array){
//     console.log(courses,index,array)
// },)

var headingNode=document.querySelectorAll('.box li')
console.log(headingNode)