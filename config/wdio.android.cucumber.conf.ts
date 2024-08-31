import { join } from 'node:path';
import { config as baseConfig } from './wdio.shared.local.appium.conf.js';
import path from 'path';
import url from 'node:url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// We need to remove the `mochaOpts` from the `baseConfig` to have all
// Mocha references removed
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
    // By default we use the Mocha framework, see the `wdio.shared.conf.ts` which is imported by `./wdio.shared.local.appium.conf.js`. For Cucumber we need to "redefine" the framework
    framework: 'cucumber',

    cucumberOpts: {
        require: [
            path.join(__dirname, '..', 'tests', 'steps', 'login_demo_app_steps.ts'),
            path.join(__dirname, '..', 'tests','helpers', 'hooks.ts'), 
        ],
        format: ['json:./reports/cucumber_report.json'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        timeout: 20000,
        ignoreUndefinedDefinitions: false,
        scenarioLevelReporter: false
    },
    // ============
    // Capabilities
    // ============
    capabilities: [
        {
            platformName: 'Android',
            // maxInstances: 1,
            'appium:deviceName': 'emulator-5554',
            'appium:platformVersion': '12.0',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(
                process.cwd(),
                'apps/android',
                
                'android.wdio.native.app.v1.0.8.apk',
            ),
            'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
            'appium:newCommandTimeout': 240,
        },
    ],
};

