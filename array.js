
var names =  ['zen','Abhi', 'Dhimant', 'Jay', 'Tami']

names = names.sort()
text = "<ul>"
for  (i=0; i< names.length; i++){
    text += "<li>" + names[i] + "<\li>";
}

text += "</ul>"

document.getElementById('name').innerHTML = text

hello = () => window.alert("Hello Abhi")

