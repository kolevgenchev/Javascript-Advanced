function solution(){
    let str=''
return{
    append(element){return str+=element},
    removeStart(num){return str=str.slice(num)},
    removeEnd(num){return str=str.slice(0,str.length-num)},
    print(){return console.log(str)}
}
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();