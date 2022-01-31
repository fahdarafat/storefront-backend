import { Order, OrderStore } from '../order';

const store = new OrderStore;

describe('Order Model', () => {
    it("Should have an index method", () => {
        expect(store.index).toBeDefined();
    });
    it("Show method should not return order with user_id abc", async () => {
        const result = await store.show('1')
        expect(result).not.toEqual({
            is_complete: true,
            userID: 'abc'
        });
    })
    it("ShowById should be falsy when given invalid user id", async () => {
        const result = await store.showByUserID('-01200');
        expect(result).toBeFalsy();
    })

});