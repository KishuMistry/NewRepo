function DisplayFullName(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var fullName = firstName + " " + lastName;
    
    alert("Full Name: " + fullName);
    console.log("Full Name: " + fullName);
}