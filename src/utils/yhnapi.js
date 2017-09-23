const axios = require('axios');



module.exports = {
    getNewStories:function () {
        let FEED_URL = "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";
        return axios.get(FEED_URL).then(function (response) {
            return response;
        })
    }
}