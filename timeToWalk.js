function timeToWalk(steps,footprint,speed){

const distance=steps*footprint
const speedInMperSec=speed/3.6
const rest =Math.floor(distance/500)*60
const time =distance/speedInMperSec+rest
const hours=Math.floor(time/3600)
const minutes=Math.floor(time/60)
const seconds=Math.round(time%60)
console.log(`${hours<10?"0":""}${hours}:${minutes<10?"0":""}${minutes}:${seconds<10?"0":""}${seconds}`)

}timeToWalk(4000, 0.60, 5)