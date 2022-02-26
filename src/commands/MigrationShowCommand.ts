import {createConnection} from "../globals";
import {ConnectionOptionsReader} from "../connection/ConnectionOptionsReader";
import {DataSource} from "../data-source/DataSource";
import * as process from "process";
import * as yargs from "yargs";
import {PlatformTools} from "../platform/PlatformTools";

/**
 * Runs migration command.
 */
export class MigrationShowCommand implements yargs.CommandModule {

  command = "migration:show";
  describe = "Show all migrations and whether they have been run or not";

  builder(args: yargs.Argv) {
    return args
      .option("connection", {
        alias: "c",
        default: "default",
        describe: "Name of the connection on which run a query."
      })
      .option("config", {
        alias: "f",
        default: "ormconfig",
        describe: "Name of the file with connection configuration."
      });
  }

  async handler(args: yargs.Arguments) {
    let connection: DataSource|undefined = undefined;
    try {
      const connectionOptionsReader = new ConnectionOptionsReader({
        root: process.cwd(),
        configName: args.config as any
      });
      const connectionOptions = await connectionOptionsReader.get(args.connection as any);
      Object.assign(connectionOptions, {
        subscribers: [],
        synchronize: false,
        migrationsRun: false,
        dropSchema: false,
        logging: ["query", "error", "schema"]
      });
      connection = await createConnection(connectionOptions);
      await connection.showMigrations();
      await connection.close();

      process.exit(0);

    } catch (err) {
      if (connection) await (connection as DataSource).close();
      PlatformTools.logCmdErr("Error during migration show:", err);
      process.exit(1);
    }
  }

}
