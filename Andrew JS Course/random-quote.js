document.querySelector('#btn').addEventListener('click', () =>{

    const request = new XMLHttpRequest()
    console.log(request)
    request.addEventListener('readystatechange', (e) => {
        document.querySelector('#div').innerHTML = ""

        if (e.target.readyState === 4){
            const p = document.createElement('p')
            p.textContent = JSON.parse(e.target.responseText)['puzzle']
            console.log(p.textContent)
            document.querySelector('#div').appendChild(p)
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle')
    request.send()

})