const axios = require('axios');

const appid = '71cc4d936b7b20728a11b7f795ac8299';
const donshi = {
    lat: 24.2585728,
    lon: 120.8257659
}
module.exports = async () => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Fengyuan,tw&appid=${appid}`)
    return res.data
  }
  catch (err) {
    console.log('天氣被打爆了QQ');
    console.err(err)
  }
}
  
