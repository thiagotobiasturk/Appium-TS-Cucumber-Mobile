import { Before, After, Status } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
import { browser } from '@wdio/globals';

Before(async function () {
    // Opcional: reiniciar la sesión antes de cada escenario
    await browser.reloadSession();
});

After(async function (scenario) {
    if (scenario.result && scenario.result.status === Status.FAILED) {
        const sanitizedScenarioName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
        const screenshotPath = path.join('reports', 'screenshots', `${sanitizedScenarioName}.png`);
        const screenshot = await browser.takeScreenshot();

        const dir = path.dirname(screenshotPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(screenshotPath, Buffer.from(screenshot, 'base64'));
    }
});
