const inputEl = document.querySelector("#password")
let passwordLength = 8;

function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789?!@&*()[]"

    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    inputEl.value = password
}

function copyPassword() {
    navigator.clipboard.writeText(inputEl.value)
}

const passwordLengthEl = document.querySelector("#password-length")
passwordLengthEl.addEventListener("input", function () {
    passwordLength = passwordLengthEl.value;
    generatePassword();
});

const copyButtonEl = document.querySelector("#copyPassword")
copyButtonEl.addEventListener("click", copyPassword);

generatePassword()