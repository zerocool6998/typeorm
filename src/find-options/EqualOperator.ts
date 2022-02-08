import {FindOperator} from "./FindOperator";

export class EqualOperator<T> extends FindOperator<T> {
    constructor(value: T | FindOperator<T>) {
        super("equal", value);
    }
}
