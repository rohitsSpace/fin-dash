import { groupFieldsIntoRows } from "../../../src/utils/groupFieldsIntoRows";
describe("groupFieldsIntoRows", () => {
  test("should group an even number of fields into pairs", () => {
    const fields = ["a", "b", "c", "d"];
    const result = groupFieldsIntoRows(fields);
    expect(result).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  test("should group an odd number of fields, with the last row containing one element", () => {
    const fields = ["a", "b", "c"];
    const result = groupFieldsIntoRows(fields);
    expect(result).toEqual([["a", "b"], ["c"]]);
  });

  test("should return an empty array if given an empty array", () => {
    const fields = [];
    const result = groupFieldsIntoRows(fields);
    expect(result).toEqual([]);
  });

  test("should return a single row if only one element is provided", () => {
    const fields = ["a"];
    const result = groupFieldsIntoRows(fields);
    expect(result).toEqual([["a"]]);
  });

  test("should handle a large array correctly", () => {
    const fields = Array.from({ length: 7 }, (_, i) => `field${i + 1}`);
    const result = groupFieldsIntoRows(fields);
    expect(result).toEqual([
      ["field1", "field2"],
      ["field3", "field4"],
      ["field5", "field6"],
      ["field7"],
    ]);
  });
});
