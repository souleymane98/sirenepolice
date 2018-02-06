var p = document.querySelector('.para')
window.setInterval(function(){
    p.classList.toggle('red')
    
},1000)

var pon = document.querySelector('.pon')
window.setInterval(function(){
    pon.classList.toggle('blue')
},-1000)