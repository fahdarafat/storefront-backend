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
  it("Show method should return user when given an ID", async () => {
    const result = await store.show(1);
    expect(result).toEqual({
      id: 1,
      firstname: "Fahd",
      lastname: "Arafat",
      password: "password"
    })
  })
});
