const cheerio = require("cheerio");

const findImg = (dom, callback) => {
  let $ = cheerio.load(dom);
  $(".foc_list .img_box img").each((i, elem) => {
    let imgSrc = elem.attribs.src;
    callback(imgSrc, i);
  });
};

module.exports.findImg = findImg;
