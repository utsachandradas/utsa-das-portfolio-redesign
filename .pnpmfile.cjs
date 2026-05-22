module.exports = {
  hooks: {
    readPackage(pkg) {
      // Handle pnpm field migration
      if (pkg.pnpm) {
        if (pkg.pnpm.patchedDependencies) {
          pkg.patchedDependencies = pkg.pnpm.patchedDependencies;
        }
        if (pkg.pnpm.overrides) {
          pkg.pnpm.overrides = pkg.pnpm.overrides;
        }
      }
      return pkg;
    },
  },
};
