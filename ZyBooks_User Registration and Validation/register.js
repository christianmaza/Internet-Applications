var fullName = document.getElementById("fullName"); 
var eMail = document.getElementById("email"); 
var password = document.getElementById("password"); 
var passwordConfirm = document.getElementById("passwordConfirm"); 
var formErrors = document.getElementById("formErrors"); 
var funcArray = [];
var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
var reLo = /[a-z]/;
var reUp = /[A-Z]/;
var reDig = /[0-9]/;

function checkForm() {
   if(fullName.value.length < 1){
      funcArray.push(function(){
         fullName.style.border = "2px solid red";
         formErrors.style.display = "block";
         const lItem = document.createElement("LI");
         lItem.innerHTML = "Missing full name.";
         lItem.style.fontFamily = "Arial, Helvetica, sans-serif";
         lItem.style.fontSize = "13px";
         formErrors.children[0].appendChild(lItem);
         return;
      });
   }

   fullName.style.border = "1px solid #aaa";

   if(re.test(eMail.value) == false){
      funcArray.push(function(){
         eMail.style.border = "2px solid red";
         formErrors.style.display = "block";
         const lItem = document.createElement("LI");
         lItem.innerHTML = "Invalid or missing email address.";
         lItem.style.fontFamily = "Arial, Helvetica, sans-serif";
         lItem.style.fontSize = "13px";
         formErrors.children[0].appendChild(lItem);
         return;
      });
   }

   eMail.style.border = "1px solid #aaa";

   if(password.value.length < 10 || password.value.length > 20){
      funcArray.push(function(){
         password.style.border = "2px solid red";
         formErrors.style.display = "block";
         const lItem = document.createElement("LI");
         lItem.innerHTML = "Password must be between 10 and 20 characters.";
         lItem.style.fontFamily = "Arial, Helvetica, sans-serif";
         lItem.style.fontSize = "13px";
         formErrors.children[0].appendChild(lItem);
         return;
      });
   }

   if(reLo.test(password.value) == false){
      funcArray.push(function(){
         password.style.border = "2px solid red";
         formErrors.style.display = "block";
         const lItem = document.createElement("LI");
         lItem.innerHTML = "Password must contain at least one lowercase character.";
         lItem.style.fontFamily = "Arial, Helvetica, sans-serif";
         lItem.style.fontSize = "13px";
         formErrors.children[0].appendChild(lItem);
         return;
      });
   }

   if(reUp.test(password.value) == false){
      funcArray.push(function(){
         password.style.border = "2px solid red";
         formErrors.style.display = "block";
         const lItem = document.createElement("LI");
         lItem.innerHTML = "Password must contain at least one uppercase character.";
         lItem.style.fontFamily = "Arial, Helvetica, sans-serif";
         lItem.style.fontSize = "13px";
         formErrors.children[0].appendChild(lItem);
         return;
      });
   }

   if(reDig.test(password.value) == false){
      funcArray.push(function(){
         password.style.border = "2px solid red";

         formErrors.style.display = "block";
         const lItem = document.createElement("LI");
         lItem.innerHTML = "Password must contain at least one digit.";
         lItem.style.fontFamily = "Arial, Helvetica, sans-serif";
         lItem.style.fontSize = "13px";
         formErrors.children[0].appendChild(lItem);
         return;
      });
   }

   password.style.border = "1px solid #aaa";

   if(password.value !== passwordConfirm.value){
      funcArray.push(function(){
         passwordConfirm.style.border = "2px solid red";
         formErrors.style.display = "block";
         const lItem = document.createElement("LI");
         lItem.innerHTML = "Password and confirmation password don't match.";
         lItem.style.fontFamily = "Arial, Helvetica, sans-serif";
         lItem.style.fontSize = "13px";
         formErrors.children[0].appendChild(lItem);
         return;
      });
   }

   passwordConfirm.style.border = "1px solid #aaa";

   formErrors.style.display = "none"
      
} 



document.getElementById("submit").addEventListener("click", function(event) {
   if(formErrors.children[0].children[0] != null){
      var ulChildren = formErrors.children[0];
      while(formErrors.children[0].children[0] != null){
         ulChildren.removeChild(ulChildren.lastChild);
      }
   }
   checkForm();
   for (var func of funcArray){
      func();
   }
   funcArray = [];
   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
}); 

 

/*if(formErrors.children[0].children[0] != null){
   var ulChildren = formErrors.children[0];
   while(formErrors.children[0].children[0] != null){
      ulChildren.removeChild(ulChildren.lastChild);
   }
}
*/