module.exports = {
  installCommand: () => 'bun i',
  publishCommand: () => 'bun publish --tag latest',
  beforeCommitChanges: ({ nextVersion, dir }) => {
    console.log('next version :::', nextVersion);
    console.log('jsr:::', dir('jsr.json').read());
    // update jsr.json version key to be nextVersion
    dir('jsr.json').update((content) => {
      console.log('jsr.json content :::', content);
      const json = JSON.parse(content);
      json.version = nextVersion;
      return JSON.stringify(json, null, 2);
    });
  },
};
