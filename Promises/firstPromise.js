// var myPromise = new Promise(function(resolve,reject){
//   setTimeout(() => resolve(4), 2000);
// });
// myPromise.then((res) => {
//   res += 3;
//   console.log(res);
// })

function getData(method, url){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status > 200 && this.status < 300){
        resolve(xhr.response);
      } else {
        reject({
          status: this.status, 
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function(){
      reject({
        status: this.status, 
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}
getData('GET', 'https://jsonplaceholder.typicode.com/todos')
.then(function(data){
  console.log(data);
}).catch(function(err){
  console.log(err);
});