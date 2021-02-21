const maleAkanNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
const femaleAkanNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

function getName() {
  let date = document.getElementById("date").value
  let gender = document.getElementById("gender").checked
  let dayOfTheWeek = new Date(date).toDateString();
  let birthDate = dayOfTheWeek.split(" ")[0]
  console.log(gender,date,birthDate);
}



  if (gender === "Male") {
    if (birthDate === "Sun"){
      alert("Your Akan Name is:"+ maleAkanNames[0]);
    }
    if (birthDate === "Mon"){
      alert("Your Akan Name is:"+ maleAkanNames[1]);
    }
    if (birthDate === "Tue"){
      alert("Your Akan Name is:"+ maleAkanNames[2]);
    }
    if (birthDate === "Wed"){
      alert ("Your Akan Name is:"+ maleAkanNames[3]);
    }
    if (birthDate === "Thur"){
      alert ("Your Akan Name is:"+ maleAkanNames[4]); 
    }
    if (birthDate === "Fri"){
      alert ("Your Akan Name is:"+ maleAkanNames[5]);
    }
    if (birthDate === "Sat"){
      alert ("Your Akan Name is:"+ maleAkanNames[6]);
    }

  } else if(gender ==="female") {
    if (birthDate === "Sun")
    alert("Your Akan Name is:" + femaleAkanNames[0]);
  }
  if (birthDate === "Mon"){
  alert("Your Akan Name is:" + femaleAkanNames[1]);
  }
  if (birthDate === "Tue"){
    alert("Your Akan Name is:" + femaleAkanNames[2]);
  }
  if (birthDate === "Wed"){
    alert("Your Akan Name is:" + femaleAkanNames[3]);
  }
  if (birthDate === "Thur"){
    alert("Your Akan Name is:" + femaleAkanNames[4]);
  }
  if (birthDate === "Fri"){
    alert("Your Akan Name is:" + femaleAkanNames[5]);
  }
  if (birthDate === "Sat"){
    alert("Your Akan Name is:" + femaleAkanNames[6]);
  }
  

  


  
  
  

