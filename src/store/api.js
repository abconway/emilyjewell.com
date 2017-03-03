export default {
  headers: {
  },

  endpoints: {
    'allListItems': 'http://localhost:8000/api/news-items',
  },

  getAllListItems() {
      let init = {method: 'GET', headers: this.headers}
      return fetch(this.endpoints.allListItems, init)
              .then(response => response.json())
              .catch(error => Object.create({failed: true, reason: error.message}))
  },
}