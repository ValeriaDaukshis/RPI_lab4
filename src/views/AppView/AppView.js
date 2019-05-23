export default class AppView {
  constructor(titles) {
    this.titles = titles;
  }

  // render() {
  //   const content = document.createElement('ul');
  //   content.innerHTML = this.titles.map(title => `<li>${title}</li>`).join('');
  //
  //   document.body.appendChild(content);
  // }
}

function printNews(news) {
  let count = 5;
  let output = "";
  for (let i in news) {
    output += `
              <h4>${news[i].title}</h4>
              <p>"${news[i].description}"</p>
    
    `;
    count--;
    if (count == i) break;
  }
  return output;
}
