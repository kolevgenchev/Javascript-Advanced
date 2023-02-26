class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = []
    }
    registerParticipant(name, condition, money) {
        let conditions = Object.keys(this.priceForTheCamp)
        if (!conditions.includes(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        let foundOrNot = this.listOfParticipants.find((x) => x.name === name)


        if (foundOrNot) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return ('The money is not enough to pay the stay at the camp.');
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
        return `The ${name} was successfully registered.`;

    }
    unregisterParticipant(name) {
        let found = this.listOfParticipants.find((x) => x.name === name)
        if (!found) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let index = this.listOfParticipants.indexOf(found)
        this.listOfParticipants.splice(index, 1)
        return `The ${name} removed successfully.`;



    }
    timeToPlay(typeOfGame, participant1, participant2) {
        switch (typeOfGame) {
            case 'WaterBalloonFights':
                let names = []
                for (let el of this.listOfParticipants) {
                    names.push(el.name)
                }
                if (!names.includes(participant1) || !names.includes(participant2)) {
                    throw new Error(`Invalid entered name/s.`);
                }
                let conditions=[]
                for (let el of this.listOfParticipants) {
                    if (el.name === participant1 || el.name === participant2) {
                        conditions.push(el.condition)
                    }
                }
                if(conditions[0]!==conditions[1]){
                    throw new Error(`Choose players with equal condition.`);
                }
               
                    
                  
                    
                
                
                let participant1Found = this.listOfParticipants.find((x) => x.name === participant1)
                let part1Index = this.listOfParticipants.indexOf(participant1Found)
                let participant2Found = this.listOfParticipants.find((x) => x.name === participant2)
                let part2Index = this.listOfParticipants.indexOf(participant2Found)
                if (this.listOfParticipants[part1Index].power > this.listOfParticipants[part2Index].power) {
                    this.listOfParticipants[part1Index].wins++
                    return `The ${participant1} is winner in the game ${typeOfGame}.`;
                } else if (this.listOfParticipants[part1Index].power < this.listOfParticipants[part2Index].power) {
                    this.listOfParticipants[part2Index].wins++
                    return `The ${participant2} is winner in the game ${typeOfGame}.`;
                } else {
                    return 'There is no winner.';
                }


            case 'Battleship':

                let namesList = []
                for (let el of this.listOfParticipants) {
                    namesList.push(el.name)
                }
                if (!namesList.includes(participant1)) {
                    throw new Error(`Invalid entered name/s.`);
                }
                let founded = this.listOfParticipants.find((x) => x.name === participant1)
                if (founded) {
                    let index = this.listOfParticipants.indexOf(founded)
                    this.listOfParticipants[index].power += 20
                    return `The ${participant1} successfully completed the game ${typeOfGame}.`;
                }



        }



    }
    toString() {
        let str = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
        let str2 = ''
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
        for (let el of this.listOfParticipants) {
            str2 += `${el.name} - ${el.condition} - ${el.power} - ${el.wins}` + '\n'
        }
        return (str + '\n' + str2).trim();
    }
}
        



const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));

    
    

