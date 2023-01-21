function heroic (arr){
let heroes=[]
for(el of arr){
    let [name,level,items]=el.split(" / ")
    let heroe={}
    if(items){
        level=Number(level)
        items=items.split(', ')
        
        heroe={name,level,items}
        heroes.push(heroe)
    }else {
        let items=[]
        level=Number(level)
       heroe={name,level,items}
        heroes.push(heroe)
    }
    
    
}
let final=JSON.stringify(heroes)
return final;
}heroic(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])