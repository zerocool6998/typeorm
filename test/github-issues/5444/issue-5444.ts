import { EntitySchemaTransformer } from "../../../src/entity-schema/EntitySchemaTransformer";

import {expect} from "chai";

import { Post, PostSchema } from "./entity/Post";
import { Author, AuthorSchema } from "./entity/Author";
import {Connection, EntitySchema} from "../../../src";
import {closeTestingConnections, createTestingConnections, reloadTestingDatabases} from "../../utils/test-utils.js";


describe("github issues > #5444 EntitySchema missing support for multiple joinColumns in relations", () => {
  let connections: Connection[];

  before(async () => {
    return connections = await createTestingConnections({
        entities: [Post, Author],
        schemaCreate: true,
        dropSchema: true,
        enabledDrivers: ["sqlite"]
    });
  });
  beforeEach(() => reloadTestingDatabases(connections));
  after(() => closeTestingConnections(connections));

  it("Update query returns the number of affected rows", async () => Promise.all(connections.map(async (connection) => {
      const transformer = new EntitySchemaTransformer();

      const actual = transformer.transform(
        connection,
        [
          new EntitySchema<Author>(AuthorSchema),
          new EntitySchema<Post>(PostSchema)
        ]
      );

      const joinColumns = actual.joinColumns;

      expect(joinColumns.length).to.eq(2);
      expect(joinColumns).to.deep.eq([
          {
              target: Post,
              propertyName: "author",
              name: "authorPublisherId",
              referencedColumnName: "publisherId"
          },
          {
              target: Post,
              propertyName: "author",
              name: "authorId",
              referencedColumnName: "id"
          },

      ]);
  })));
});
