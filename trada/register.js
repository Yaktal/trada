document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // Prevent the default form submission

    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    const phonenumber = document.getElementById('phonenumber').value;
    console.log("me");
    // Perform validation or send data to the server
    if (phonenumber.length != 11){
        alert("Phone Number Incorrect");
        return;
    }
    if (password === confirmpassword) {
         window.location.href = 'welcome.html';
    } else {
        alert("Password Incorrect");
        return;
    }
});

async function signUp(){
    const name = document.getElementById("fullname")
    const phoneNumber = document.getElementById("phonenumber")
    const password = document.getElementById("password")
    const confirmPassword = document.getAnimations("confirmpassword")
    const userName = document.getElementById("username")
try{
    
    const response = await fetch("https://trada-tlcg.onrender.com", {
        method: 'POST',
        body: JSON.stringify({name, phoneNumber, password, confirmPassword, userName}), // Include your data here
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
      })

      const user = await response.json()
    
}catch(e){
    console.log(e)
}
}

document.getElementById('register-form').addEventListener('submit', async function(event) {
    await signUp();
});