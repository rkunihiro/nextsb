import { add } from "./hoge";

describe("hoge", () => {
    it("add 1, 2 return 3", () => {
        expect(add(1, 2)).toBe(3);
    });
});
