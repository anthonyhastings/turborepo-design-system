module.exports = {
  dependencyTypes: ['dev', 'peer', 'prod'],
  semverRange: '^',
  source: ['package.json', 'apps/*/package.json', 'packages/*/package.json'],
  versionGroups: [
    {
      label:
        'Internal config packages should be pinned to "*" (meaning any version is acceptable)',
      packages: ['**'],
      dependencies: ['config-prettier', 'config-tsconfig', 'eslint-config-tds'],
      dependencyTypes: ['dev'],
      pinVersion: '*',
    },
  ],
};
