
       /// var mybutton = document.getElementById('kalegallery');
    
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          var mybutton = document.getElementById('scrollBtn');
          if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }

        function submitUser(){
            var uname = document.getElementById('userName').value;
            var email = document.getElementById('email').value;
            if(uname !== '' && email !== '') {
                alert("You have been successfully joined our email list")
            } else {
                alert("Please enter name and email")
            }
            uname.innerText = '';
            email.innerText = '';
        }
