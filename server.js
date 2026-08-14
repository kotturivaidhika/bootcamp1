const express=require("express");
const app=express();
const port=process.env.PORT || 8080;
app.use(express.static("frontend"));
app.use(express.json());
var users=[
    {
        "id":1,
        "name": "John Doe",
        "gender": "male",
        "image":"https://randomuser.me/api/portraits/men/10.jpg"  
    },
    {
        "id":2,
        "name": "Sofia Lee",
        "gender": "female",
        "image":"https://randomuser.me/api/portraits/women/31.jpg"
    },
    {
        "id":3,
        "name": "Alice Johnson",
        "gender": "female",
        "image":"https://randomuser.me/api/portraits/women/32.jpg",

    },
    {
        "id":4,
        "name": "Bob Smith",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
        "id":5,
        "name": "Charlie Brown",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/34.jpg"
    },
    {   
        "id":6,
        "name": "David Wilson",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/35.jpg"
    },
    {       
        "id":7,
        "name": "Emily Davis",
        "gender":"female",  
        "image":"https://randomuser.me/api/portraits/women/36.jpg"
    },  
    {
        "id":8,
        "name": "Frank Miller",
        "gender":"male", 
        "image":"https://randomuser.me/api/portraits/men/37.jpg",

    },
    {
        "id":9,
        "name": "Grace Lee",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/38.jpg"
    },
    {
        "id":10,
        "name": "Henry Johnson",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/39.jpg"    
    }
];
var nextId=11;
function findIndex(id){
    for(var i=0;i<users.length;i++){
        if(users[i].id===id){
            return i;
        }  
    }
    return -1;
}
app.get("/api/users",function(req,res){
    return res.json(users);

})
app.get("/api/users/:id",function(req,res){
    var id=Number(req.params.id);
    var index=findIndex(id);
    if(index===-1){
        return res.status(404).json({error:"User not found with id "+id});
    }
    var user=users[index];
    return res.json(user);
})
app.get("/api/random",function(req,res){
    var randomIndex=Math.floor(Math.random()*users.length);
    if(users.length===0){
        return res.status(404).json({error:"No user found"});
    }
    var user=users[randomIndex];
    return res.json(user);
})
app.post("/api/users",function(req,res){
    var newUser=req.body;
    var tempUser={
        "id":nextId,
        "name":newUser.name,
        "gender":newUser.gender,
        "image":newUser.image
    }
    nextId++;
    users.push(tempUser);
    return res.status(201).json({message:"User created successfully","user":tempUser});

})
app.put("/api/users/:id",function(req,res){

    var id=Number(req.params.id);
    var index=findIndex(id);
    if(index===-1){
        return res.status(404).json({error:"User not found with id "+id});
    }  
    users[index]=req.body;
    res.json({message:"User updated successfully","user":users[index]});
 });
app.delete("/api/users/:id",function(req,res){
    var id=Number(req.params.id);
    var index=findIndex(id);
    if(index===-1){
        return res.status(404).json({error:"User not found with id "+id});
    }
    users.splice(index,1);
    return res.json({message:"User deleted successfully"});
});
app.listen(port,()=>{
    console.log("Server is running on http://localhost:"+port );
});


