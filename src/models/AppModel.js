export default class AppModel {
  constructor(loadedNews) {
    this.loadedNews = loadedNews;
  }

  async getAllData(state) {
    const { url } = state;
    const responce = await fetch(url);
    const data = responce.json();
    // this.maxNews = data.sources.length;
    return data;
  }

  async processNewsResources(data) {
    // const content = document.createElement('div');
    const content = document.querySelector('#resources');
    for (let i = this.loadedNews; i < this.loadedNews + 4; i++) {
      content.innerHTML += ` 
                    <h2 align="center">${data.articles[i].title}</h2>
                    <img src="${data.articles[i].urlToImage}" width="600" height="400"  alt = "picture"><br>
                    <p>${data.articles[i].content}
                    <a href="${data.articles[i].url}">read more...</a></p>
                                                    `;
    }
    // document.body.appendChild(content);
    this.loadedNews += 4;
    return data;
  }

  async findSomeTopics() {
    document.querySelector('#resources').innerHTML = '';
    console.log();
    const topic = document.querySelector('#search-field').value;
    this.state = `https://newsapi.org/v2/everything?q=${topic}&apiKey=ceb1e4eee8704cc5aedb2b87fa3497f3&maxResults=15`;

    const request = new Request(this.state);
    fetch(request)
      .then(response => response.json())
      .then((data) => {
        this.loadedNews = 0;
        this.processNewsResources(data);
        document.querySelector('#load-btn')
          .addEventListener('click', () => {
            this.processNewsResources(data);
          });
        return data;
      });
  }
}
