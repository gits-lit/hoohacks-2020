let apiurl = 'http://slearnapi.herokuapp.com/';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  apiurl = 'http://b9391cf3.ngrok.io';
}

export default {
  API_URL: apiurl
}
