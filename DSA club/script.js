function storeFormData() {
            
    var name = document.getElementById("namebox").value;
    var email = document.getElementById("emailbox").value;
    var phone = document.getElementById("phonebox").value;
    var gender = document.querySelector('input[name="genderbox"]:checked') ? document.querySelector('input[name="genderbox"]:checked').value : "";

    
    var formData = {
        name: name,
        email: email,
        phone: phone,
        gender: gender
    };

    
    var formDataJSON = JSON.stringify(formData);

    
    localStorage.setItem("formData", formDataJSON);

    
    alert("Form data has been successfully stored in local storage.");
}


document.querySelector("button").addEventListener("click", storeFormData);