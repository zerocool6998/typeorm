import {Connection} from "../connection/Connection";
import {DataSourceOptions} from "./DataSourceOptions";

/**
 * DataSource is a pre-defined connection configuration to a specific database.
 * You can have multiple data sources connected (with multiple connections in it),
 * connected to multiple databases in your application.
 *
 * Before, it was called `Connection`, but now `Connection` is deprecated
 * because `Connection` isn't the best name for what it's actually is.
 */
export class DataSource extends Connection {
    constructor(options: DataSourceOptions) {
        super(options)
    }
}
