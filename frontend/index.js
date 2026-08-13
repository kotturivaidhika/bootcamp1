//alert("welcom to my wesite")
var users=[
    {
        "name": "John Doe",
        "gender": "male",
        "image":"john.png"
    }  ,
    {
        "name": "Jane Smith",
        "gender": "female",
        "image":"jane.png"
    }

]
var currentId=0;
function toggleUser(){
    currentId = (currentId + 1) % 2;
    var image=document.getElementById("image1");
    var name=document.getElementById("name1");
    var gender=document.getElementById("gender1");
    
    name.innerHTML = users[currentId].name;
    gender.innerHTML = users[currentId].gender;
    image.src = users[currentId].image;
}