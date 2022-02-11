import {FindOperator} from "./FindOperator";
import {ObjectID} from "../driver/mongodb/typings";
import {EqualOperator} from "./EqualOperator";
import {NonNever} from "../common/NonNever";

/**
 * A single property handler for FindOptionsWere.
 */
export type FindOptionsWhereProperty<Property> =
    Property extends Promise<infer I> ? FindOptionsWhereProperty<I> :
    Property extends Array<infer I> ? FindOptionsWhereProperty<I> :
    Property extends Function ? never :
    Property extends Buffer ? Property | FindOperator<Property> :
    Property extends Date ? Property | FindOperator<Property> :
    Property extends ObjectID ? Property | FindOperator<Property> :
    Property extends object ? FindOptionsWhere<Property> | FindOptionsWhere<Property>[] | EqualOperator<Property> | FindOperator<any> | boolean :
    Property | FindOperator<Property>;

/** :
 * Used for find operations.
 */
export type FindOptionsWhere<Entity> = NonNever<{
    [P in keyof Entity]?: FindOptionsWhereProperty<NonNullable<Entity[P]>>;
}>;
