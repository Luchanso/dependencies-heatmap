import { DataSource } from "apollo-datasource";
import simplegit from "simple-git/promise";
import fs from "fs";
import rimraf from "rimraf";

const TEMP_DIRECTORY = process.env.TEMP_DIRECTORY || "./temp";

export class GitApi extends DataSource {
  git: simplegit.SimpleGit = simplegit();

  update({ url, name }) {
    const filepath = `${TEMP_DIRECTORY}/${name}`;

    if (!fs.existsSync(filepath)) {
      this.git.clone(url, filepath, ["--depth", "1"]);
    } else {
      // TODO: temporial hack, remove it in feature
      rimraf(filepath, console.log);
      this.git.clone(url, filepath, ["--depth", "1"]);
    }
  }
}

const a = new GitApi();
a.update({
  url: "https://github.com/Luchanso/work-tools",
  name: "work-tools"
});
