// const fs = require('fs');
const cartoons = {
  Tools:
  [
    {
      Tool: 'Disque',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      Tool: 'Google Calendder  renuka',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      Tool: 'github',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      Tool: 'github',
      photo: 'https://pbs.twimg.com/profile_images/3424509849/bfa1b9121afc39d1dcdb53cfc423bf12.jpeg',
    },
    {
      Tool: 'github',
      photo: 'https://pbs.twimg.com/profile_images/664886718559076352/M00cOLrh.jpg',
    },
    {
      Tool: 'github',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      Tool: 'github',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      Tool: 'github',
      photo: 'https://pbs.twimg.com/profile_images/3424509849/bfa1b9121afc39d1dcdb53cfc423bf12.jpeg',
    },
    {
      Tool: 'github',
      photo: 'https://pbs.twimg.com/profile_images/664886718559076352/M00cOLrh.jpg',
    },
    {
      Tool: 'github',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },

  ],
};
function getTool(req, res) {
  res.status(200).json(cartoons);
  // console.log('hello world');

  // fs.readFile('db.json', 'utf-8', (err, data) => {
  //   if (err) throw err;
  //   res.send(JSON.parse(data));
  // });
}
module.exports = {
  getTool,
};
