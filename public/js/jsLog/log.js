$(document).ready(function() {

    
    
        document.getElementById("submitLog").addEventListener('click', function(){
            
            $.post("/api/users/log/" + document.getElementById("userLog").value + "&" + document.getElementById("passwordLog").value, function(data) {
                if(!data || !data.length){
                    //alert("This account doesn't exist")
                    document.getElementById("messageLog").textContent = "This account doesn't exist"
                    document.getElementById("messageLog").style.color = "red"
                    document.getElementById("messageLog").style.display = "block"
                    document.getElementById("userLog").value = ""
                    document.getElementById("passwordLog").value = ""
                } else {
                    localStorage.setItem('key', data[0].userCode)
                    document.getElementById("userLog").value = ""
                    document.getElementById("passwordLog").value = ""
                    location.href = "/feed"
                }
                
            })
        
        });
    
})