const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

const getData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const Showpass = document.querySelector("#Showpass");
const totalChar = document.querySelector("#passLength");
const upercase = document.querySelector("#upercase");
const lowercase = document.querySelector("#lowercase");
const num = document.querySelector("#num");
const symbol = document.querySelector("#symbol");

const btn = document.querySelector(".btn");

const updateData = (password = "") => {
    if (upercase.checked) {
        password += getData(upperSet);
    }
    if (lowercase.checked) {
        password += getData(lowerSet);
    }
    if (num.checked) {
        password += getData(numberSet);
    }
    if (symbol.checked) {
        password += getData(symbolSet);
    }

    if (password.length < totalChar.value) {

        return updateData(password);
    }
    if (password.length > totalChar.value) {
        let subtr = password.substring(0, totalChar.value);
        password = subtr;
        console.log(password)
        Showpass.value = password;
    }
}
btn.addEventListener("click", () => {
    updateData()
})