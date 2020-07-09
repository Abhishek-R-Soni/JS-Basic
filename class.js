class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    getInfo() {
        return this.name + ' ' + this.age
    }
}

obj = new User('Abhi', 25)
obj2 = new User('Khushi', 15)

window.alert(obj.getInfo)
window.alert(obj2.getInfo())

document.getElementById('obj').innerHTML = obj.getInfo()
document.getElementById('obj2').innerHTML = obj2.getInfo()


nums = [1,2,3,4,5]
txt = ""
nums.forEach(myFunction);

document.getElementById('obj').innerHTML = txt

function myFunction(value) {
    txt += value
}