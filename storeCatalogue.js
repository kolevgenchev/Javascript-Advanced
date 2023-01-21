function storeCatalogue(arr){
let sorted=arr.sort((a,b)=>a.localeCompare(b))
let sortedObj={}
for(el of sorted){
    let [product,price]=el.split(" : ")
    if(!sortedObj[product[0]]){
        sortedObj[product[0]]=[{product,price}]
    }else{
        sortedObj[product[0]].push({product,price})
    }
}

for(el in sortedObj){
    console.log(el)
    for (obj of sortedObj[el]){
        console.log(`  ${obj.product}: ${obj.price}`)
    }
}



}storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])