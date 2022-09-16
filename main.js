let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVv 0wXxYyZz";
//z`console.log(alphabets.length);
let status = document.getElementById("status");
status.innerText = "Captcha Generator";
let value = 0;

const inputno = () => {
  let intval = document.getElementById("cars");
  value = intval.options[intval.selectedIndex].text;
  console.log(value);
  generate();
};
const generate = () => {
  captcha = "";
  if (value == 0) {
     let first = (alphabets[Math.floor(Math.random() * alphabets.length)]);
     let second = Math.floor(Math.random() * 10);
     let third = Math.floor(Math.random() * 10);
     let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
     let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
     let sixth = Math.floor(Math.random() * 10);
     captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
  } else {
    for (let i = 0  ; i < value; i++) {
      let rando = Math.floor(Math.random() * 2);
      if (rando == 0) {
        let key =
          alphabets[Math.floor(Math.random() * alphabets.length)].toString();
        captcha = captcha + key;
      } else {
        let key = Math.floor(Math.random() * 10).toString();
        captcha = captcha + key;
      }
    }
  }

  console.log(captcha);
  document.getElementById("generated-captcha").value = captcha;
  document.getElementById("entered-captcha").value = "";
  status.innerText = "Captcha Generator";
};

const check = () => {
  
  let userValue = document.getElementById("entered-captcha").value;
  if (userValue == "") {
    document.getElementById('modal-body').innerHTML = "The entered captcha is empty";
    
  }
  else if (userValue == captcha) {
    document.getElementById('modal-body').innerHTML = "Captcha Matched Successfully";
      document.getElementById("entered-captcha").value = "";
      value = 0;
    generate();
  } else {
    document.getElementById('modal-body').innerHTML = "Captcha did not match !!!!";
      document.getElementById("entered-captcha").value = "";
      generate();
  }
};
