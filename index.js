const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector(".check-button");
const isLucky = document.querySelector("#is-lucky");
const privacyClose = document.querySelector(".privacy-close");
const privacyNote = document.querySelector(".privacy-note");

privacyClose.addEventListener("click", function(){
    privacyNote.style.display = "none";
})

let birthDaystring = "";
function checkBirthDateIsLucky(){
    var dob = Array.from(dateOfBirth.value);
    let sum=0;
    if(dateOfBirth.value&&luckyNumber.value){

        if(Number(luckyNumber.value) <= 0){

            isLucky.innerText="Lucky number should be greater than 0"; 
            
        } else {
        //20210825
            for(let index=0;index<dateOfBirth.value.length;index++){
                if(dob[index]==="-"){
                }else{
                    birthDaystring +=dob[index];
                    sum = Number(sum)+Number(dob[index]);//0+2,2+0,2+2
                }
            }
            if((sum%luckyNumber.value) === 0){
                isLucky.innerText="Your birthday is lucky..🥳";
            }else{
                isLucky.innerText="Your birthday is not that lucky..🤥";
            }
        }
    }else{
        isLucky.innerText="Please enter both Date of birth and Lucky number."
    }
}
checkButton.addEventListener("click",checkBirthDateIsLucky);

