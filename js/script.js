//firebase config
var firebaseConfig = {
    apiKey: "AIzaSyCn_bcvvOplLZ8CqtOPW1-mkpJF02cDI-A",
    authDomain: "portfoliocontactform-b2447.firebaseapp.com",
    databaseURL: "https://portfoliocontactform-b2447.firebaseio.com",
    projectId: "portfoliocontactform-b2447",
    storageBucket: "portfoliocontactform-b2447.appspot.com",
    messagingSenderId: "409155407431",
    appId: "1:409155407431:web:259b3231bebae8f8292b62",
    measurementId: "G-YKDN3JZ6Y2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//reference message collection
const  messagesRef = firebase.database().ref('messages')
//save message function
function saveMessages(name, email, phone, message){
const newMessageRef = messagesRef.push();
 newMessageRef.set([
     name = name,
     email = email,
     phone = phone,
     message = message
 ])
}


$(document).ready(()=>{
 //submit form to firebase
    $('#contactForm').on('submit', event=>{
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let message = $('#message').val();
        //save message
        saveMessages(name, email, phone, message);
        //alert user
        $('.alert').show();
        //hide alert after 3 seconds
        setTimeout(function(){
            $('.alert').hide();
        }, 15000);
        //reload page
        setTimeout(function(){
            location.reload();
        }, 2000);
    })
//navigate to about page

    $('#about-link').on('click', ()=>{
        $('#about').show();
        $('.landing').hide();
        $('.wrapper').hide();
        $('.small-footer').hide();
        $('.navbar').show();
        $('.decagon').hide();
    })
//navigate to contact page
    $('#contact-link').on('click', ()=>{
        $('.wrapper').show();
        $('.landing').hide();
        $('#about').hide();
        $('.small-footer').hide();
        $('.navbar').show();
        $('.decagon').hide();
    })
    //navigate to decagon page
    $('#decagon').on('mouseover', ()=>{
        $('.decagon').show();
        $('.landing').hide();
        $('#about').hide();
        $('.wrapper').hide();
    })
    $('#decagon').on('mouseleave', ()=>{
        $('.decagon').hide();
        $('.landing').show();
    })
//navigate to home page
    $('#home').on('click', ()=>{
        $('#about').hide();
        $('.landing').show();
        $('.wrapper').hide();
        $('.small-footer').hide();
    })
    //navigation button animation
     //about
     $('#about-link').on('mouseover mouseleave', ()=>{
        $('#about-link').toggleClass('touch')
     })
     
      //contact-link
      $('#contact-link').on('mouseover mouseleave', ()=>{
        $('#contact-link').toggleClass('touch')
     })

     
})