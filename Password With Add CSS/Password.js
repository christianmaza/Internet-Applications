document.querySelector("#submitBtn").addEventListener("click", submitBtnClick);

function isStrongPassword(password) {
   return password.length >= 6 && /\d/.test(password) && password !== "password1";
}

function submitBtnClick() {
   let password = document.querySelector("#password").value;
   if (isStrongPassword(password)) {
      document.querySelector("#errorMsg").classList.add("hidden");
      
      // Remove error-textbox class
      document.querySelector("#password").classList.remove("error-textbox");

   } else {
      document.querySelector("#errorMsg").classList.remove("hidden");

      // Add error-textbox class
      document.querySelector("#password").classList.add("error-textbox");
   }
}
