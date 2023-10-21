

function Temperature(){
    let _temp=0;
    let _fahre=32;

    this.getCelsiour=function(){
        console.log(_temp+"C");
    }
    this.getFahrenheit=()=>{
        console.log(_fahre +"F")
    }

    this.setCelsious=function(value){

        _temp=0;
        _fahre=32;
        
        _temp+=value;
        _fahre+=(value*(9/5));
    }

    this.setFahrenheit=function(value){

        _temp=0;
        _fahre=0;

        _temp=(value-32)*(5/9);
        _fahre+=value;
    }

}

// class Temperature{
//     _temp=0;
//     _fahre=32;

//     getCelsiour=function(){
//         console.log(_temp+"C");
//     }
//     getFahrenheit=()=>{
//         console.log(_fahre +"F")
//     }

//     setCelsious=function(value){

//         _temp=0;
//         _fahre=32;
        
//         _temp+=value;
//         _fahre+=(value*(9/5));
//     }

//     setFahrenheit=function(value){

//         _temp=0;
//         _fahre=0;

//         _temp=(value-32)*(5/9);
//         _fahre+=value;
//     }
// }

let temp=new Temperature();

console.log(`initial celsious ${temp.getCelsiour()}`);
console.log(`initial celsious ${temp.getFahrenheit()}`);

temp.setCelsious(25);

console.log(` celsious ${temp.getCelsiour()}`);
console.log(` celsious ${temp.getFahrenheit()}`);

temp.setFahrenheit(68);

console.log(` celsious ${temp.getCelsiour()}`);
console.log(` celsious ${temp.getFahrenheit()}`);
