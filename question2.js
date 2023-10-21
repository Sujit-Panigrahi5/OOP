

// student class 

let  idno=211204001;

// function Student (name,email){

//     if(email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)) {
//         this.name=name;
//         this.email=email;
//         this.enrollcourse="";
//         this.id=idno;
//         idno+=1;
    
//         console.log(`your id no is : ${this.id} . `);
//     } else{
//         console.log("Enter a valid email .");
//     }
   

// }

// Student.prototype.showcourse=function (){
//     if(this.enrollcourse == ""){
//         console.log("we didn't assgn you  any course untill so, please wait for few minut.");
//     } else{
//         console.log(`Your course name is : ${this.enrollcourse}`);
//     }
// }

// // let index=0;

// // let _studentinfo=[];

// function Adimission(){

//     // let _studentinfo=[];
    
// }

// Adimission.prototype.enrollstudent=function(student){
//     _studentinfo.push(student);
//     console.log(`${this.name} has been enrolled . `);
// }


// Adimission.prototype.assigncourse=function(student,domainname){
//     student.enrollcourse = domainname;

//     console.log(`${student.name} has enrolled in ${domainname}`);
// }

// Adimission.prototype.isenrolled=function(){
//     _studentinfo.forEach((item)=>{
//         if(item.id == this.id){
//             console.log(`Yes, ${this.name} has been enrolled `);
//         }
//     });

//     console.log(`No, ${this.name} has not been enrolled`);
// }

// Adimission.prototype.showdetails = function(){
//     _studentinfo.forEach((item,index)=>{
//         console.log(`Name : ${item.name} , email : ${item.email}`);
//     })
// }

// let admissionoffice = new Adimission();

// const student1=new Student("sujit Panigrahi","sujitpanigrahi855@gmail.com");
// const student2=new Student("sujit","suj@gmail.com");

// admissionoffice.enrollstudent(student1);
// admissionoffice.enrollstudent(student2);

// admissionoffice.assigncourse(student1,"webdevelopment");
// admissionoffice.assigncourse(student2,"data science");

// student1.showcourse();
// student2.showcourse();
// admissionoffice.showdetails();


class Student{
    constructor(name,email){
        if(email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)) {
            this.name=name;
            this.email=email;
            this.enrollcourse="";
            this.id=idno;
            idno+=1;
        
            console.log(`your id no is : ${this.id} . `);
        } else{
            console.log("Enter a valid email .");
        }
    }

    showcourse=function (){
        if(this.enrollcourse == ""){
            console.log("we didn't assgn you  any course untill so, please wait for few minut.");
        } else{
            console.log(`Your course name is : ${this.enrollcourse}`);
        }
    }
}

let index=0;

let _studentinfo=[];

class Adimission{
    enrollstudent=function(student){
        _studentinfo.push(student);
        console.log(`${this.name} has been enrolled . `);
    }

    assigncourse=function(student,domainname){
        student.enrollcourse = domainname;
    
        console.log(`${student.name} has enrolled in ${domainname}`);
    }

    isenrolled=function(){
        _studentinfo.forEach((item)=>{
            if(item.id == this.id){
                console.log(`Yes, ${this.name} has been enrolled `);
            }
        });
    
        console.log(`No, ${this.name} has not been enrolled`);
    }

    showdetails = function(){
        _studentinfo.forEach((item,index)=>{
            console.log(`Name : ${item.name} , email : ${item.email}`);
        })
    }


}

let admissionoffice = new Adimission();

const student1=new Student("sujit Panigrahi","sujitpanigrahi855@gmail.com");
const student2=new Student("sujit","suj@gmail.com");

admissionoffice.enrollstudent(student1);
admissionoffice.enrollstudent(student2);

admissionoffice.assigncourse(student1,"webdevelopment");
admissionoffice.assigncourse(student2,"data science");

student1.showcourse();
student2.showcourse();
admissionoffice.showdetails();



