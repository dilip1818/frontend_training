
class FormValidation {

    formValues = {
        username: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmpassword: "",
        gender: "",
        dateofbirth: "",
        skills: [],
        country: "",
        dateofbirth: ""
    }
    errorValues = {
        usernameErr: "",
        emailErr: "",
        phonenumberErr: "",
        passwordErr: "",
        confirmpasswordErr: "",
        genderErr: "",
        dateofbirthErr: "",
        skillsErr: "",
        dateofbirthErr: ""
    }
    showErrorMsg(data_field, msg) {
        const form_group = document.getElementsByClassName(data_field)[0];
        console.log(form_group)
        form_group.classList.add("error")
        form_group.getElementsByTagName('span')[0].textContent = msg;
    }
    showSuccessMsg(data_field) {
        const form_group = document.getElementsByClassName(data_field)[0];
        form_group.classList.remove('error');
        form_group.classList.add('success');
    }
    getInputs() {
        this.formValues.username = document.getElementById('username').value.trim();
        this.formValues.email = document.getElementById('email').value.trim();
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim();
        this.formValues.password = document.getElementById('password').value.trim();
        this.formValues.confirmpassword = document.getElementById('confirmpassword').value.trim();
        this.formValues.gender = document.querySelector('input[name="gender"]:checked');
        this.formValues.country = document.getElementById('country').value;
        this.formValues.dateofbirth = document.getElementById('date').value;

        var skill = document.querySelectorAll('.skills');
        for (var i = 0; i < skill.length; i++) {
            if (skill[i].checked) {
                this.formValues.skills.push(skill[i].value);
            }
        }

    }
    validateUsername() {
        console.log("name")
        this.formValues.username = document.getElementById('username').value.trim();
        if (this.formValues.username === "") {
            this.errorValues.usernameErr = "* Please Enter Your Name";
            this.showErrorMsg("form-group", this.errorValues.usernameErr);
        } else if (this.formValues.username.length <= 4) {
            this.errorValues.usernameErr = "* Username must be atleast 5 Characters";
            this.showErrorMsg("form-group", this.errorValues.usernameErr);
        } else if (this.formValues.username.length > 14) {
            this.errorValues.usernameErr = "* Username should not exceeds 14 Characters";
            this.showErrorMsg("form-group", this.errorValues.usernameErr);
        } else {
            this.errorValues.usernameErr = "";
            this.showSuccessMsg("name");
        }
    }
    validateEmail() {
        this.formValues.email = document.getElementById('email').value.trim();
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/;
        if (this.formValues.email === "") {
            this.errorValues.emailErr = "* Please Enter Valid Email";
            this.showErrorMsg("email", this.errorValues.emailErr);
        } else if (!(regExp.test(this.formValues.email))) {
            this.errorValues.emailErr = "* Invalid Email";
            this.showErrorMsg("email", this.errorValues.emailErr);
        } else {
            this.errorValues.emailErr = "";
            this.showSuccessMsg("email");
        }
    }
    validatePhonenumber() {
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim();
        const phoneno = /^\d{10}$/;
        if (this.formValues.phonenumber === "") {
            this.errorValues.phonenumberErr = "* Please Enter your Phone Number";
            this.showErrorMsg("phone-number", this.errorValues.phonenumberErr);
        } else if (phoneno.test(this.formValues.phonenumber)) {
            this.errorValues.phonenumberErr = "";
            this.showSuccessMsg("phone-number");
        } else {
            this.errorValues.phonenumberErr = "* Invalid Phone Number";
            this.showErrorMsg("phone-number", this.errorValues.phonenumberErr);
        }
    }
    validatePassword() {
        this.formValues.password = document.getElementById('password').value.trim();
        if (this.formValues.password === "") {
            this.errorValues.passwordErr = "* Please Provide a Password";
            this.showErrorMsg("password", this.errorValues.passwordErr);
        } else if (this.formValues.password.length <= 4) {
            this.errorValues.passwordErr = "* Password must be atleast 5 Characters";
            this.showErrorMsg("password", this.errorValues.passwordErr);
        } else if (this.formValues.password.length > 10) {
            this.errorValues.passwordErr = "* Password should not exceeds 10 Characters";
            this.showErrorMsg("password", this.errorValues.passwordErr);
        } else {
            this.errorValues.passwordErr = "";
            this.showSuccessMsg("password");
        }
    }
    validateConfirmpassword() {
        this.formValues.confirmpassword = document.getElementById('confirmpassword').value.trim();

        if (this.formValues.confirmpassword === "") {
            this.errorValues.confirmpasswordErr = "* Invalid Confirm Password";
            this.showErrorMsg("c-password", this.errorValues.confirmpasswordErr);
        } else if (this.formValues.confirmpassword === this.formValues.password && this.errorValues.passwordErr === "") {
            this.errorValues.confirmpasswordErr = "";
            this.showSuccessMsg("c-password");
        } else if (this.errorValues.passwordErr) {
            this.errorValues.confirmpasswordErr = "* An error occurred in Password Field";
            this.showErrorMsg(4, this.errorValues.confirmpasswordErr);
        } else {
            this.errorValues.confirmpasswordErr = "* Password Must Match";
            this.showErrorMsg("c-password", this.errorValues.confirmpasswordErr);
        }
    }
    validateGender() {
        if (this.formValues.gender == null) {
            this.errorValues.genderErr = "*Mention Your Gender";
            this.showErrorMsg("gender", this.errorValues.genderErr);
        } else {
            this.errorValues.genderErr = "";
            this.showSuccessMsg("gender");
        }

    }
    validateDate() {
        this.formValues.dateofbirth = document.getElementById('date').value;
        let userDate = this.formValues.dateofbirth.split("-");
        let birthDayYear = userDate[0];

        let currentDate = new Date();
        if (currentDate.getFullYear() - birthDayYear <= 18) {
            this.errorValues.dateofbirthErr = "* Age Must Be Greater Then 18";
            this.showErrorMsg('dob', this.errorValues.dateofbirthErr);
        } else if (userDate[0] == "") {
            this.errorValues.dateofbirthErr = "* Please Select Your Date Of Birth";
            this.showErrorMsg('dob', this.errorValues.dateofbirthErr);
        } else {
            this.errorValues.dateofbirthErr = "";
            this.showSuccessMsg('dob');
        }
    }
    validateSkills() {
        if (this.formValues.skills.length == 0) {
            this.errorValues.skillsErr = "* Please Select Your Skills";
            this.showErrorMsg('skill', this.errorValues.skillsErr);
        } else {
            this.errorValues.skillsErr = "";
            this.showSuccessMsg('skill');
        }
    }
    alertMessage() {
        const { usernameErr, emailErr, phonenumberErr, passwordErr, confirmpasswordErr, genderErr, skillsErr, dateofbirthErr } = this.errorValues;
        if (usernameErr === "" && emailErr === "" && phonenumberErr === "" && passwordErr === "" && confirmpasswordErr === "" && genderErr === "" && skillsErr === "" && dateofbirthErr === "") {
            swal("Registration Successful", "ThankYou , " + this.formValues.username, "success").then(() => {
                console.log(this.formValues);
                this.removeInputs();
            })
        } else {
            swal("Give Valid Inputs", "Click ok to Continue", "error");
        }
    }

