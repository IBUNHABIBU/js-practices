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
      const error = true;
      if(!error){
          resolve();
      } else {
          reject('Error: something went wrong!');
      }
    },2000);
    });
}
// createPost({ title: "Post four", body: "This is post nine" })
// .then(getPost).catch((err) => console.log(err)); 

// alternatively u can use Promise.all
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => setTimeout(resolve, 2000, "Goodby"));
// const promise4 = fetch('https://jsonplaceholder.typecode.com/users').then(res => res.json());

Promise.all([promise1,promise2,promise3]).then(values => console.log(values));