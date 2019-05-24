import AppModel from '../models/AppModel';
// import AppView from '../views/AppView';

export default class Application {
  constructor() {
    this.state = {
      url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ceb1e4eee8704cc5aedb2b87fa3497f3',
      // url: 'https://newsapi.org/v2/sources?apiKey=ceb1e4eee8704cc5aedb2b87fa3497f3',
    };
  }

  async start() {
    const model = new AppModel(this.state);
    const data = await model.getAllData();
    console.log(data);
    model.processNewsResources(data);
    return data;
  }
}
