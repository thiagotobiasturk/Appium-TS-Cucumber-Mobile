import { join } from 'node:path';
import { config as baseConfig } from './wdio.shared.local.appium.conf.js';
import path from 'path';
import url from 'node:url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Remove the `mochaOpts` from the `baseConfig` to clear Mocha references
const { mochaOpts, ...cleanBaseConfig } = baseConfig;

export const config: WebdriverIO.Config = {
    ...cleanBaseConfig,

    // ============
    // Specs
    // ============
    specs: [
        '../tests/features/**/*.feature',
    ],

    // ============
    // Framework
    // ============
    framework: 'cucumber',
    cucumberOpts: {
        require: [path.join(__dirname, '..', 'tests', 'steps', 'login_faster_steps.ts')],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        timeout: 20000,
        ignoreUndefinedDefinitions: false,
        scenarioLevelReporter: false,
    },

    // ============
    // Capabilities
    // ============
    capabilities: [
        {
            platformName: 'iOS',
            'appium:deviceName': 'iPhone Simulator',
            'appium:platformVersion': '16.2',  // Adjust to the iOS version you are targeting
            'appium:automationName': 'XCUITest',
            'appium:orientation': 'PORTRAIT',
            'appium:app': join(
                process.cwd(),
                'apps/ios',
                'YourApp.ipa',
            ),
            'appium:newCommandTimeout': 240,
            'appium:udid': 'your-device-udid', // Optional: specify a device UDID if running on a real device
            'appium:bundleId': 'com.yourcompany.yourapp', // Optional: bundle ID of the app you are testing
        },
    ],

    // ============
    // Reporters
    // ============
    reporters: [
        'spec', // Default reporter for test results in the console
        [ 'json', {
            outputDir: './reports', // Directory where the JSON report will be saved
            outputFileFormat: function (options) {
                return `results-${new Date().toISOString()}.json`; // Custom file name format
            }
        }]
    ],

    // ============
    // Other configurations
    // ============
    // Add other configurations as needed, such as log level, base URL, etc.
};
