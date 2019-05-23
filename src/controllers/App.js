import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor() {
    this.state = {
      url: 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-23&sortBy=publishedAt&apiKey=ceb1e4eee8704cc5aedb2b87fa3497f3',
    };
  }

  async start() {
    const model = new AppModel(this.state);
    const data = await model.getClipNames();
    console.log(data);
  }
}
