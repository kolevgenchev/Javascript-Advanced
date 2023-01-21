function createSortedList(){
    let els=[]
    
return{
    add(element) {
        els.push(element)
        els.sort((a,b)=>a-b)
        
},
    remove(index) {if((index >= 0 && index < els.length)){els.splice(index,1)
        }},
    get(index) {if((index >= 0 && index < els.length)){return (els[index])}},
    get size() {
        return els.length
    }
}

}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size)