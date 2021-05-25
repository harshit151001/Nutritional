// https://test-afbfa-default-rtdb.firebaseio.com/

  const submitBtn = document.getElementById('submit');

  let userName = document.getElementById('name');
  let userEmail = document.getElementById('email');
  let userPhone = document.getElementById('phone');
  let userCity = document.getElementById('city');
  let userPincode = document.getElementById('ppincode');
  let userLooking = document.getElementById('looking');

  submitBtn.addEventListener("click", function(){
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userPhoneInput = userPhone.value;
    let userCityInput = userCity.value;
    let userPincodeInput = userPincode.value;
    let userLookingInput = userLooking.value;

    const response = fetch("https://test-afbfa-default-rtdb.firebaseio.com/user.json",
      {method:"POST",body:JSON.stringify({userNameInput, 
                                         userEmailInput, 
                                         userPhoneInput, 
                                         userCityInput,
                                         userPincodeInput,
                                         userLookingInput})
    }).then(function(){
    console.log("Data saved.");
    })
    .catch(function(error){
      console.log(error);
      })

  });