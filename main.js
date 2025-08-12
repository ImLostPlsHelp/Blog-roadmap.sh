fetch('./categories.json').then(response => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error('Something went wrong');
    }
}).then(data => {
    for(const category of data.categories) {
        const categoryElement = document.createElement('li');
        categoryElement.textContent = category;
        document.querySelector('.categories-list').appendChild(categoryElement);
    }
})