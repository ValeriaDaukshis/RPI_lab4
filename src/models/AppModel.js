export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  async getClipNames() {
    const { url } = this.state;

    const responce = await fetch(url);
    const data = await responce.json();
    // $("#class").html(output)
    return data;
  }
}
