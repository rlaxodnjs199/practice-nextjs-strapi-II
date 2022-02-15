module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '082a6349d940d83a3b902f0a50a426e1'),
  },
});
