export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  getTitles(data) {
    return data.articles.map(title2 => title2.title);
  }


  async getAllData() {
    const { url } = this.state;

    const responce = await fetch(url);
    const data = responce.json();
    // const newsTitles = AppModel.getTitles(data);
    return data;
  }

  async processNewsResources(data) {
    // for (let i = 0; i < 3; i++) {
    const content = document.createElement('div');
    for (let i = 0; i < 3; i++) {
      content.innerHTML += ` 
                    <p>${data.articles[i].title}</p>
                    <img src="${data.articles[i].urlToImage}">
                    <a href="${data.articles[i].url}">read more...</a>
                                                    `;
    }
    document.body.appendChild(content);
  }
}
