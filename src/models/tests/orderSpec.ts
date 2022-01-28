import {Order, OrderStore} from '../order';

const store = new OrderStore;

describe('Order Model', () => {
    it("should have an index method", () => {
        expect(store.index).toBeDefined();
    });
    it("Should create a new order", () => {
        expect(store.create).toBeDefined();
    })
});