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

fetch('./articles.json').then(response => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error('Something went wrong');
    }
}).then(data => {
    for(const article of data.articles) {
        const cardElement = document.createElement('div');
        cardElement.className = 'article-card';
        cardElement.innerHTML = `
            <p><strong>${article.title}</strong></h2>
            <p>${article.description}</p>
            <p>${article.date} - ${article.category}`

        document.querySelector('.articles').appendChild(cardElement);
    }
})