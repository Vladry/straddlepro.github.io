module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://',
  host: '0.0.0.0',
  port: 1337,
  url: 'https://web.straddle.pro/api',
  admin: {
    url: 'https://web.straddle.pro/dashboard',
    auth: {
      secret: 'fc8ab463-da97-43b8-95c2-9cf4c033d15e',
    },
  },

});
