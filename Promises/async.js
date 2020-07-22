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
    return new Promise((resolve, reject) => {
    setTimeout(() => {  
      posts.push(post);
      const error = false;
      if(!error){
          resolve();
      } else {
          reject('Error: something went wrong!');
      }
    },2000);
    });
}
// async await
async function init(){
    await createPost({ title: "Post eight", body: "This is post seven" });
    getPost();
}
init();