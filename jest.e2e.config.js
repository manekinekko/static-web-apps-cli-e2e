module.exports = {
  verbose: true,
  preset: 'jest-playwright-preset',
  testMatch: ['**/?(*.)+(spec).js'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./jest.e2e.setup.js'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './test-results/',
        filename: 'report.html',
        expand: true
      }
    ]
  ]
}