// 1. remove all elements has 'the' in content
// 2. get all elements has 'Java, Python' in content


// removes p
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//     p.remove()
// })

// remove the in content
// const thes = document.querySelectorAll('p')
// ls = thes.forEach(function (the) {
//     if (the.textContent.includes('the')){
//         the.remove()
//     }
// })


// get 'Java' or 'Pyhton' in content
// const languages = document.querySelectorAll('p')
// languages.forEach(function (language) {
//     if (language.textContent.includes('Java') || language.textContent.includes('Python')){
//         console.log(language.textContent)
//     }
// })

// adding new element
const h3 = document.createElement('h3')
h3.textContent = 'This is footer...'
document.querySelector('body').appendChild(h3)
