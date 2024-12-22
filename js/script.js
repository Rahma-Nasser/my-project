

let pro = document.querySelector('.pro');

function right(){
    pro.scrollBy({
        left: 300,
        behavior:'smooth'
    })

}

function left(){
    pro.scrollBy({
        left: -300,
        behavior:'smooth'
    })
}

let input1 = document.getElementById("names");
let input2 = document.getElementById("email");
let input3 = document.getElementById("password");
let btn = document.getElementById("btn");

btn.addEventListener('click', 
    () => {
        if(input1.value == ""){
            console.log("error in name")
        }
        if(input2.value == ""){
            console.log("invalid email")
        }
        if(input3.value == ""){
            console.log("error in password")
         }
    }
)