// quick validation form
function formValidation() {
    var userName = document.getElementById("ducoUsername");

    if (userName && userName.value) {
        getDucos();
    } else {
        alert("Please fill your username wallet.");
    }
}

function getDucos() {
    var ducoUsername = document.getElementById("ducoUsername").value;
     //document.getElementById("spinner").innerHTML = '<div class="loader"></div>';

    fetch('https://api.stormsurge.xyz/transaction/' + ducoUsername, {
        method: 'GET'
    })
    .then(response => {
        if (response.status === 419) {
            console.log("Wait 15 minutes for the cooldown to end");
            alert("Wait 15 minutes for the cooldown to end");
			location.reload();
        } else if (response.status === 400) {
            console.error('Unsuccessful Transaction.');
			location.reload();
            alert('Unsuccessful Transaction.');
		} else if (response.status === 200) {
            alert("10 DUCO has been added to your account!");
			location.reload();
        } else if (response.ok) {
            return response.text();
        } else {
            console.error('Network response was not ok');
            return Promise.reject('Network response was not ok');
			location.reload();
    }
})}
// Nice Javascript!! -Jaden360lol