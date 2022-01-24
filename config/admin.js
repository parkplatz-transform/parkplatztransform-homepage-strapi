module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c685b6a848b6178986d8a270340ded70'),
  },
});
