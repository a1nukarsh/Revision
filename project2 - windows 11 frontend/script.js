
let taskbar=document.getElementsByClassName("taskbar")[0]
let startmenu=document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "54px"){
        startmenu.style.bottom = "-654px"
    }
    else{
        startmenu.style.bottom = "54px"
    }
})