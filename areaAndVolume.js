function vol() {
    return Math.abs(this.x * this.y * this.z)
};
function area() {
    return Math.abs(this.x * this.y)
};
// function solve(area, vol, input) {
// let objectsArr=JSON.parse(input)
// let result=objectsArr.map(x=>{
// return {
//     area:area.call(x),
//     volume:vol.call(x)
// }
// })
// return result

function solve(area,vol,input){
let inputLines=JSON.parse(input)
let res=[]
for(el of inputLines){
   res.push({
        area:area.call(el),
        volume:vol.call(el)
    })
    
}
return res


}
// function solve(area,vol,input){
//     let coordinates=JSON.parse(input)
//     let result=[]
//     for(let el of coordinates){
//     result.push({
//     area:area.call(el),
//     volume:vol.call(el)
//     })
    
//     }
//     return result;
    
//     }


console.table(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`))