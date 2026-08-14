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
function randomUser(){
    fetch("https://randomuser.me/api/").then(
        function(result){
            return result.json();
        }
    ).then(
        function(data){
            var image=document.getElementById("image1");
            var name=document.getElementById("name1");
            var gender=document.getElementById("gender1");
            name.innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
            gender.innerHTML = data.results[0].gender;
            image.src = data.results[0].picture.large;
            // Handle the JSON data here
        }
    ).catch(
        function(error){
            console.log("Error fetching random user:", error);
        }
    );
}