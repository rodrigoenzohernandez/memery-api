const imagesController = {
    async getImages(req, res) {

        //allow all origins
        res.setHeader('Access-Control-Allow-Origin', '*');
        
        res.send('OK')

        
    },
  };
  
  module.exports = imagesController;
  