class Stringer{
    constructor(string,initialLength){
        this.innerString=string
        this.innerLength=initialLength
        this.originalLength=initialLength
    }
    increase(index){
        this.innerLength+=index
        
    }
    decrease(index){
        this.innerLength-=index
        if(this.innerLength<0){
            this.innerLength=0
        }
        
    }
    toString(){
        if(this.innerString.length>this.innerLength){
            let cur=this.innerString.slice(0,this.innerLength)
           return (cur+'...')
        }else{
            return (this.innerString)
        }

    }
}



let test = new Stringer("Test", 5);
test.increase(5)
test.increase(5)
test.decrease(16)
test.toString()





