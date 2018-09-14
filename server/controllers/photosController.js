const request = require('request-promise');
const qs = require('querystringify');
const options = { json: true };

const url = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";

exports.allPublicPhotos = (req, res) => {

   return request(url, options)
        .then(photos => {
            const response = photos.items.map(item => {
                  return { url: item.media.m }
            })
            return res.send(response);
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.status);
                console.log('===Response Data=====', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Wrong Format =>', error.message);
            }
        });
};

exports.findPhoto = (req, res) => {
    const urlQueryString = qs.stringify({ tags: req.query.tags }, '&');
    
    return request(url + urlQueryString, options)
        .then(photos => {
            const response = photos.items.map(item => {
                  return { url: item.media.m , tags: item.tags }
            })
            return res.send(response);
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.status);
                console.log('===Response Data=====', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Wrong Format =>', error.message);
            }
        });
};
