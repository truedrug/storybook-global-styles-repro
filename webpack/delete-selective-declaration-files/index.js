"use strict";

const deleteFilesAndDirectories = require("./delete-files-and-dirs");

class DeleteSelectiveDeclarationFiles {
  constructor(paths) {
    this.paths = paths;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap("DeleteSelectiveDeclarationFiles", () => {
      deleteFilesAndDirectories("lib", this.paths);
    });
  }
}

module.exports = DeleteSelectiveDeclarationFiles;
