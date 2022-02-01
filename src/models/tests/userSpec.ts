import { User, UserStore } from "../user";

const store = new UserStore();

describe("User Model", () => {
  it("Index should not return empty array", async () => {
    const result = await store.index();
    expect(result.length).toBeGreaterThan(0);
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
    const result = await store.show(2);
    expect(result.firstname).toEqual('Fahd')
  })
});
