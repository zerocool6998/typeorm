import {FindOperator} from "./FindOperator";
import {ObjectID} from "../driver/mongodb/typings";
import {EqualOperator} from "./EqualOperator";

/**
 * Used for find operations.
 *
 * todo: rename to FindOptionsWhere
 */
export type FindConditions<Entity> = {
    [P in keyof Entity]?:
        Entity[P] extends Promise<infer U> ? (
            U extends Array<infer I> ? (
                I extends Function ? never
                : I extends Buffer ? I | FindOperator<I>
                : I extends Date ? I | FindOperator<I>
                : I extends ObjectID ? I | FindOperator<I>
                : I extends object ? FindConditions<I> | FindConditions<I>[] | EqualOperator<I> | FindOperator<any> | boolean
                : I[] | FindOperator<I>
            )
            : U extends Function ? never
            : U extends Buffer ? U | FindOperator<U>
            : U extends Date ? U | FindOperator<U>
            : U extends ObjectID ? U | FindOperator<U>
            : U extends object ? FindConditions<U> | FindConditions<U>[] | EqualOperator<U> | FindOperator<any> | boolean
            : U | FindOperator<U>
        )
        : Entity[P] extends Array<infer I> ? (
              I extends Function ? never
            : I extends Buffer ? I | FindOperator<I>
            : I extends Date ? I | FindOperator<I>
            : I extends ObjectID ? I | FindOperator<I>
            : I extends object ? FindConditions<I> | FindConditions<I>[] | EqualOperator<I> | FindOperator<any> | boolean
            : I[] | FindOperator<I>
        )
        : Entity[P] extends Function ? never
        : Entity[P] extends Buffer ? Entity[P] | FindOperator<Entity[P]>
        : Entity[P] extends Date ? Entity[P] | FindOperator<Entity[P]>
        : Entity[P] extends ObjectID ? Entity[P] | FindOperator<Entity[P]>
        : Entity[P] extends object ? FindConditions<Entity[P]> | FindConditions<Entity[P]>[] | EqualOperator<Entity[P]> | FindOperator<any> | boolean
        : Entity[P] | FindOperator<Entity[P]>;
};
