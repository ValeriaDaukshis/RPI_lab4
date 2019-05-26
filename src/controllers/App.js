import AppModel from '../models/AppModel';
// import AppView from '../views/AppView';

export default class Application {
  constructor() {
    this.state = {
      url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ceb1e4eee8704cc5aedb2b87fa3497f3&maxResults=15',
    };
  }

  async start() {
    const model = new AppModel(0);
    let data = await model.getAllData(this.state);
    model.processNewsResources(data);

    document.querySelector('#search-btn')
      .addEventListener('click', () => {
        data = model.findSomeTopics();
      });

    document.querySelector('#load-btn')
      .addEventListener('click', () => {
        model.processNewsResources(data);
      });

    document.querySelector('#Business')
      .addEventListener('click', () => {
        model.LoadByCriterion('business');
      });
  }
}
