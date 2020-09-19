const positions = document.getElementById("positions");
const joinbtn = document.getElementById("joinbtn");
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email= document.getElementById('email');
const tel = document.getElementById('tel');
const amount = document.getElementById('amount');

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    checkInputs();
})

// check all the form value
function checkInputs(){
    const fistnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    const amountValue = amount.value.trim();

    if(fistnameValue===""){
        setErrorFor(firstname,"Firstname cannot be blank");
    }else{
        setSuccessFor(firstname);
    }

    if(lastnameValue===""){
        setErrorFor(lastname,"Lastname cannot be blank");
    }else{
        setSuccessFor(lastname);
    }

    if(emailValue===""){
        setErrorFor(email,"Email cannot be blank");
    }else{
        setSuccessFor(email);
    }

    if(amountValue===""){
        setErrorFor(amount,"Amount cannot be blank");
    }else{
        setSuccessFor(amount);
    }
    //show success mesage
}

//add error class
function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}
//add success class
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//email regex
function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}



function show(){
    if(positions.style.display==="block"){
        positions.style.display="none";
        joinbtn.style.background="#73AD21";
        joinbtn.style.color="white";
    }
    else{
        positions.style.display="block";
        joinbtn.style.background="white";
        joinbtn.style.color="#73AD21";
    }

    
}