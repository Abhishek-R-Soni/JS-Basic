// print hello
// let name = 'Abhishek'
// isName = name != 'SAbhishek'
// console.log(isName)

// function
// let square = function (x) {
//     return x * x
// }
// console.log(square(5))

// undefined & null
// let name = null
// console.log(name)

// default arg
// let sendScore = function (name = 'Abhishek', score = 99) {
//     console.log(`Helloo ${name}`)
//     return name + ', ' + score
// }
// console.log(sendScore())

// grade calc
// let grade = function (score, total) {
//     per = (score / total) * 100

//     if (per >= 80)
//         return 'Grade A'
//     else if (per >= 60)
//         return 'Grade B'
//     else   
//         return 'Grade C'
// }
// console.log(grade(15,20))

// object
// let book = {
//     title: 'Abhi Soni',
//     page: 400,
//     rs: 300
// }
// book.page += 500
// console.log(`Book is written by ${book.title} has ${book.page} pages.`)

// expense tracer
// let acc = {
//     name: 'Abhi',
//     income:5000,
//     expense:0
// }

// let addInc = function (acc, amt) {
//     acc.income += amt
// }

// let getInc = function(acc){
//     return acc.income
// }

// let addExp = function (acc, amt) {
//     acc.expense += amt
//     acc.income -= amt
// }

// let getExp = function (acc) {
//     return acc.expense
// }
// console.log('Exp' + getExp(acc))
// console.log('Inc' + getInc(acc))
// console.log('Add Exp' + addExp(acc,500))
// console.log('Exp' + getExp(acc))
// console.log('Inc' + getInc(acc))

// object with function 
// let acc = {
//     name: 'Abhi',
//     income:5000,
//     expense:0,

//     isIncomeAvailable: function () {
//         return this.income > 0
//     }
// }
// console.log(acc.isIncomeAvailable())

// password checker
// password = 'abhi1234'
// checkPass = function (password) {
//     return password.length > 5 && password.includes('1234')
// }
// console.log(password.length);
// console.log(password.toUpperCase());
// console.log(password.includes('abhi'));
// console.log(checkPass(password));

// const
// const name = 'Abhi'
// console.log(name);
// name = 'as'
// console.log(name);

// name = function () {
//     let s = 20
// }

// console.log(name());

// for loop
// todos = ['Java', 'Cpp', 'C', 'Javascript']

// todos.forEach(function (todo, index) {
//     console.log(todo, index)
// })

// index 
// todos = ['Java', 'Cpp', 'C', 'Javascript']

// console.log(todos[-1])

// findIndex, findNote method
todos = [
    {   
        title:'Cpp',
        page:200
    },
    {
        title:'ACpp',
        page:100
    },
    {
        title: 'Java',
        page: 400
    },
    {
        title: 'Python',
        page: 499
    }
]

// findIndex()
// id = todos.findIndex(function (todo, index) {
//     return todo.title === 'Jaava'
// })
// console.log(id)

// findNote()
//  findNote = function (todos, tag) {
//       const  id = todos.findIndex(function (todo, index){
//             return todo.title.toLowerCase() === tag.toLowerCase()
//     })

//     return todos[id]
// }
// console.log(findNote(todos, 'ACpp'))

// search todo
//  searchTodo = function (todos, tag) {

//     return notes
// }

// notes = todos.forEach(function (todo, index) {
//     isTitleMatch = todo.title.toLowerCase().includes('c')
//     isTagMatch = todo.page === 10
//     return isTagMatch || isTitleMatch
// })

// console.log(notes)

// sort notes
sortTodos = function (todos) {
    todos.sort(function (a,b) {
        if(a.title.toLowerCase() < b.title.toLowerCase())
            return -1
        else if (b.title.toLowerCase() < a.title.toLowerCase())
            return 1
        else
            return 0
    })
}
sortTodos(todos)
console.log(todos)
