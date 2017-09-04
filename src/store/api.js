var apiBaseUrl = __API__;

export default {
    headers: {
    },
    endpoints: {
        'allNewsItems': apiBaseUrl + '/api/news-items',
        'allBioParagraphs': apiBaseUrl + '/api/bio-paragraphs',
        'allPressShows': apiBaseUrl + '/api/press/shows',
        'allMediaItems': apiBaseUrl + '/api/media-items',
        'allMediaItems': apiBaseUrl + '/api/media-items',
        'resume': apiBaseUrl + '/api/resumes/',
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
    getAllMediaItems() {
        let init = {method: 'GET', headers: this.headers}
        return fetch(this.endpoints.allMediaItems, init)
              .then(response => response.json())
              .catch(error => Object.create({failed: true, reason: error.message}))
    },
    getResume() {
        let init = {method: 'GET', headers: this.headers}
        return fetch(this.endpoints.resume, init)
              .then(response => response.json())
              .catch(error => Object.create({failed: true, reason: error.message}))
    },
}
