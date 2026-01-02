let toggleBtnEle=document.getElementById("ToggleBtn");
let modeTextele=document.getElementById("mode")
toggleBtnEle.addEventListener("click", ()=>
{
    alert("Button clicked!");
    document.body.classList.toggle("dark-mode");
    modeTextele.textContent="Dark mode is enabled"
    if(document.body.classList.contains("dark-mode")){
        toggleBtnEle.textContent="Switch to Light Mode";
        modeTextele.textContent="Dark mode is enabled"
    }
    else{
        toggleBtnEle.textContent="Switch to Dark Mode";
        modeTextele.textContent="Light Mode is enabled";
    }
});