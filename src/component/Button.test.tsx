import React from "react";
import TestRenderer from "react-test-renderer";

import { Button } from "./Button";

describe("Button", () => {
    it("label", () => {
        const r = TestRenderer.create(<Button>Hello</Button>);
        expect(r.toJSON()).toMatchSnapshot();
    });
});
