import {FindOperator} from "./FindOperator";
import {ObjectID} from "../driver/mongodb/typings";
import {EqualOperator} from "./EqualOperator";

/**
 * A single property handler for FindOptionsWere.
 */
export type FindConditionsProperty<Property> =
      Property extends Promise<infer I> ? FindConditionsProperty<I>
    : Property extends Array<infer I> ? FindConditionsProperty<I>
    : Property extends Function ? never
    : Property extends Buffer ? Property | FindOperator<Property>
    : Property extends Date ? Property | FindOperator<Property>
    : Property extends ObjectID ? Property | FindOperator<Property>
    : Property extends object ? FindConditions<Property> | FindConditions<Property>[] | EqualOperator<Property> | FindOperator<any> | boolean
    : Property | FindOperator<Property>;

/**
 * Used for find operations.
 */
export type FindConditions<Entity> = {
    [P in keyof Entity]?: FindConditionsProperty<NonNullable<Entity[P]>>;
};
