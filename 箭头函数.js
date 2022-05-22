const button = document.getElementById('testarrow');
button.addEventListener('click', ()=> {
    console.log(this === window) // true
    this.innerHTML = 'clicked button'
})

// setTimeout(()=> {
//     console.log(this, 'fk')
// }, 100)

// let o = {}
// function x() {
//     this.name = 233
//     setTimeout(()=> {
//         console.log(this, 'fk')
//         console.log(this.name, 'fk')
//     }, 100)
// }
// x()
// x.call(o)

let obj = {
    hi: function() {
        function x() {
            console.log(this, 'x')
        }
        x()
    }
}
obj.hi()