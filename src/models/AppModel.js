export default class AppModel {
  constructor(loadedNews) {
    this.loadedNews = loadedNews;
    this.data = null;
    this.maxNews = 0;
    this.state = '';
  }


  InitialDataFromSite() {
    const request = new Request(this.state);
    fetch(request)
      .then(response => response.json())
      .then((data) => {
        this.data = data;
        this.loadedNews = 0;
        this.maxNews = 20;
        this.processNewsResources();

        document.querySelector('#load-btn')
          .addEventListener('click', () => {
            this.processNewsResources();
          });
      });
  }

  LoadDataFromSite() {
    const request = new Request(this.state);
    fetch(request)
      .then(response => response.json())
      .then((data) => {
        this.data = data;
        this.loadedNews = 0;
        this.maxNews = 20;
        this.processNewsResources();
      });
  }

  getAllData() {
    this.state = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ceb1e4eee8704cc5aedb2b87fa3497f3&maxResults=20';
    this.InitialDataFromSite();
  }

  processNewsResources() {
    // const content = document.createElement('div');
    const content = document.querySelector('#resources');
    for (let i = this.loadedNews; i < this.loadedNews + 4; i++) {
      if (i <= this.maxNews) {
        content.innerHTML += ` 
                    <h2 align="center">${this.data.articles[i].title}</h2>
                    <img src="${this.data.articles[i].urlToImage}" width="600" height="400"  alt = "picture"><br>
                    <p>${this.data.articles[i].content}
                    <a href="${this.data.articles[i].url}">read more...</a></p>
                                                    `;
      }
    }
    // document.body.appendChild(content);
    this.loadedNews += 4;
  }

  findSomeTopics() {
    document.querySelector('#resources').innerHTML = '';
    const topic = document.querySelector('#search-field').value;
    this.state = `https://newsapi.org/v2/everything?q=${topic}&apiKey=ceb1e4eee8704cc5aedb2b87fa3497f3&maxResults=20`;
    this.LoadDataFromSite();
  }

  LoadByCriterion(topic) {
    document.querySelector('#resources').innerHTML = '';
    if (topic.length !== 0) this.state = `https://newsapi.org/v2/top-headlines?category=${topic}&country=us&apiKey=ceb1e4eee8704cc5aedb2b87fa3497f3&maxResults=20`;
    else this.state = 'https://newsapi.org/v2/top-headlines?&country=us&apiKey=ceb1e4eee8704cc5aedb2b87fa3497f3&maxResults=20';
    this.LoadDataFromSite();
  }
}
