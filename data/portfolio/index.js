import fm from 'front-matter';

function createPortfolio() {
  const portfolioItems = [];

  portfolioList.forEach(item => {
    let itemData = require(`./${item}.md`);
    let fmData;
    let newItem;

    fmData = fm(itemData.default);

    newItem = fmData.attributes;
    newItem.id = item;
    newItem.body = fmData.body;

    portfolioItems.push(newItem);
  });

  return portfolioItems;
}

export default createPortfolio();
