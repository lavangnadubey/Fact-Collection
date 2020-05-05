//number variables
let factnumber = document.querySelector('#factnumber');
let factTextnum = document.querySelector('#factTextNum');
let numberInput = document.querySelector('#numberInput');
let triv = document.querySelector('#trivian');
let math = document.querySelector('#math');
numberInput.addEventListener('input', getnumFactFetch);


//year variable
let factyear = document.querySelector('#factyear');
let factTextyear = document.querySelector('#factTextYear');
let yearInput = document.querySelector('#yearInput');
yearInput.addEventListener('input', getyearFactFetch);

//date facts variables
let factdate = document.querySelector('#factdate');
let factTextdate = document.querySelector('#factTextDate');
let dateInput = document.querySelector('#dateInput');
dateInput.addEventListener('input', getdateFactFetch);

// function getFactAjax() {

//     let number = numberInput.value;

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/' + number);
//     xhr.onload = function () {
//         if (this.status == 200 && number != '') {
//             //console.log(this.responseText);

//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         }
//     }
//     xhr.send();

// }

function getnumFactFetch() {
    let number = numberInput.value;
    if (number != '') {
        fetch('http://numbersapi.com/' + number)
            .then(response => response.text())
            .then(data => {
                factnumber.style.display = 'block';
                triv.innerText = data;
                // console.log(res);

            })
            .catch(err => console.log(err));
        fetch('http://numbersapi.com/' + number + '/math')
            .then(response => response.text())
            .then(data => {

                factnumber.style.display = 'block';
                math.innerText = data;
            })
            .catch(err => console.log(err));
    }

    // fetch('http://numbersapi.com/' + number)
    //     .then(response => response.text())
    //     .then(data => {
    //         // console.log(data);
    //         if (number != '') {
    //             //factnumber.style.display = 'block';
    //             res = data;
    //         }
    //     })
    //     .catch(err => console.log(err));
    // console.log(res);
    // fetch('http://numbersapi.com/' + number + '/math')
    //     .then(response => response.text())
    //     .then(data => {
    //         // console.log(data);
    //         if (number != '') {
    //             //factnumber.style.display = 'block';
    //             res = res + data;
    //         }
    //     })
    //     .catch(err => console.log(err));
    // factnumber.style.display = 'block';
    // factTextnum.innerText = res;
}

function getyearFactFetch() {
    let year = yearInput.value;
    // console.log(year);
    fetch('http://numbersapi.com/' + year + '/year')
        .then(response => response.text())
        .then(data => {
            // console.log(data);
            if (year != '') {
                factyear.style.display = 'block';
                factTextyear.innerText = data;
            }
        })
        .catch(err => console.log(err));

}



function getdateFactFetch() {
    let date = dateInput.value;
    console.log(date);
    fetch('http://numbersapi.com/' + date + '/date')
        .then(response => response.text())
        .then(data => {
            // console.log(data);
            if (date != '') {
                factdate.style.display = 'block';
                factTextdate.innerText = data;
            }
        })
        .catch(err => console.log(err));

}