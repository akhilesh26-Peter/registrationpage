const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        this.innerHTML = '<i class="bi bi-eye-slash"></i>';

    } else {

        password.type = "password";

        this.innerHTML = '<i class="bi bi-eye"></i>';

    }

});

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";

        this.innerHTML = '<i class="bi bi-eye-slash"></i>';

    } else {

        confirmPassword.type = "password";

        this.innerHTML = '<i class="bi bi-eye"></i>';

    }

});