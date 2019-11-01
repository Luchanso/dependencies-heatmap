import { DataSource } from "apollo-datasource";
import simplegit from "simple-git/promise";
import fs from "fs";
import del from "del";
import btoa from "btoa";
import { getTempDirectory } from "../utils/files";
import { promisify } from "util";

const fsExists = promisify(fs.exists);
const fsReadFile = promisify(fs.readFile);

type GitConfig = {
  [key: string]: string;
};

type PackageJson = {
  dependencies: {
    [key: string]: string;
  };
};

export class GitApi extends DataSource {
  private git: simplegit.SimpleGit = simplegit();

  constructor(gitConfig?: GitConfig) {
    super();

    if (gitConfig) {
      Object.entries(gitConfig).forEach(([key, value]) =>
        this.git.addConfig(key, value)
      );
    }
  }

  async update(url, name) {
    const filepath = getTempDirectory(name);

    // TODO: Обновлять репозиторий и хранить 30 последних коммитов,
    // а не удалять и скачивать заново
    if (await fsExists(filepath)) {
      await del(filepath);
    }

    return this.git.clone(url, filepath, ["--depth", "1"]);
  }

  async getPackageJsonDependencies(name: string) {
    const filepath = getTempDirectory(name);

    const packageJson: PackageJson = JSON.parse(
      (await fsReadFile(`${filepath}/package.json`)).toString()
    );

    return Object.entries(packageJson.dependencies).map(item => ({
      name: item[0],
      version: item[1]
    }));
  }

  async getDependencies(urls: string[]) {
    const dependencies = await Promise.all(
      urls.map(async url => {
        const hash = btoa(url);
        await this.update(url, hash);

        return {
          gitUrl: url,
          dependencies: await this.getPackageJsonDependencies(hash)
        };
      })
    );

    return dependencies;
  }
}

// const a = new GitApi();
// a.update({
//   url: "https://github.com/Luchanso/work-tools",
//   name: "work-tools"
// });
