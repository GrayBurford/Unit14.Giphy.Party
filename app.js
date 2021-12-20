const gifBody = document.querySelector('#gif-body');
const searchInput = document.querySelector('#search');
const form = document.querySelector('#form');
const deleteButton = document.querySelector('#delete');
const token = 'UtKtfsDbQ3YnRj2oeMwUlMYOhjqgd4Sl'

form.addEventListener('submit', async function (evt) {
    evt.preventDefault();
    if (searchInput.value) {
        console.log(searchInput.value)
        getGIF(searchInput.value);
    }
    searchInput.value = '';
});

async function getGIF (q) {
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', { params : {
        q,
        api_key : token,
        limit : 50
    }})
    const resultsLength = response.data.data.length;
    const randIdx = Math.floor(Math.random() * resultsLength)
    console.log(response.data.data[randIdx].images.original.url)
    const newImg = document.createElement('img');
    newImg.classList.add('gif')
    newImg.src = response.data.data[randIdx].images.original.url;
    gifBody.append(newImg);
}

deleteButton.addEventListener('click', function () {
    gifBody.innerHTML = '';
});