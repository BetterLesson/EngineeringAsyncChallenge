import { setup } from 'jest-dev-server';

module.exports = async function globalSetup() {
  await setup({
    command: 'npm run start',
    launchTimeout: 10000,
    port: 8080,
  });
}