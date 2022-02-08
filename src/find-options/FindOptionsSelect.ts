/**
 * Select find options.
 */
export type FindOptionsSelect<Entity> = {
    [P in keyof Entity]?:
        Entity[P] extends (infer R)[] ? FindOptionsSelect<R> | boolean :
        Entity[P] extends object ? FindOptionsSelect<Entity[P]> | boolean :
        boolean;
};

/**
 * Property paths (column names) to be selected by "find" defined as string.
 * Old selection mechanism in TypeORM.
 *
 * @deprecated will be removed in the next version, use FindOptionsSelect type notation instead
 */
export type FindOptionsSelectByString<Entity> = (keyof Entity)[]
