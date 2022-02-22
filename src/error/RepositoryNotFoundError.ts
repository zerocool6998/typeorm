import {EntityTarget} from "../common/EntityTarget";
import {EntitySchema} from "../entity-schema/EntitySchema";
import {TypeORMError} from "./TypeORMError";
import {ObjectUtils} from "../util/ObjectUtils";

/**
 * Thrown when repository for the given class is not found.
 */
export class RepositoryNotFoundError extends TypeORMError {
    constructor(connectionName: string, entityClass: EntityTarget<any>) {
        super();
        let targetName: string;
        if (entityClass instanceof EntitySchema) {
            targetName = entityClass.options.name;
        } else if (typeof entityClass === "function") {
            targetName = entityClass.name;
        } else if (ObjectUtils.isObject(entityClass) && "name" in (entityClass as any)) {
            targetName = (entityClass as any).name;
        } else {
            targetName = entityClass as any;
        }
        this.message = `No repository for "${targetName}" was found. Looks like this entity is not registered in ` +
            `current "${connectionName}" connection?`;
    }
}
