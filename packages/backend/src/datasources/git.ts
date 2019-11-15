import { DataSource } from "apollo-datasource";
import btoa from "btoa";
import fs from "fs";
import simplegit from "simple-git/promise";
import { promisify } from "util";
import { getTempDirectory } from "../utils/files";

const fsExists = promisify(fs.exists);
const fsReadFile = promisify(fs.readFile);

type GitConfig = {
  [key: string]: string;
};

type PackageJson = {
  dependencies: {
    [key: string]: string;
  };
  peerDependencies: {
    [key: string]: string;
  };
  devDependencies: {
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
    console.log('Start worker:', name);

    // TODO: Обновлять репозиторий и хранить 30 последних коммитов,
    // а не удалять и скачивать заново
    if (await fsExists(filepath)) {
      console.log('Not clonned', name);
      return Promise.resolve();
    }

    console.log('Start clone:', name);
    return this.git.clone(url, filepath, ["--depth", "1"]);
  }

  async getPackageJsonDependencies(name: string) {
    console.log('-'.repeat(80));
    console.log(`Request start, params: { name: ${name}}`);

    const filepath = getTempDirectory(name);

    console.log(`Filepath: ${filepath}`);

    const packageJson: PackageJson = JSON.parse(
      (await fsReadFile(`${filepath}/package.json`)).toString()
    );

    console.log(`packageJSON: ${JSON.stringify(packageJson, null, 2)}`);

    const allDependencies = {
      ...(packageJson.dependencies || {}),
      ...(packageJson.devDependencies || {}),
      ...(packageJson.peerDependencies || {}),
    };

    return Object.entries(allDependencies).map(item => ({
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
