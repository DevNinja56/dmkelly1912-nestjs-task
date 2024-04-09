/**
 * ESLint configuration file for a NestJS project.
 * @module .eslintrc.js
 */

module.exports = {
  /**
   * The parser used for parsing the code.
   * @type {string}
   */
  parser: '@typescript-eslint/parser',

  /**
   * Configuration options for the parser.
   * @type {object}
   */
  parserOptions: {
    /**
     * The path to the TypeScript configuration file.
     * @type {string}
     */
    project: 'tsconfig.json',

    /**
     * The root directory for the TypeScript configuration file.
     * @type {string}
     */
    tsconfigRootDir: __dirname,

    /**
     * The source type of the code.
     * @type {string}
     */
    sourceType: 'module',
  },

  /**
   * The plugins used for linting.
   * @type {string[]}
   */
  plugins: ['@typescript-eslint/eslint-plugin'],

  /**
   * The list of ESLint configurations to extend.
   * @type {string[]}
   */
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  /**
   * Indicates that this configuration file is the root configuration file.
   * @type {boolean}
   */
  root: true,

  /**
   * The environment settings for linting.
   * @type {object}
   */
  env: {
    /**
     * Enables Node.js global variables and Node.js scoping.
     * @type {boolean}
     */
    node: true,

    /**
     * Enables Jest global variables and Jest scoping.
     * @type {boolean}
     */
    jest: true,
  },

  /**
   * Patterns to ignore during linting.
   * @type {string[]}
   */
  ignorePatterns: ['.eslintrc.js'],

  /**
   * Rules for linting.
   * @type {object}
   */
  rules: {
    /**
     * Disables the rule that enforces interface names to have a prefix.
     * @type {string}
     */
    '@typescript-eslint/interface-name-prefix': 'off',

    /**
     * Disables the rule that enforces explicit return types for functions and methods.
     * @type {string}
     */
    '@typescript-eslint/explicit-function-return-type': 'off',

    /**
     * Disables the rule that enforces explicit types for module boundaries.
     * @type {string}
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /**
     * Disables the rule that prohibits the use of the "any" type.
     * @type {string}
     */
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
