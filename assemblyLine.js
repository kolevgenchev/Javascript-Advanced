function asemblyLine(){
return {
hasClima (car){
car.temp=21
car.tempSetting=21 
car.adjustTemp=()=>{
    if(car.temp>car.tempSetting){car.temp--;}
    else if (car.temp<car.tempSetting){
        car.temp++
}
}
},
hasAudio(car){
    car.currentTrack={name:null,
    artist:null}
    car.nowPlaying=()=>{
        if(currentTrack!==null){
            console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}` )
        }
        
    }
},
hasParktronic (car){
    car.checkDistance(distance){
        if(distance < 0.1 ){
            console.log("Beep! Beep! Beep!")
        }else if(distance > 0.1&& distance <0.25){
            console.log("Beep! Beep!")
        }else if(distance > 0.25&& distance <0.5){
            console.log("Beep!")
        }else{
            console.log("")
        }
    }
}
}

}
console.log(asemblyLine())