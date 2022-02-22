import {EntityTarget} from "../common/EntityTarget";
import {EntitySchema} from "../entity-schema/EntitySchema";
import {TypeORMError} from "./TypeORMError";
import {ObjectUtils} from "../util/ObjectUtils";

export class EntityMetadataNotFoundError extends TypeORMError {
    constructor(target: EntityTarget<any>) {
        super();

        this.message = `No metadata for "${this.stringifyTarget(target)}" was found.`;
    }

    private stringifyTarget(target: EntityTarget<any>): string {
        if (target instanceof EntitySchema) {
            return target.options.name;
        } else if (typeof target === "function") {
            return target.name;
        } else if (ObjectUtils.isObject(target) && "name" in (target as any)) {
            return (target as any).name;
        } else {
            return target as any;
        }
    }
}
