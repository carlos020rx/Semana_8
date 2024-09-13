fetch("https://jsonplaceholder.typicode.com/posts")
.then((reponse)=>response.json())
.then((data)=>{
    console.log(data);
})