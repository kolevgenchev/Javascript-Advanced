function carFactory (car){


let final={model:car.model}
const engine ={
    small:{power: 90, volume: 1800 },
    normal:{ power: 120, volume: 2400 },
    monster:{ power: 200, volume: 3500 }
}
if(car.power<=90){
final.engine=engine.small
}else if (car.power>90&&car.power<=120){
    final.engine=engine.normal
}else{
    final.engine=engine.monster
}
final.carriage={type:car.carriage,color:car.color}

if (car.wheelsize%2===0){
    let size=car.wheelsize-1
    final.wheels=[size,size,size,size]
}else {
    final.wheels=[car.wheelsize,car.wheelsize,car.wheelsize,car.wheelsize]

}
return(final)



}carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })