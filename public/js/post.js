let key = localStorage.getItem('key')
$.get("/api/users/find/" + key, function(data){
    if(!data || !data.length){
        location.href = "/"
    } else {
        document.getElementById("user").textContent = data[0].user
    }
})

$(document).ready(function() {
    document.getElementById("feed").addEventListener('click', function(){
        location.href = "/feed"
    })

    
    document.getElementById("submit").addEventListener('click', function(){

        
        
        $.get("/api/users/find/" + key, function(data){
            name = data[0].user
            console.log(name)
            let userPost = {
                user: data[0].user,
                code: key,
                activity: document.getElementById("activity").value,
                message: document.getElementById("message").value
            }
            runPost(userPost)
        })
        
    })
    function runPost(value){
        $.post("/api/usersPosts/new", value)
    }

    document.getElementById("logout").addEventListener('click', function(){
        localStorage.clear();
        location.href = "/"
    })

})