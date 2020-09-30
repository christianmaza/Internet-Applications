function validateForm(event) {
   var myForm = document.querySelector("#myForm");

   myForm.screenName.style.backgroundColor = "LightGreen";
   myForm.zip.style.backgroundColor = "LightGreen";
   myForm.tos.style.backgroundColor = "LightGreen";

   // Replace false with an expression that checks whether myForm.screenName.value is empty.
   if (myForm.screenName.value === "") {
      myForm.screenName.style.backgroundColor = "Orange";
   }

   // Replace false with an expression that checks whether the length of myForm.zip is not 5.
   if (myForm.zip.value.length != 5) {
      myForm.zip.style.backgroundColor = "Orange";
   }

   // Replace false with an expression that checks whether myForm.tos is not "yes".
   if (myForm.tos.value != "yes") {
      myForm.tos.style.backgroundColor = "Orange";
   }
}

var myForm = document.querySelector("#myForm");
myForm.validate.addEventListener("click", validateForm);