import { Product, ProductStore } from "../product";

const store = new ProductStore();

describe("Products Model", () => {
    it("should have a show method", () => {
        expect(store.show).toBeDefined();
    });
    it("Create method should create a new product in DB", async () => {
        const product: Product = {
            name: "Cool Product",
            price: 5000,
        }
        const result = await store.create(product);
        expect(result).toBeTruthy();
    })
    it("Show method should return the created product with given ID", async () => {
        const result = await store.show(1);
        expect(result).toEqual({
            id: 1,
            name: 'Cool Product',
            price: 5000
        })
    })
    it("Delete method should delete the previously created product", async () => {
        const result = await store.delete(1);
        expect(result).toBeTruthy();
    })
})