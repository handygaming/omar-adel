let email = document.getElementById("e");
        let value_email = false;
        let password = document.getElementById("p");
        let value_p = false;
        let link = document.getElementById("link");
        let error = document.getElementById("error");
        link.onclick = function(e){
        if(email.value !== "" && password.value !== ""){
            value_email = true;
        }
        if(value_email === false && value_p === false){
            e.preventDefault();
            email.focus();
        }
        }
       email.onblur = function(){
        password.focus();
       }