function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    var letters;

    letters = /^[a-zA-Z ]*$/;
    error_message.style.padding = "10px";

    if (!name.match(letters)) {
        text="Please enter letters only (A-z)"
        error_message.innerHTML = text;
        return false;
    }

    if(name.length <2){
        text = "Please Enter a Valid Name";
        error_message.innerHTML= text;
        return false;
    }
    if(subject.length <3){
        text="Please Enter more than 3 characters"
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone)|| phone.length != 10){
        text="Please Enter a Valid Phone Number(10 digits)"
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf ("@") == -1 || email.length <6){
        text="Please Enter a Valid Email"
        error_message.innerHTML = text;
        return false;
    }

    if(message.length < 2){
        text="Please Enter More 5 or more characters"
        error_message.innerHTML = text;
        return false;

    }

    alert("Form Submitted Successfully")
    return true;
}


document.getElementById("myBtn").addEventListener("click", displayDegrees)

function displayDegrees(){

    fetch("https://aeh961.github.io/Degrees/schools.json")

    .then((response)=>{
    
        return response.json();
    })
    .then((schools)=>{
        let placeholder = document.querySelector("#data-output");
        let datahead= document.querySelector("#datahead") 
        let headout = 
        ` <tr>
            <th>Image</th>
            <th>School Name</th>
            <th>Major</th>
            <th>Degree</th>
            <th>year</th>
        </tr>`

        let out ="";
        for(let school of schools){
            out += `
            <tr>
                <td><img src='${school.image}'</td>
                <td>${school.name}</td>
                <td>${school.major}</td>
                <td>${school.degree}</td>
                <td>${school.year}</td>
            </tr>
            `;
        }
        datahead.innerHTML = headout;
        placeholder.innerHTML= out;
    })
    .catch(() => {
        console.log("Wrong json file, enter a correct JSON file");
    });
}

