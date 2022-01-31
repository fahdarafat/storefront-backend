import { Product, ProductStore } from "../product";

const store = new ProductStore();

describe("Products Model", () => {
    it("should have a show method", () => {
        expect(store.show).toBeDefined();
    });
})