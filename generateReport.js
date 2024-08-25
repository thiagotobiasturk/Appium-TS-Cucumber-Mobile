import reporter from 'cucumber-html-reporter';

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json', 
  output: 'reports/cucumber_report.html', 
    reportSuiteAsScenarios: true,
  screenshotsDirectory: 'reports/screenshots', 
    storeScreenshots: true,
  screenshotPath: 'reports/screenshots', 
  launchReport: true,
  
    
  
};

reporter.generate(options);
