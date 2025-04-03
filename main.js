// function showDialog() {
//     alert('hi xin chao cac ban')
// }

// showDialog();



// function writeLog(log) {
//     console.log(log)
// }

// writeLog('hello')


// var isConfirm = confirm('ok');
// console.log(isConfirm);


// var fisrtName='minh'
// var lastName='pham'
// console.log(`toi la ${fisrtName} ${lastName}`);

// var fullName='Minh';
// console.log(fullName.charAt(0));


// var myInfo={
//     name: 'minh',
//     age: 18,
//     diachi: 'hanoi',
//     getName: function(){
//         return this.name;
//     }
// }
// var myKey='name'
// myInfo.email='tuanminh100217@gmail.com'
// delete myInfo.age
// console.log(myInfo.getName())


// function User(fisrtName,lastName,avatar){
//     this.fisrtName=fisrtName;
//     this.lastName=lastName;
//     this.avatar=avatar;
// }
// User.prototype.className='F8'
// var author= new User('Minh','Pham','avatar')
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
//     if(typeof param==='function'){
//         param('hoc lap trinh');
//     }
// }

// function myCallBack(value){
//     console.log('value: ',value)
// }

// myFunction(myCallBack);


// var courses=['1a','2a','3a']

// courses.forEach(function(courses,index,array){
//     console.log(courses,index,array)
// },)

// var headingNode=document.querySelectorAll('.box li')
// console.log(headingNode)


// lay va gan atribute cho element***************************************************
// var headingElement=document.querySelector('h1')
// headingElement.className='heading'  
// headingElement.title='heading'
// headingElement.id='heading'
// headingElement.setAttribute('href','heading2')
// headingElement.classList.add('heading3')
// console.log(headingElement.getAttribute('class'))
// console.log(headingElement.id)
// console.log(headingElement);


// lay va gan text cho element*******************************************************
// var headingElement=document.querySelector('h1')
// // headingElement.textContent='minh dep trai'
// console.log(headingElement.innerText)
// console.log(headingElement.textContent)
// // inner text the hien ra nhung gi minh thuc su thay tren trinh duyet
// // textContent the hien nhung gi thuc hien trong text note


// them mot element vao mot element khac*********************************************
// var boxElement=document.querySelector('.box')
// // inner them mot element vao trong box
// boxElement.innerHTML= '<h1 title="minh">Heading</h1>'
// // inner thay the element vao box
// boxElement.outerHTML= '<h1 title="minh">Heading</h1>'
// // goi ra thanh phan trong box
// console.log(boxElement.innerHTML)
// // goi ra ca box
// console.log(boxElement.outerHTML)


// css DOM**************************************************************************
// var boxElement=document.querySelector('.box')
// // boxElement.style.width='120px'
// // boxElement.style.height='120px'
// // boxElement.style.backgroundColor='red'
// Object.assign(boxElement.style,{
//     width:'120px',
//     height:'120px',
//     backgroundColor:'red',
//     opacity:0.5
// })
// console.log(boxElement.style.opacity)


//classList*************************************************************************
// var boxElement=document.querySelector('.box')
// console.log(boxElement.classList.length)
// console.log(boxElement.classList[1])
// console.log(boxElement.classList.value)
// boxElement.classList.add('box3','box4')
// console.log(boxElement.classList.contains('box2'))
// boxElement.classList.remove('box')
// boxElement.classList.toggle('box')
// console.log(boxElement.classList)


// DOM-event************************************************************************
// var h1Elements=document.querySelectorAll('h1')
// for(var i=0;i<h1Elements.length;i++){
//     h1Elements[i].onclick=function(e){
//         console.log(e.target) 
//     }
// }


// DOM-event2***********************************************************************
// var inputElement=document.querySelector('input[type="text"]')
// inputElement.onchange=function(e){
//     console.log(e.target.value)
// }
// inputElement.oninput=function(e){
//     console.log(e.target.value)
// }
// var inputElement=document.querySelector('input[type="checkbox"]')
// inputElement.onchange=function(e){
//     console.log(e.target.checked)
// }
// var inputElement=document.querySelector('select')
// inputElement.onchange=function(e){
//     console.log(e.target.value)
// }


// JSON******************************************************************************
// var json1='["so1","so2"]';
// var json='{"name":"minh","age":18}'
// console.log(JSON.parse(json1))
// console.log(JSON.stringify(1))


// promise***************************************************************************
// bat dong bo: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
// setTimeout(function(){
//     console.log(1);
// },1000)
// console.log(2)


// var promise = new Promise(
//     // executor
//     function(resolve,reject){
//         // thanh cong: resolve(), that bai: reject()
//         // phai goi 1 trong 2 
//         resolve({
//         })
//     }
// );

// promise
//     // .then(function(){
//     //     // goi khi resolve()
//     //     console.log("thanh cong")
//     // })
//     // .catch(function(){
//     //     // goi khi reject()
//     //     console.log("that bai")
//     // })
//     // .finally(function(){
//     //     // goi khi resolve() hoac reject()
//     //     console.log("xong")
//     // })

//     // .then(function(){
//     //     return 1;
//     // })
//     // .then(function(data){
//     //     console.log(data)
//     //     return 2;
//     // })
//     // .then(function(data){
//     //     console.log(data)
//     //     return 3;
//     // })

//     // .then(function(){
//     //     console.log(1)
//     // })
//     // .then(function(){
//     //     return new Promise((resolve, reject) => {
//     //         reject("co loi")
//     //     });
//     // })
//     // .then(function(){
//     //     console.log(3)
//     // })
//     // .catch(function(error){
//     //     console.log(error);
//     // })


// Fetch*******************************************************************************
// var portApi='https://jsonplaceholder.typicode.com/posts'
// fetch(portApi)
//     .then(function(response){   
//         return response.json()
//     })
//     .then(function(posts){
//         var htmls = posts.map(function(post){
//             return `<li>
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//             </li>`
//         })
//         var html=htmls.join('')
//         document.getElementById('post-block').innerHTML=html
//     })


// JSON Server*************************************************************************
// var coursesApi='http://localhost:3000/courses'

// fetch(coursesApi)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(courses){
//         console.log(courses)
//     })


// class********************************************************************************
// class Course{
//     constructor(id,name,price){
//         this.id=id
//         this.name=name
//         this.price=price
//     }
//     getName(){
//         return this.name;
//     }

//     getPrice(){
//         return this.price;
//     }
// }


// gia tri mac dinh********************************************************************
// function logger(log="gia tri mac dinh"){
//     console.log(log);
// }
// logger();


// phan ra*****************************************************************************
// var array = ['javascript', 'PHP', 'Ruby'];
// var [a, b, c] = array;
// console.log(a, b, c);
// var [d, , e] = array;
// console.log(d, e);
// // ...rest lay ra phan con lai
// var [f, ...rest] = array;
// console.log(rest);

// var courses = {
//     Name: "javascript",
//     price: 1000
// };

// // Corrected destructuring to match property names
// var { Name, price } = courses;
// console.log(Name, price);


// module*********************************************************************************
import logger from  './logger.js'
logger('hello')