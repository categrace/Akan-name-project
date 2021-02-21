const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame" ];
const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getName() {
  let date = document.getElementById("date").value
  let gender = document.querySelector("input[name=gender]:checked")
  let dayOfTheWeek = new Date(date).toDateString();
  let birthDate = dayOfTheWeek.split(" ")[0]
  console.log(gender,date,birthDate);




  if (gender === "Male") {
    if (birthDate === "Sun"){
      alert("Your Akan Name is:"+ maleAkanNames[0]);
    }
    else if (birthDate === "Mon"){
      alert("Your Akan Name is:"+ maleAkanNames[1]);
    }
    else if (birthDate === "Tue"){
      alert("Your Akan Name is:"+ maleAkanNames[2]);
    }
    else if (birthDate === "Wed"){
      alert ("Your Akan Name is:"+ maleAkanNames[3]);
    }
    else if (birthDate === "Thur"){
      alert ("Your Akan Name is:"+ maleAkanNames[4]); 
    }
    else if (birthDate === "Fri"){
      alert ("Your Akan Name is:"+ maleAkanNames[5]);
    }
    else {
      alert ("Your Akan Name is:"+ maleAkanNames[6]);
    }
  }
   else {
    if (birthDate === "Sun"){
    alert("Your Akan Name is:" + femaleAkanNames[0]);
  }
  else if (birthDate === "Mon"){
  alert("Your Akan Name is:" + femaleAkanNames[1]);
  }
  else if (birthDate === "Tue"){
    alert("Your Akan Name is:" + femaleAkanNames[2]);
  }
  else if (birthDate === "Wed"){
    alert("Your Akan Name is:" + femaleAkanNames[3]);
  }
  else if (birthDate === "Thur"){
    alert("Your Akan Name is:" + femaleAkanNames[4]);
  }
  else if (birthDate === "Fri"){
    alert("Your Akan Name is:" + femaleAkanNames[5]);
  }
  else if (birthDate === "Sat"){
    alert("Your Akan Name is:" + femaleAkanNames[6]);
  }
} 
}

  


