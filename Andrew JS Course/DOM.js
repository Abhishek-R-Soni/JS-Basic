const ps = document.querySelectorAll('p')
console.log(ps)
ps.forEach(function (p) {
    // console.log(p.textContent)
    p.textContent = '***'
    //p.remove()
})