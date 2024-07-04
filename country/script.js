const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.querySelector(".flegs");
    const product = document.querySelectorAll(".div");
    const pname = storeitems.getElementsByTagName("h3");

    for(var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h3')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}




const DarkMode = document.querySelector(".DarkMode");
const sun = document.querySelector(".sun");
const span = document.querySelector(".span");
const moon = document.querySelector(".moon");
const body = document.querySelector(".body");
const divv = document.querySelector(".divv");
const h1 = document.querySelector(".h1");


DarkMode.addEventListener("click", function(){
    sun.classList.toggle("sunn");
    moon.classList.toggle("moonn");
    DarkMode.classList.toggle("DM");

    document.body.classList.toggle("bd");
    divv.classList.toggle("diiv");
    span.classList.toggle("spann");
    h1.classList.toggle("spannn");     
})

