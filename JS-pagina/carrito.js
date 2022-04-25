//funciones o metodos
//busqueda y filtrado
//Creo el objeto carrito
class carrito{
    contructor(nombre, precio, stock){
        this.nombre=nombre.toLowerCase();
        this.precio=parseFloat(precio);
        this.stock=parseInt(stock);

    }
    Iva(){
        this.precio=precio*1.21;
    }
}
//Completo el objeto carrito
const producto1=new carrito("cuchara", "5.5", "644");
const producto2=new carrito("mascara facial", "50", "34");
const producto3=new carrito("cortante forma", "5.7", "134");
const producto4=new carrito("cortante letra", "6.9", "124");
const producto5=new carrito("cortante numero", "5.3", "245");

//Guardo la informacion de carrito en un array y le aplico el iva al precio
let productos=[producto1, producto2, producto3, producto4, producto5];
for(const producto of productos)
    producto.Iva();
//Busco la informacion del producto ingresado y la imprimo
let buscarProducto= prompt("Ingrese el producto que desea comprar");
const filtroProducto=productos.filter(
    (elemento)=>{
        return elemento.nombre==buscarProducto;
    }
);
console.log(filtroProducto);


