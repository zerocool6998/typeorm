/**
 * Order by find options.
 */
export type FindOptionsOrder<Entity> = {
    [P in keyof Entity]?:
        Entity[P] extends (infer R)[] ? FindOptionsOrder<R> :
        Entity[P] extends Function ? never :
        Entity[P] extends object ? FindOptionsOrder<Entity[P]> :
        FindOptionsOrderValue
};

/**
 * Value of order by in find options.
 */
export type FindOptionsOrderValue = "ASC" | "DESC" | "asc" | "desc" | 1 | -1 | {
    direction?: "asc"|"desc"|"ASC"|"DESC";
    nulls?: "first"|"last"|"FIRST"|"LAST";
};
