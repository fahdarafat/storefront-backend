import {User, UserStore} from '../user';

const store = new UserStore;

describe("User Model", () => {
    it("should have an index method", () => {
        expect(store.index).toBeDefined();
    });
});