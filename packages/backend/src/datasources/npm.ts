import { DataSource } from "apollo-datasource";
import fs from "fs";
import { getTempDirectory } from "../utils/files";

type PackageJson = {
  [key: string]: any;
  dependencies: {
    [key: string]: string;
  };
};

export class NpmApi extends DataSource {
  async getDependencies(name: string) {
    const filepath = getTempDirectory(name);

    const entries = Object.entries(
      (JSON.parse(
        await fs.promises.readFile(filepath, {
          encoding: "utf8"
        })
      ) as PackageJson).dependencies
    ).map(([dependencie, version]) => ({
      dependencie,
      version
    }));

    return entries;
  }
}
