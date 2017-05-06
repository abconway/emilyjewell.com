export default {
    headers: {
    },
    endpoints: {
        'allNewsItems': 'http://localhost:8000/api/news-items',
        'allBioParagraphs': 'http://localhost:8000/api/bio-paragraphs',
    },
    getAllNewsItems() {
        let init = {method: 'GET', headers: this.headers}
        return fetch(this.endpoints.allNewsItems, init)
              .then(response => response.json())
              .catch(error => Object.create({failed: true, reason: error.message}))
    },
    getAllBioParagraphs() {
        let init = {method: 'GET', headers: this.headers}
        return fetch(this.endpoints.allBioParagraphs, init)
              .then(response => response.json())
              .catch(error => Object.create({failed: true, reason: error.message}))
    },
}
