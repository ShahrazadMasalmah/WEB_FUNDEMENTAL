var getelement = document.querySelector(".content-c-r")
var getelement2 = document.querySelector(".content-c-r2")
var number = 500 ; 
function removeuser(){
    getelement.remove()
}

function removeuser2(){
    getelement2.remove()
}

function changename(){
    document.getElementById('edito').innerText = 'Mutaz';
    
} 

function accept(){
    document.getElementById('add1').innerText=(number++)
    
}
