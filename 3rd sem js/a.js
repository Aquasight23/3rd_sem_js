// 'use script'
// const calcAverage =(test1,test2,test3)=>{
//  const avg=((Number(test1) + Number(test2) + Number(test3))/3)
//  return avg;
// }
// const checkWinner= (avgDolhins,avgKoalas)=>{
//  if (avgDolhins>2*avgKoalas){

//      console.log(`team dolhin won by ${avgDolhins} to team koalas by ${avgKoalas}`);
//  }
//  else if(avgKoalas>2*avgDolhins){
//      console.log(`team koalas won by ${avgKoalas} to team dolhin by ${avgDolhins}`);
//  }
//  else{
//      console.log("score more next time");
//  }
// }
// const avgDolhins=calcAverage(1,1,1);
// const avgKoalas=calcAverage(2,2,4);
// checkWinner(avgDolhins,avgKoalas);



// function calculateAge(age){
//     let retirementAge=65-Number(age);
//     console.log(retirementAge);
// }
// let age=prompt("Enter your age: ");
// calculateAge(age);




// let a=[1,2,3];
//         b=a.indexOf(4);
//         console.log(b);



// function calculateAge(dob)
// {
//     const currentyear=2022;
//     const age=currentyear-dob;
//     return age;
// }
// let dob=[1990,1991,1992,1993]
// let age=[calculateAge(dob[0])]
// console.log(age);
// console.log(dob);




// const arr=["yes","no"];
// b=arr.indexOf("yes");
// console.log(arr.indexOf("yes"));




// const arr=["yes","no"];
// console.log(arr [1]);




// let myobj={
//     'firstname':'Prakash',
//     'college':'Bernhardt',
//     marks: [1,2,5,9],
//  }
//  console.log(myobj);
//  console.log(myobj['firstname']);
//  console.log(myobj['college']);
//  console.log(myobj.marks);





// let employee={
//     id:1,
//     fname:'Prakash',
//     lname:'Mul',
//     calculateage:function(dob){
//          const currentyear=2021;
//          const age=currentyear-dob;
//          return age;
//     }
//  }
//  console.log(employee);
//  console.log(employee.id);
//  console.log(employee.fname);
//  console.log(employee.lname);
//  console.log(employee.calculateage(1991));




// let employee={
//     id:1,
//     fname:'Prakash',
//     lname:'Mul',
//     dob: 1992,
//     calculateage:function(){
//          const currentyear=2021;
//          const age=currentyear-this.dob;
//          return age;
//     }
//  }
//  const age=employee.calculateage()
//  console.log(employee);
//  console.log(employee.id);
//  console.log(employee.fname);
//  console.log(employee.lname);
//  console.log(age);



// let employee={
//     dob:1991,
//     fname:'Prakash'
// }
// let dob=prompt(employee.fname)
// const fname=employee[dob];
// alert(fname);





// DOM= Document Object Model
// document.querySelector('.myclass').textContent="new content";
// let value=document.querySelector('.myclass').textContent;
// console.log(value);



// document.querySelector('.myclass').textContent="new content";


// document.querySelector('.myclass').style.backgroundColor='red';


// let element= document.getElementById('myDiv');
// element.classList.remove('hidden')
// element.classList.add('hidden')



// document.querySelector('.check').addEventListener('click', function(){
//     let textvalue= document.querySelector('.myTextBox').ariaValueMax;
//     console.log("My Text Value is:",textvalue);
// })




// document.querySelector('.check').addEventListener('click', function(){
//     document.getElementById("myDiv").classList.add("hidden")
// })
// function add(){
//     alert(1);
// }





// // secret number
// const secret=10;

// const input = document.querySelector(".form");
// const button = document.querySelector(".btn");
// const container = document.querySelector(".number");
// button.addEventListener("click",()=>{
//     console.log(input.value);
//     if(secret == input.value){
//         container.style.backgroundColor= "lightgreen";
//     }
//     else{
//         container.style.backgroundColor= "red";
//     }
// })



// let a=[1,2,3,4,5];
// let[x,,,,y]=a;
// console.log(x,y);



// let a=[1,2,[3,4],5];
// let [x,,[y,z],]=a;
// console.log(a);





