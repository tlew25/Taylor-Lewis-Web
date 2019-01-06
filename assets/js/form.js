//FIREBASE JS FOR CLIENT STORAGE
var config = {
    apiKey: "AIzaSyAUrgeA3yp3DEXUUwUvEbyK4m6EcLMKvtI",
    authDomain: "contactform2393.firebaseapp.com",
    databaseURL: "https://contactform2393.firebaseio.com",
    projectId: "contactform2393",
    storageBucket: "contactform2393.appspot.com",
    messagingSenderId: "230097572926"
  };
  firebase.initializeApp(config);


var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
