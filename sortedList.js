class List {
    list=[]
    size=0
    add(x){
        this.list.push(x)
        this.size++
        this.list.sort((a,b)=>a-b)
    }
    get(index){
        
        if(index>this.list.length-1||index<0){
            throw new Error('index out of bounds')
        }
            this.list.sort((a,b)=>a-b)
            return (this.list[index])

    }
    remove(index){
        if(index>this.list.length-1||index<0){
            throw new Error('index out of bounds')
        }
            this.list.sort((a,b)=>a-b)
            this.list.splice(index,1)
            this.size--

    }
    
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(82))
