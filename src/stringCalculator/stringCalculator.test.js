import { add } from "./stringCalculator";

describe("String Calculator TDD", () => {
  test("Empty string returns 0", () => {
    expect(add("")).toBe(0);
  });

  test("Single number returns itself", () => {
    expect(add("1")).toBe(1);
  });

  test("Two numbers returns sum", () => {
    expect(add("1,5")).toBe(6);
  });

  test("Multiple numbers returns sum", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
});
