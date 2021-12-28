module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d7c66e88eb75fdfa9b3d2570398fa7f'),
  },
});
