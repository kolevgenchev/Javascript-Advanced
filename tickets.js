function tickets(arr,criteria){
   let initialArr=[]

    class Ticket{
        constructor(destination,price,status){
            this.destination=destination
            this.price=price
            this.status=status

        }
    }

    for(let el of arr){
        let [destination,price,status]=el.split('|')
        price=Number(price)
        initialArr.push(new Ticket(destination,price,status))
    }
    switch(criteria){
        case 'destination':initialArr.sort((a,b)=>a.destination.localeCompare(b.destination));break;
        case 'price':initialArr.sort((a,b)=>a.price-b.price);break
        case 'status':initialArr.sort((a,b)=>a.status.localeCompare(b.status));break
    }

    return initialArr;

}console.table(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'))