module.exports = {
  installCommand: () => 'bun i',
  publishCommand: () => 'bun publish --tag latest',
  beforeCommitChanges: ({ exec }) => {
    exec('./scripts/bump-jsr-version.cjs');
  },
};
