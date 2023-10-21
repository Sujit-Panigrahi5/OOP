

class Baseclass{


    constructor(a){
        this.a=a;
    }

    calculatearea=()=>{
        return this.a*this.a;
    }

    calculataeperimeter=(n)=>{
        return 4*this.a;
    }
}


class Circle extends Baseclass{
    // constructor(r){
    //     this.r=r;
    // }
    
    
    constructor(r){
        super(r);
    }

    calculatearea=()=>{
        return Math.PI*(this.a*this.a);
    }

    calculataeperimeter=(n)=>{
        return 2*Math.PI*this.a;
    }

}

class Rectangle extends Baseclass{
    constructor(l,w){
        // this.l=l;
        super(l)
        this.w=w;
    }

    calculatearea=()=>{
        return this.a*this.w;
    }

    calculataeperimeter=(n)=>{
        return 2*(this.a + this.w);
    }

}

class Triangle extends Baseclass{
    constructor(a,b,c){
        // this.a=a;
        super(a)
        this.b=b;
        this.c=c;
    }

    calculatearea=()=>{
       let h=Math.sqrt((this.a*this.a), (this.b,this.b));
        return (1/2)*this.b*h;
    }

    calculataeperimeter=(n)=>{
        return this.a+this.b+this.c;
    }

}


const circle=new Circle(5);

console.log(`area : ${circle.calculatearea()} , perimeter ${circle.calculataeperimeter()}`);

const rectangle = new Rectangle(4,6);

console.log(`area : ${rectangle.calculatearea()} , perimeter ${rectangle.calculataeperimeter()}`);

const triangel =  new Triangle(2,3,4);

console.log(`area : ${triangel.calculatearea()} , perimeter ${triangel.calculataeperimeter()}`);

