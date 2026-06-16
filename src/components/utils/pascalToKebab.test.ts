import { describe, expect, it } from "vitest";
import { pascalToKebab } from "./pascalToKebab";

describe("pascalToKebab", () => {
  it("converts PascalCase to kebab-case", () => {
    expect(pascalToKebab("MyComponent")).toBe("my-component");
    expect(pascalToKebab("HelloWorld")).toBe("hello-world");
  });

  it("handles single letter words", () => {
    expect(pascalToKebab("A")).toBe("a");
  });

  it("handles already kebab-case or lowercase", () => {
    expect(pascalToKebab("hello-world")).toBe("hello-world");
    expect(pascalToKebab("hello")).toBe("hello");
  });
});
