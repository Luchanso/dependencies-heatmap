import { DataSource } from "apollo-datasource";
import latestVersion from "@luchanso/latest-version";

export class NpmApi extends DataSource {
  async getLastVersions(dependencies: string[], registry?: string) {
    return Promise.all(
      dependencies.map(async dependency => ({
        latestVersion: await latestVersion(dependency, {
          registryUrl: registry
        }),
        name: dependency
      }))
    );
  }
}
