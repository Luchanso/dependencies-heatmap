import { DataSource } from "apollo-datasource";
import simplegit from "simple-git/promise";

// const git = simplegit("");

export class GitApi extends DataSource {
  git: simplegit.SimpleGit = simplegit();

  clone() {
    this.git.clone('https://github.com/Luchanso/work-tools', './', ['--depth', '1']);
  }
}
