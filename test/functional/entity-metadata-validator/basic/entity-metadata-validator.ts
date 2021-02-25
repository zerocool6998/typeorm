import "reflect-metadata";
import {Connection} from "../../../../src/connection/Connection";
import {expect} from "chai";

describe("entity-metadata-validator", () => {

    it("should throw error if relation count decorator used with ManyToOne or OneToOne relations", () => {

        expect(() => {
            new Connection({ // dummy connection options, connection won't be established anyway
                type: "mysql",
                host: "localhost",
                username: "test",
                password: "test",
                database: "test",
                entities: [__dirname + "/entity/*{.js,.ts}"]
            });
        }).to.throw(Error);
    });

});
