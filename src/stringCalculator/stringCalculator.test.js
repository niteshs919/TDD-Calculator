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

  test("Handles newline as delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("Supports custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n2|3|4")).toBe(9);
  });

  test("Throws error for single negative number", () => {
    expect(() => add("-1")).toThrow("negative numbers not allowed -1");
  });

  test("Throws error for multiple negative numbers", () => {
    expect(() => add("2,-4,-5")).toThrow("negative numbers not allowed -4,-5");
  });
});
