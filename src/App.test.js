import { mount } from "@vue/test-utils";
import App from "./App";
import getActions from "./actionsClient";

jest.mock("./actionsClient");

describe("App", () => {
  it("displays all list items", async () => {
    getActions.mockReturnValue([
      { type: "LOCK", time: 1558985004649, status: "FAILED" },
      { type: "LOCK", time: 1558985032079, status: "COMPLETE" },
      { type: "UNLOCK", time: 1558985077355, status: "PENDING" }
    ]);

    const wrapper = await mount(App);

    expect(wrapper.findAll("li").length).toBe(3);
  });
});
