function itOverBlog() {
    var blogs = [
        {
            title: "BSU Presents October Madness",
            date: "October 6th, 2023",
            description: "This was a staff vs. student basketball game we did in collaboration with the Men and Women's Basketball teams.",
            slug: "portfolio.html",
        },
        {
            title: "BSU General Body Meeting",
            date: "October 27th, 2023",
            description: "This will be a movie and pajama night theme as we get ready for Halloween!",
            slug: "portfolio.html",
        },
        {
            title: "BSU Black Love",
            date: "February 18th, 2024",
            description: "This event is meant to recognize the achievements of members of BSU on campus. It's also an excuse to dress up",
            slug: "portfolio.html",
        },
    ];
    var blogContainer = document.getElementById("blogbody");
    blogs.forEach(function (blog) {
        var createNewBlogEl = document.createElement("div");
        createNewBlogEl.className = "newBlogEntry";
        createNewBlogEl.innerHTML = "\n            <p>".concat(blog.title, "</p>\n            <p>").concat(blog.date, "</p>\n            <p>").concat(blog.description, "</p>\n            <a href=\"").concat(blog.slug, "\"></a>\n    ");
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(createNewBlogEl);
    });
}
itOverBlog();
