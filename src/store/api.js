var apiBaseUrl = __API__;

export default {
    headers: {
    },
    endpoints: {
        'allNewsItems': apiBaseUrl + '/api/news-items',
        'allBioParagraphs': apiBaseUrl + '/api/bio-paragraphs',
        'allPressShows': apiBaseUrl + '/api/press/shows',
        'allMediaLinks': apiBaseUrl + '/api/media',
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
    getAllPressShows() {
        let init = {method: 'GET', headers: this.headers}
        return fetch(this.endpoints.allPressShows, init)
               .then(response => response.json())
               .catch(error => Object.create({failed: true, reason: error.message}))
    },
}
