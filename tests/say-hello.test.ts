import { sayHello } from "../src/say-hello";

describe('sayHello', function() {
    it('should be return hello geraldi', function() {
        expect(sayHello("geraldi")).toBe("Hello geraldi")
    })
})