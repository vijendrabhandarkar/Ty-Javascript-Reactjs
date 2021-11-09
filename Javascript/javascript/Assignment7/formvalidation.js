function validation(){

    const user1 = document.getElementById(`user`).value; 
    if (user1 ==""){
        document.getElementById(`Namee`).innerHTML = "Only Character are allowed"
        return false;
    }

const butEle = document.getElementById(`checkAgree`)
butEle.addEventListener(`click`,()=>{
    document.getElementById(`Agree`).checked = true
})
}