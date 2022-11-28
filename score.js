const arr=[

]
let cunt= document.getElementById('noise')
const tb=document.getElementById('content')
const credit=document.getElementById('ch') 
 const ca1=document.getElementById('fca') 
 const ca2=document.getElementById('sca') 
 const exe=document.getElementById('ex')

 let result;
 ;
function addCourse(){
let num1=Number(ca1.value)

let num2= Number(ca2.value)

let num3=Number(exe.value)

let mine= Number(credit.value)
result=num1 + num2 + num3
let lock;
 let data={
   course:cunt.value,
   CAT1:ca1.value,
   CAT2:ca2.value,
   Exam:exe.value,
   CREDIT:mine,
   Total:result,
   grab:function(){
    if(this.Total>=70){
      return "A"
    }else if(this.Total>=60 && this.Total < 70 ){
     return "B"
    }
    else if(this.Total>=50 && this.Total < 60 ){
    return "C"
    }

    else if(this.Total>=40 && this.Total < 50 ){
    return "D"
    }

    else if(this.Total>30 && this.Total < 40 ){
     return "E"
    }

    else if(this.Total<=30 ){
        return "F"
       }
   },
   max:function(){
    if(this.grab()=="A"){
      lock = 5
      return lock*this.CREDIT
    }else if(this.grab()=="B"){
      lock = 4
      return lock*this.CREDIT
    }
    else if(this.grab()=="C"){
      lock = 3
      return lock*this.CREDIT
    }
    else if(this.grab()=="D"){
      lock = 2
      return lock*this.CREDIT
    }
    else if(this.grab()=="E"){
      lock = 1
      return lock*this.CREDIT
    }
    else if(this.grab()=="F"){
      lock = 0
      return lock*this.CREDIT
    }
   }
 }
 arr.push(data)
 localStorage.setItem('Scores',JSON.stringify(arr))
 
 tb.innerHTML=""
 displayCourse()

 clr()
}

function clr(){
    credit.value=""
    ca1.value=""
    ca2.value=""
    exe.value="" 
}


function displayCourse(){
  let help=0
  let imp=0
 for(let i = 0; i < arr.length; i++) {
    let item=arr[i]
    help+=item.CREDIT
    document.getElementById('rave').innerText=help
    tb.innerHTML+=`
    <tr>
    <th scope="row">${i + 1}</th>
    <td>${item.course}</td>
    <td>${item.CAT1}</td>
    <td>${item.CAT2}</td>
    <td>${item.Exam}</td>
    <td>${item.Total} </td>
    <td id="em" class="gre">${item.grab()} </td>
    <td class="dash">${item.CREDIT}</td>
    <td>${item.max()}</td>
    
    </tr>

    `
  

  

    
    
displayCourse()
// function get(){
  
// let lamb= localStorage.getItem('Scores')
// let creche=JSON.parse(lamb)
// console.log(creche)
// for(let x = 0;x<creche.length;x++){
// let lamb=creche[x]
// help+=lamb.CREDIT
// document.getElementById('dark').innerText=help

// }

// }
// get()











