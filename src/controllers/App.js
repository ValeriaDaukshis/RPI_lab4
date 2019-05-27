import AppModel from '../models/AppModel';

export default class Application {
  constructor() {
    this.model = null;
  }

  DefaultNews() {
    this.model = new AppModel(0);
  }

  start() {
    this.DefaultNews();
    this.model.getAllData();

    document.querySelector('#search-btn')
      .addEventListener('click', () => {
        this.model.findSomeTopics();
      });

    document.querySelector('#Business')
      .addEventListener('click', () => {
        this.model.LoadByCriterion('business');
      });
    document.querySelector('#Entertainment')
      .addEventListener('click', () => {
        this.model.LoadByCriterion('entertainment');
      });
    document.querySelector('#General')
      .addEventListener('click', () => {
        this.model.LoadByCriterion('general');
      });
    document.querySelector('#Health')
      .addEventListener('click', () => {
        this.model.LoadByCriterion('health');
      });
    document.querySelector('#Science')
      .addEventListener('click', () => {
        this.model.LoadByCriterion('science');
      });

    document.querySelector('#Sports')
      .addEventListener('click', () => {
        this.model.LoadByCriterion('sports');
      });
    document.querySelector('#Technology')
      .addEventListener('click', () => {
        this.model.LoadByCriterion('technology');
      });

    document.querySelector('#Everything')
      .addEventListener('click', () => {
        this.model.LoadByCriterion('');
      });
  }
}
