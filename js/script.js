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
function saveMessages(name, company, email, phone, message){
const newMessageRef = messagesRef.push();
 newMessageRef.set([
     name = name,
     company = company,
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
        let company = $('#company').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let message = $('#message').val();
        //save message
        saveMessages(name, company, email, phone, message);
        //alert user
        $('.alert').show();
        //hide alert after 3 seconds
        setTimeout(function(){
            $('.alert').hide();
        }, 3000);
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
    })
//navigate to contact page
    $('#contact-link').on('click', ()=>{
        $('.wrapper').show();
        $('.landing').hide();
        $('#about').hide();
        $('.small-footer').hide();
    })
//navigate to home page
    $('#home').on('click', ()=>{
        $('#about').hide();
        $('.landing').show();
        $('.wrapper').hide();
        $('.small-footer').hide();
    })
    $('.back').on('click', ()=>{
        $('#about').hide();
        $('.landing').show();
        $('.wrapper').hide();
        $('.small-footer').hide();
    })
    //navigation button animation
    //home
    $('#home').on('mouseover', ()=>{
        $('#home').addClass('touch')
    })
    $('#home').on('mouseleave', ()=>{
        $('#home').removeClass('touch')
     })
     //about
     $('#about-link').on('mouseover', ()=>{
        $('#about-link').addClass('touch')
     })
     $('#about-link').on('mouseleave', ()=>{
        $('#about-link').removeClass('touch')
      })
      //contact-link
      $('#contact-link').on('mouseover', ()=>{
        $('#contact-link').addClass('touch')
     })
     $('#contact-link').on('mouseleave', ()=>{
        $('#contact-link').removeClass('touch')
      })
      //decagon button
      $('.decagon-button').on('click', event=>{
          event.preventDefault();
          $('.decagon-show').hide();
          $('.decagon-hide').show();
       
         
      })
})