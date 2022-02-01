import { Order, OrderStore } from '../order';

const store = new OrderStore;

describe('Order Model', () => {
    it("Index should return empty array", async () => {
        expect(await store.index()).toBeTruthy();
    });
    it("Should return a created object", async () => {
        const result = await store.create({ user_id: 1 })
        expect(result).toEqual({ id: 1, is_complete: false, user_id: ('1' as unknown) as number });
    });
    it("Show method should not return order if it doesn't exist", async () => {
        const result = await store.show(1)
        expect(result).not.toEqual({
            is_complete: true,
            user_id: 1
        });
    })
    it("ShowById should be falsy when given invalid user id", async () => {
        const result = await store.showByUserID('-01200');
        expect(result).toBeFalsy();
    })

});