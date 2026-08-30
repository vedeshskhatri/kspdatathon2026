#!/usr/bin/env node
// build-appsail.js — sets APPSAIL_BUILD=1 then runs `next build`
// Used by `npm run build:appsail` so next.config.js enables output:'standalone'
// without needing the cross-env package.
const { spawnSync } = require('child_process');

process.env.APPSAIL_BUILD = '1';

console.log('[build-appsail] Building with APPSAIL_BUILD=1 (standalone output enabled)');

const result = spawnSync('node', ['node_modules/.bin/next', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, APPSAIL_BUILD: '1' },
  cwd: __dirname,
  shell: false,
});

process.exit(result.status ?? 1);
