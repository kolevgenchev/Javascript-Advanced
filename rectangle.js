function rectangle (width,height,color){
const obj={width,
    height,
    color,
    calcArea(){ return obj.width*obj.height}
}
if(obj.color[0]!==obj.color[0].toUpperCase()){
    obj.color=obj.color[0].toUpperCase()+obj.color.slice(1)
}
return obj;

}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());