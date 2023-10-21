function Product(name,category,price,stock){
    this.name=name;
    this.category=category;
    this.price=price;
    this.stock=stock;
}

function  Inventory(){
    let _arr=[];

    this.addProduct=(product)=>{
        _arr.push(product);
        console.log(`add ${product.name} form the inventory`);
    }

    this.deleteProduct=(name)=>{
        _arr.forEach((item,index)=>{
            if(item.name === name){
                _arr.splice(index,1);
                console.log(`delete ${item.name} form the inventory`);
                return;
            }
        });

        
       
    }

}

// Inventory.prototype.addProduct=(product)=>{
//     arr.push(product);
//     console.log(`add ${product.name} form the inventory`);
// }

// Inventory.prototype.deleteProduct=(name)=>{
//     this.arr.forEach((item,index)=>{
//         if(item.name === name){
//             this.arr.splice(index,1);
//             console.log(`delete ${item.name} form the inventory`);
//             return;
//         }
//     });

//     console.log("enter a valid product name ");
//     return ;
// }

const inventory =new Inventory();

const product1 =new Product('laptop','electronics',899,10);
const product2=new Product('book','Books',20,50);

inventory.addProduct(product1);
inventory.addProduct(product2);

inventory.deleteProduct('laptop')
