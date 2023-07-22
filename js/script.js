fetch("data.json").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData);
})