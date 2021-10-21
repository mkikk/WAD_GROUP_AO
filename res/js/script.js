$(function() {

    // Retrieving the posts from the given url and outputting the posts to the html page.
    $.get("https://api.npoint.io/9a36eccdabc48a0eef0a", function(posts) {
        
        
        for (post of posts) {

            let div_post = $('<div class="post">');
            let div_top = $('<div class="top">');
            let div_content = $('<div class="content">');
            let div_likebutton = $('<div class="likebutton">');

            let author = $('<p class="author">').text(post.author);
            let time = $('<p class="textgrey">').text(post.time);
            let title = $('<h3>').text(post.title);
            let body = $('<p>').text(post.body);

            let userPhoto = $('<img class="userpic" src="'+post.author_path+'" alt="Profile picture">');
            let photo = $('<img class="contentpic" src="'+post.photo_path+'" alt="'+post.photo_alt+'">');
            let likeButton = $('<img class="likebuttonpic" src="'+post.like_path+'" alt="Like button">');

            div_top.append(userPhoto)
            div_top.append(author)
            div_top.append(time)

            div_content.append(photo)
            div_content.append(title)
            div_content.append(body)

            div_likebutton.append(likeButton)

            div_post.append(div_top)
            div_post.append(div_content)
            div_post.append(div_likebutton)

            $(".box").append(div_post)

        }

    })

});