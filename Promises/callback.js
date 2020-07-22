const posts = [
    { title: "Post one", body: "This is post one" },
    { title: "Post two", body: "This is post two" }
];

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li> `
        });
        document.body.innerHTML = output;
    }, 1000 );
}
function createPost(post,callback){
    setTimeout(() => {  
      posts.push(post);
      callback();
    },2000);
}
createPost({ title: "Post four", body: "This is post nine" },getPost); // this took longer than get post