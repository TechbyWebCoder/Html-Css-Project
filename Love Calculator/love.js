let result = document.querySelector("#result");

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let randomNumber = parseInt(Math.random() * 100);
    console.log(randomNumber);

    let yourName = document.querySelector("#your-name").value;
    let partnerName = document.querySelector("#patner-name").value;

    if (yourName === '') {
        alert("Please enter Your Name !");
    } else if (partnerName === '') {
        alert("Please enter partner's Name !");
    } else {
        result.innerHTML = yourName + " and " + partnerName +
            " love Percentage is: " + randomNumber + "%";
    }
});
