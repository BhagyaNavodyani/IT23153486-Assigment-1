##Singlish to Sinhala Tranlate 

# Playwright Test Suite - IT23153486

This is a Playwright automation testing project for the **Swift Translator** website (https://www.swifttranslator.com/). It tests if the translation feature works correctly and handles different types of inputs properly.

## What's Being Tested

- **UI Tests** - Makes sure the output updates in real-time when you type
- **Edge Cases** - Tests weird inputs like chemical formulas that might break things
- **Translation Tests** - Checks if Sinhala translations are correct for different sentences and phrases

## Setup Requirements

You'll need to have these things installed first:

- **Node.js** (version 14+) - [get it here](https://nodejs.org/)
- **npm** (it comes with Node.js)
- **Git** - [download it](https://git-scm.com/)







---

## How to Get Started

### Clone it
```bash
git clone <repository-url> #repo url have inside the IT23153486.txt file
cd IT23153486
```

### Install dependencies
```bash
npm install
```

That's it! It'll download Playwright and all the other stuff you need.








## Running the Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in UI Mode (Interactive)

## Running Tests

Run everything:
```bash
npx playwright test
```

Want to see it run? Use the UI mode:
```bash
npx playwright test --ui
```

Or run in a normal browser window:
```bash
npx playwright test --headed
```

Run just one test file:
```bash
npx playwright test tests/example.spec.ts
```

Run only tests that match a pattern (like all Pos_Fun tests):
```bash
npx playwright test -g "Pos_Fun"
```

Debug mode if something's broken:
```bash
npx playwright test --reporter=html
```

### View HTML Report

```bash
npx playwright show-report
```





This opens an interactive HTML report in your default browser showing:
## Check Your Test Results

After running tests, you can view a nice HTML report:

```bash
npx playwright show-report
## Project Layout

```
IT23153486/
├── tests/
│   └── example.spec.ts          # All the test cases
├── playwright-report/           # Generated test reports
├── package.json                 # Project settings
├── playwright.config.ts         # Playwright config
└── README.md                    # This file
```

The config runs tests in Chromium and generates HTML reports automatically.
**Solution:** Run:
```bash
npx playwright install
```

### Issue: Permission denied errors

**Solution:** On macOS/Linux, ensure proper permissions:
```bash
chmod +x node_modules/.bin/playwright
```

---

## Git Repository

## Troubleshooting

Tests won't connect to the website?
- Make sure you have internet connection, it needs to reach https://www.swifttranslator.com/

Browser not installed?
```bash
npx playwright install
```

Something weird happening?
- Try restarting your terminal or even restarting your computer
## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/intro)
- [Test Configuration Guide](https://playwright.dev/docs/test-configuration)
- [Best Practices](https://playwright.dev/docs/best-practices)


