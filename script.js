const smallCups = document.querySelectorAll(".cup-small");
const ltrs = document.getElementById("liters");
const pencentage = document.getElementById("percentage");
const rema = document.getElementById("Rema");

smallCups.forEach((cup , idx) => {
    cup.addEventListener("click", () => highlightCups(idx));
})

function highlightCups(idx) {

    if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full"))
    {
        idx--;
    }

    smallCups.forEach((cup , idx2) => {
        if(idx2 <=idx)
        {
            cup.classList.add("full");
        }
        else
        {
            cup.classList.remove("full");
        }
    })

    upDateBigCup();
}

function upDateBigCup() {

    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if(fullCups === 0)
    {
        pencentage.style.visibility= "hidden";
        pencentage.style.height= 0; 
    }

    else
    {
        pencentage.style.visibility = "visible";
        pencentage.style.height = ` ${ (fullCups / totalCups) * 335}px `;
        pencentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) 
    {
        rema.style.visibility = "hidden";
        rema.style.height = 0;
    } 
    else 
    {
        rema.style.visibility = "visible";
    }
}