/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
    getPostIdParam();
}

const getPostIdParam = () =>{
    const querystring = window.location.search;
    const urlParams = new URLSearchParams(querystring);
    return urlParams.get("id");
}

const getPost = () => {
    // CODE GOES HERE
    const postId = getPostIdParam();
    const url = `${API_URL}${postId}`
    fetch(url, {
        method : "GET"
    }).then((response) =>{
        return response.json();
    }).then((data) =>{
        buildPoost(data);
    })
}

const buildPoost = (datas) => {
    const postDate = new Date(parseInt(datas.added_date)).toDateString();
    // HINT: Convert the date number to a Date string 
    console.log(datas)
    document.querySelector("header").style.backgroundImage = `url(${API_BASE_URL}${datas.post_image})`
    document.getElementById("individual-post-title").innerText = datas.title;
    document.getElementById("individual-post-date").innerText = `Published On ${postDate}`;
    document.getElementById("individual-post-content").innerText = datas.content;


}

