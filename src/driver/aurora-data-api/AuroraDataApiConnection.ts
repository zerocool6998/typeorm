import {AuroraDataApiQueryRunner} from "./AuroraDataApiQueryRunner";
import {DataSource} from "../../data-source/DataSource";
import {DataSourceOptions, QueryRunner} from "../..";
import {ReplicationMode} from "../types/ReplicationMode";

/**
 * Organizes communication with MySQL DBMS.
 */
export class AuroraDataApiConnection extends DataSource {
    queryRunnter: AuroraDataApiQueryRunner;

    constructor(options: DataSourceOptions, queryRunner: AuroraDataApiQueryRunner) {
        super(options);
        this.queryRunnter = queryRunner;
    }

    public createQueryRunner(mode: ReplicationMode): QueryRunner {
        return this.queryRunnter;
    }

}
