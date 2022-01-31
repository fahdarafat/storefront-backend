import { User, UserStore } from "../user";

const store = new UserStore();

describe("User Model", () => {
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });
  it("Should create a new user", async () => {
    const user: User = {
      firstname: "Fahd",
      lastname: "Arafat",
      password: "password",
    };
    const result = await store.create(user);
    expect(result.firstname).toEqual("Fahd");
  });
});
