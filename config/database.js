module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdmjmb2en0hihpjvtl80-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'gauitarla'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'sWz7VkHPwq2pX5V7WK0ksmfbaQuC8CSN'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
