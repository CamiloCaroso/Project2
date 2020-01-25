$(document).ready(function() {

    document.getElementById("submitRes").addEventListener('click', function(){
        if(document.getElementById("passwordConfirmRes").value !== document.getElementById("passwordRes").value){
            alert("different password")
        } else {

            let code = function() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                  return v.toString(16);
                });
            }

            let fullUser = {
                user: document.getElementById("userRes").value,
                password: document.getElementById("passwordRes").value,
                userCode: code
            }
            
            checkIfExists(fullUser.user, fullUser)
            

            document.getElementById("userRes").value = "";
            document.getElementById("passwordRes").value = "";
            document.getElementById("passwordConfirmRes").value = "";
        }
        
    })

    function checkIfExists(name, fullUser){
        $.get("/api/users/newCheck/" + name, function(data){
            if(!data.length){
                userPost(fullUser)
            } else {
                alert("Username unavailable")
            }
            
            
            

        })
    }


    function userPost(user){
        $.post("/api/users/new", user)
    }
});

