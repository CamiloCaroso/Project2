let key = localStorage.getItem('key')
$.get("/api/users/find/" + key, function(data){
    if(!data || !data.length){
        location.href = "/"
    } else {
        document.getElementById("user").textContent = data[0].user
    }
})
$(document).ready(function() {
    document.getElementById("post").addEventListener('click', function(){
        location.href = "/post"
    })

    let postsRE;
    let feedContainer = document.getElementById("feedContainer")
    $.get("/api/usersPosts/all", function(data){
        postsRE = data
        initializeRows()
    })
    function initializeRows() {
        var postsToAdd = [];
        for (var i = 0; i < postsRE.length; i++) {
          postsToAdd.push(createNewPost(postsRE[i]));
        }
        feedContainer.append(postsToAdd);
        
    }

    function createNewPost(post){
        console.log(post.activity)
        let userT = document.createTextNode(post.user)
        let activityT = document.createTextNode(post.activity)
        let messageT = document.createTextNode(post.message)

        
        let user = document.createElement("div")
        let activity = document.createElement("div")
        let message = document.createElement("p")
        let postCont = document.createElement("div")


        user.className = "user"
        message.className = "message"
        postCont.className = "postCont"
        
        user.append(userT)
        activity.append(activityT)
        message.append(messageT)

        postCont.append(user)
        postCont.append(activity)
        postCont.append(message)

        document.getElementById("feedContainer").prepend(postCont)
        
        
        
    }

    document.getElementById("logout").addEventListener('click', function(){
        localStorage.clear();
        location.href = "/"
    })
    

})


    
