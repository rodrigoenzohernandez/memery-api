const imagesController = {
  async getImages(req, res) {
    //allow all origins
    res.setHeader("Access-Control-Allow-Origin", "*");
    const imagesData = require('../../data/data.json');
    res.send(imagesData);

  },
};

module.exports = imagesController;
