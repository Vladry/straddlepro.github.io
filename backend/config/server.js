module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  url: 'http://web.straddle.pro/admin',
  admin: {
    url: 'http://web.straddle.pro/dashboard',
    auth: {
      secret: 'fc8ab463-da97-43b8-95c2-9cf4c033d15e',
    },
  },

});
