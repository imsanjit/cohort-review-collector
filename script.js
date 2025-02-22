const btntheme = document.getElementById('theme-button')
const btnSubmit = document.getElementById('submit-button')
const userInputText = document.getElementById('userInput')
const reviewList = document.getElementById('reviewList')
const btnDeleteAllReviews = document.getElementById('btnDeleteAllReviews')


//for theme color 
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

btntheme.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor;
    if (!currentColor || currentColor == 'rgb(223, 249, 251)') {
        changeBackgroundColor('#636e72');
        btntheme.innerText = 'Light Mode';
    } else {
        changeBackgroundColor('rgb(223, 249, 251)');
        btntheme.innerText = 'Dark Mode';
    }
})


//for submiting review
btnSubmit.addEventListener('click', () => {

    const userValue = userInputText.value;
    if (!userValue) {
        alert('Enter something')
    } else {
        const li = document.createElement('li');
        li.innerText = userValue;
        reviewList.prepend(li);
        userInputText.value = '';

        const btnDelete = document.createElement('button');
        btnDelete.innerText = "X";
        li.appendChild(btnDelete);

        btnDeleteAllReviews.addEventListener('click', () => {
            reviewList.innerHTML = '';
        })

        btnDelete.addEventListener('click', () => {
            li.remove();
            
        })


    }

})
