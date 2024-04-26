const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submitButton = document.querySelector('#submit');


submitButton.addEventListener('click', function (event) {
    let previousPosts = localStorage.getItem('blogPosts')
    let blogPosts = [];

    if (username.value === ''){
        window.alert("You must fill out username to submit!");
        event.preventDefault();
        return;
    } else if (title.value === ''){
        window.alert("You must fill out username to submit!");
        event.preventDefault();
        return;
    } else if (content.value === ''){
        window.alert("You must fill out username to submit!");
        event.preventDefault();
        return;
    }
    
    if (previousPosts !== null && previousPosts !== undefined) {
        blogPosts = JSON.parse(previousPosts);
    }
    const blogInfo = {
        username: username.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };

    blogPosts.push(blogInfo);

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    event.preventDefault();
    window.location.href="./blog.html";
});