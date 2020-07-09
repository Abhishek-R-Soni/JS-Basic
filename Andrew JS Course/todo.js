// create todo app

// let todos = [
//     {
//         title: 'Python',
//         desc: 'Show Django Tutor',
//         completed: true
//     },
//     {
//         title: 'Java',
//         desc: 'Show Hibernate Tutor',
//         completed: false
//     },
//     {
//         title: 'Django',
//         desc: 'Show Email template Tutor',
//         completed: true
//     },
//     {
//         title: 'Python',
//         desc: 'Show Regex Tutor',
//         completed: false
//     },
//     {
//         title: 'Data Science',
//         desc: 'Show Data Analysis Tutor',
//         completed: true
//     }
// ]


// display all elements
// const div = document.createElement('div')
// document.querySelector('body').appendChild(div)

// // print all todos
// todos.forEach(function (todo) {
//     let p = document.createElement('p')
//     p.textContent = todo.title + ' : ' + todo.desc
//     document.querySelector('div').appendChild(p)
// })


// display all completed todos 
// const div = document.createElement('div')
// document.querySelector('body').appendChild(div)

// todos.forEach(function (todo) {
//     let p = document.createElement('p')
//     if (todo.completed)
//         p.textContent = todo.title + ' : ' + todo.desc
//     document.querySelector('div').appendChild(p)
// })

// print on click
function createNote() {
    document.querySelector('#create').addEventListener('click', function (e) {
        console.log('click me')
        todos = []
        localStorage.setItem('todos', JSON.stringify(todos))
    })    
}

// add todo on click
function addNotes() {
    let txt = ""
    document.querySelector('#txt').addEventListener('change', function (e) {
        txt = e.target.value
        console.log(txt)

    })
    let add = addNote(txt)
    // document.querySelector('#txt').innerHTML = ""
}

// display all elements
function showNote() {
    let dis = displayNotes()    
}

// debugger
// console.log('debugger')

// search notes 
function searchNote() {
    let todos = searchNote()
}

// clear all elements
function clearNote() {
    let clear = clearNote()    
}

// // working with form
// document.querySelector('#form').addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(e.target.elements.name.value)
// })


// // working with checkbox
// document.querySelector('#cb').addEventListener('change', function (e) {
//     console.log(e.target.checked)
// })


// local data storage 
// localStorage.setItem('name','Abhishek Soni')
// console.log(localStorage.getItem('name'))
// // localStorage.removeItem('name')
// localStorage.clear()


// let person = {
//     name: 'Abhishek',
//     age: 35
// }

// // converting object to json
// localStorage.setItem('person', JSON.stringify(person))

// // converting json to object
// let persons = localStorage.getItem('person')
// user = JSON.parse(persons)
// // console.log(`title ${user.name}`)