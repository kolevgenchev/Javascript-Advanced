class Company {

    constructor(){
        this.departments={}
    }
    addEmployee(name, salary, position, department){
        if(name===''||name===undefined||name===null||salary===''||salary===undefined||salary===null||position===''||position===undefined||position===null||department===''||department===undefined||department===null){
            throw new Error('Invalid input!')
        }
        if(salary<=0){
            throw new Error('Invalid input!')
        }
        
        if (!this.departments[department]) {
            this.departments[department] = [];
          }
      
          this.departments[department].push({name,salary,position});
        
        return `New employee is hired. Name: ${name}. Position: ${position}`

    }
    bestDepartment(){
        let finalArr=[]
        for(let department in this.departments){
            let salaries=[]
            for(let employee of this.departments[department]){
                let currentSalary=employee.salary
                salaries.push(currentSalary)

            }
                let totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
                let avgSalary = totalSalary / salaries.length;
                finalArr.push({department,avgSalary})
        }
        
        finalArr.sort((a,b)=>b.avgSalary-a.avgSalary)
        let bestDepartment=Object.values(finalArr[0])
        
         let finalStr=`Best Department is: ${bestDepartment[0]}\nAverage salary: ${bestDepartment[1].toFixed(2)}`
         this.departments[bestDepartment[0]].sort((a,b)=>{
            return b.salary-a.salary || a.name.localeCompare(b.name)
         })

        for(let el of this.departments[bestDepartment[0]]){
            finalStr+=`\n${el.name} ${el.salary} ${el.position}`
        }
        return finalStr

    }

}
let newww=new Company()
newww.addEmployee('bobo',1500,'js dev','it')
newww.addEmployee('alex',3500,'java','it')
newww.addEmployee('gosho',2300,'mailchimp','marketing')
newww.addEmployee('vanq',2000,'google ads','marketing')
console.table(newww.bestDepartment())

