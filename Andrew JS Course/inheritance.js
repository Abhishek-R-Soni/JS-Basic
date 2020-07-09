// creation of class
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    
    getInfo(){
        return `Your Name ${this.name} age is ${this.age}`
    }   
}

// extending person class 
class Employee extends Person{
    constructor(name, age, desig, salary){
        super(name, age)
        this.desig = desig
        this.salary = salary
    }

    getInfo() {
        return `Name ${this.name} Age ${this.age} Desig ${this.desig} Salary ${this.salary}`
    }
}

// creation of object
// obj1 = new Person('Abhishek', 24)
// console.log(obj1.getInfo())

emp1 = new Employee('Abhishek Soni', 24, 'Developer', 25000)
console.log(emp1.getInfo())



// getter setter ex

let book = {
    name: 'Python',
    page: 500,
    amount: 699,

    get bookName(){
        return this.name
    },

    get bookPage() {
        return this.page
    },

    get bookAmount() {
        return this.amount
    },
    
    set bookName(name){
        this.name = name
    },

    set bookPage(page) {
        this.page = page
    },

    set bookAmount(amount) {
        this.amount = amount
    }
}

book.bookName = 'Java'
console.log(book.bookName)
console.log(book.bookPage)
console.log(book.bookAmount)
book.bookAmount = 799
console.log(book.bookAmount)
