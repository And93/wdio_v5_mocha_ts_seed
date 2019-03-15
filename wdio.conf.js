exports.config = {

    specs: [
        './src/tests/**/*.ts'
    ],
    exclude: [],

    maxInstances: 10,
    capabilities: [{
        maxInstances: 10,
        browserName: 'chrome'
    }],

    execArgv: [],
    deprecationWarnings: false,

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',

    // use 'silent' level to disable logger
    logLevels: {
        webdriver: 'info',
        'wdio-applitools-service': 'info'
    },

    outputDir: 'logs',
    bail: 0,
    baseUrl: 'https://webdriver.io/',

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    runner: 'local',
    sync: true,
    services: ['selenium-standalone'],
    //
    // Add files to watch (e.g. application code or page objects) when running `wdio` command
    // with `--watch` flag (globbing is supported).
    filesToWatch: [
        // e.g. rerun tests if I change my application code
        // './app/**/*.js'
    ],
    framework: 'mocha',
    specFileRetries: 1,
    reporters: ['dot'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: [
            'ts-node/register',
            'tsconfig-paths/register'
        ]
    },

    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
    },
    /**
     * Gets executed just before initialising the webdriver session and src framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: function (config, capabilities, specs) {
    },
    /**
     * Gets executed before src execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
    },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    beforeSuite: function (suite) {
    },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    beforeHook: function () {
    },
    /**
     * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
     * afterEach in Mocha)
     */
    afterHook: function () {
    },
    /**
     * Function to be executed before a src (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test src details
     */
    beforeTest: function (test) {
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    beforeCommand: function (commandName, args) {
    },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    afterCommand: function (commandName, args, result, error) {
    },
    /**
     * Function to be executed after a src (in Mocha/Jasmine) or a step (in Cucumber) ends.
     * @param {Object} test src details
     */
    afterTest: function (test) {
    },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    afterSuite: function (suite) {
    },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the src.
     * @param {Number} result 0 - src pass, 1 - src fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after: function (result, capabilities, specs) {
    },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    afterSession: function (config, capabilities, specs) {
    },
    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing src results
     */
    onComplete: function (exitCode, config, capabilities, results) {
    },
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    onReload: function(oldSessionId, newSessionId) {
    }
};