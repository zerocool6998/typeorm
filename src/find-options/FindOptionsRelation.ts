/**
 * Relations find options.
 */
export type FindOptionsRelation<Entity> = {
    [P in keyof Entity]?:
        Entity[P] extends (infer R)[] ? FindOptionsRelation<R> | boolean :
        Entity[P] extends object ? FindOptionsRelation<Entity[P]> | boolean :
        boolean;
};

/**
 * Relation names to be selected by "relation" defined as string.
 * Old relation mechanism in TypeORM.
 *
 * @deprecated will be removed in the next version, use FindOptionsRelation type notation instead
 */
export type FindOptionsRelationByString = string[]
