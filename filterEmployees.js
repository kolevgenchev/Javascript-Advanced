function filter(data,criteria){
let dataObj=JSON.parse(data)
let criteriaArray=criteria.split('-')
let key=criteriaArray[0]
let value=criteriaArray[1]
    if(criteria==='all'){
        let index=-1
        return dataObj.forEach((element) => {
            index++
            console.log(`${index}. ${element.first_name} ${element.last_name} - ${element.email}`);
            
        });
    }

    let found=dataObj.filter((x)=>x[key]===value)
    found.forEach((element,index) => {
        console.log(`${index}. ${element.first_name} ${element.last_name} - ${element.email}`)
    });




}
filter(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'all'
)