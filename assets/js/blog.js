const blogSection = document.querySelector('.blog-section');

let blogs = localStorage.getItem('blogPosts');
let allBlogs = JSON.parse(blogs)

for (let blog of allBlogs) {
    let newBlog = document.createElement("div");
    let blogTitle = document.createElement("h2")
    let blogContent = document.createElement("p")
    let authorTag = document.createElement("p")

    blogTitle.textContent = blog.title;
    blogContent.textContent = blog.content;
    authorTag.textContent = "Posted by: " + blog.username;

    newBlog.setAttribute('class', 'blog-card');
    blogTitle.setAttribute('class', 'blog-title');
    blogContent.setAttribute('class', 'blog-content');
    authorTag.setAttribute('class', 'author-tag');


    blogSection.appendChild(newBlog);
    newBlog.appendChild(blogTitle);
    newBlog.appendChild(blogContent);
    newBlog.appendChild(authorTag);


    console.log(blog);
}

const backBtn = document.querySelector('.back-btn');

backBtn.addEventListener('click', function () {
    window.location.href="./index.html";
});