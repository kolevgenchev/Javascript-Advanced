function cooking(...params){
let num=Number(params.shift())
for(el of params){
    switch (el){
        case 'chop':num=num/2;break;
        case 'dice':num=Math.sqrt(num);break;
        case 'spice':num=num+1;break;
        case 'bake':num=num*3;break;
        case 'fillet':num=num*0.80;break;
    }
    console.log(num)
}


}cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')