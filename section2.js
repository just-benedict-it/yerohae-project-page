const section2HeaderBtn = document.querySelectorAll(".section2HeaderRight input");


function btnClicked(event){
    event.preventDefault();
    // console.log(event);
    console.log(event.path);
    const btnClickedDiv = event.path[3].querySelector(".section2Section");
    btnClickedDiv.classList.toggle("hidden");
}
section2HeaderBtn.forEach((btn) => btn.addEventListener("click", btnClicked));
// section2HeaderBtn.addEventListener("click", btnClicked);