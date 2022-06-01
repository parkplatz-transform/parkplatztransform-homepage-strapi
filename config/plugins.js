module.exports = ({ env }) => ({
    // ...
    wysiwyg: {
    enabled: true,
    resolve: "./src/plugins/wysiwyg", // path to plugin folder
  },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
    'users-permissions': {
        config: {
          jwtSecret: env('JWT_SECRET')
         },
     },
    // ...
});
