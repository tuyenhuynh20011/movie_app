const userToken = require('../data/userToken.json')


const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (bearerHeader) {
      const bearer = bearerHeader.split(' ')[1];
        if(userToken.find(o => o.token === bearer))
        {   
            next();
        }
        else{
              return res.status(401).send('Unauthorized')
        }
    }
    else {
        return res.status(401).send('Unauthorized')
    }
    
  }
  module.exports =verifyToken;