import * as dotenv from 'dotenv';

dotenv.config();

/**
 * Retrieves the configuration values for the application.
 * @returns {Object} The configuration object.
 */
export default () => ({
  /**
   * The port number on which the server will listen.
   * Defaults to 3001 if not provided.
   * @type {number}
   */
  PORT: +process.env.PORT || 3001,

  /**
   * The MongoDB configuration options.
   * @type {Object}
   */
  MONGO: {
    /**
     * The MongoDB connection URL.
     * Defaults to an empty string if not provided.
     * @type {string}
     */
    URL: process.env.MONGO_URL || '',

    /**
     * Whether or not to enable logging.
     * @type {boolean}
     */
    logging: false,

    /**
     * Whether or not to synchronize the database schema.
     * @type {boolean}
     */
    synchronize: true,

    /**
     * Whether or not to run migrations.
     * @type {boolean}
     */
    migrationsRun: false,

    /**
     * Whether or not to automatically load entities.
     * @type {boolean}
     */
    autoLoadEntites: true,

    /**
     * The paths to the entity files.
     * @type {string[]}
     */
    entities: ['dist/src/modules/**/entities/*.entity{.ts,.js}'],

    /**
     * The paths to the migration files.
     * @type {string[]}
     */
    migrations: ['dist/db/migrations/*.js'],
  },

  /**
   * The JWT (JSON Web Token) configuration options.
   * @type {Object}
   */
  JWT: {
    /**
     * The secret token used for signing JWTs.
     * Defaults to an empty string if not provided.
     * @type {string}
     */
    JWT_SECRET_TOKEN: process.env.JWT_SECRET_TOKEN || '',

    /**
     * The expiration time for JWTs.
     * Defaults to an empty string if not provided.
     * @type {string}
     */
    JWT_TOKEN_EXPIRATION: process.env.JWT_TOKEN_EXPIRATION || '',

    /**
     * The secret token used for signing refresh tokens.
     * Defaults to an empty string if not provided.
     * @type {string}
     */
    JWT_SECRET_REFRESH_TOKEN: process.env.JWT_SECRET_REFRESH_TOKEN || '',

    /**
     * The expiration time for refresh tokens.
     * Defaults to an empty string if not provided.
     * @type {string}
     */
    JWT_REFRESH_TOKEN_EXPIRATION:
      process.env.JWT_REFRESH_TOKEN_EXPIRATION || '',
  },

  /**
   * The email configuration options.
   * @type {Object}
   */
  MAIL: {
    /**
     * The email server.
     * Defaults to an empty string if not provided.
     * @type {string}
     */
    SERVER: process.env.MAIL_SERVER || '',

    /**
     * The email host.
     * Defaults to an empty string if not provided.
     * @type {string}
     */
    HOST: process.env.MAIL_HOST || '',

    /**
     * The email port number.
     * Defaults to 0 if not provided.
     * @type {number}
     */
    PORT: +process.env.MAIL_PORT || '',

    /**
     * The email address.
     * Defaults to an empty string if not provided.
     * @type {string}
     */
    EMAIL: process.env.EMAIL || '',

    /**
     * The email password.
     * Defaults to an empty string if not provided.
     * @type {string}
     */
    PASSWORD: process.env.PASSWORD || '',
  },
});
