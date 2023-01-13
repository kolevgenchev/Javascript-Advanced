function GCD (num1,num2){
    let BiggestNum;
    if(num1>num2){
        BiggestNum=num1
    }else{
        BiggestNum=num2
    }
for(let i=BiggestNum-1;i>0;i--){
    if(num1%i===0&&num2%i===0){
        return i;
    }
}

}console.log(GCD(2154, 458))