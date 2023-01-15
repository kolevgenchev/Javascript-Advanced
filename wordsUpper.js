function wordsUpper (sentence){
    let newSentence = sentence.replace(/[\W_]+/g," ").trim().split(" ")
    let arr=[]
    for(el of newSentence){
        let cur=el.toUpperCase()
        arr.push(cur)
    }
    console.log(arr.join(", "));

}wordsUpper('Hi, how are you?')