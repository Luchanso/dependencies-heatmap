import { DataSource } from "apollo-datasource";
import simplegit from "simple-git/promise";
import fs from "fs";
import del from "del";
import { getTempDirectory } from "../utils/files";

export class GitApi extends DataSource {
  private git: simplegit.SimpleGit = simplegit();

  async update({ url, name }) {
    const filepath = getTempDirectory(name);

    // TODO: Обновлять репозиторий и хранить 30 последних коммитов,
    // а не удалять и скачивать заново
    if (fs.existsSync(filepath)) {
      await del(filepath);
    }

    return this.git.clone(url, filepath, ["--depth", "1"]);
  }
}

// const a = new GitApi();
// a.update({
//   url: "https://github.com/Luchanso/work-tools",
//   name: "work-tools"
// });