    removeInputs() {
        const form_groups = document.getElementsByClassName('form-group');
        Array.from(form_groups).forEach(element => {
            element.getElementsByTagName('input')[0].value = "";
            var selected_gender = document.getElementsByName("gender");
            for (var i = 0; i < selected_gender.length; i++) {
                selected_gender[i].checked = false;
            }
            var skill = document.querySelectorAll(".skills");
            for (var i = 0; i < skill.length; i++) {
                skill[i].checked = false;
            }
            element.getElementsByTagName('span')[0].textContent = "";
            element.classList.remove('success');
        })
    }
}

const ValidateUserInputs = new FormValidation();

document.getElementsByClassName('form')[0].addEventListener('submit', event => {
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateUsername()
    ValidateUserInputs.validateEmail()
    ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validatePassword()
    ValidateUserInputs.validateConfirmpassword()
    ValidateUserInputs.validateGender()
    ValidateUserInputs.validateDate()
    ValidateUserInputs.validateSkills()
    ValidateUserInputs.alertMessage()

})

document.getElementById("username").onkeyup = event => {
    ValidateUserInputs.validateUsername();
}
document.getElementById("email").onkeyup = event => {
    ValidateUserInputs.validateEmail();
}
document.getElementById("phonenumber").onkeyup = event => {
    ValidateUserInputs.validatePhonenumber();
}
document.getElementById("password").onkeyup = event => {
    ValidateUserInputs.validatePassword();
}
document.getElementById("confirmpassword").onkeyup = event => {
    ValidateUserInputs.validateConfirmpassword();
}
document.getElementById("date").onkeyup = event => {
    ValidateUserInputs.validateDate();
}







