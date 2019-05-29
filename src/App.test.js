import { mount } from "@vue/test-utils";
import App from "./App";
import getActions from "./actionsClient";

jest.mock("./actionsClient");

describe("App", () => {
  const data = [
    { type: "UNLOCK", time: 1558985077355, status: "PENDING" },
    { type: "LOCK", time: 1558985032079, status: "COMPLETE" },
    { type: "LOCK", time: 1558985004649, status: "FAILED" }
  ];

  beforeEach(() => {
    getActions.mockReturnValue(data);
  });

  it("displays all rows", async () => {
    const wrapper = await mount(App);

    expect(wrapper.findAll("li").length).toBe(3);
  });

  describe("columns", async () => {
    let columns;

    beforeEach(async () => {
      const wrapper = await mount(App);
      columns = wrapper.find("li").findAll(".column");
    });

    it("display type", async () => {
      expect(columns.at(0).text()).toBe("UNLOCK");
    });

    it("display time", async () => {
      expect(columns.at(1).text()).toBe("1558985077355");
    });

    it("display status", async () => {
      expect(columns.at(2).text()).toBe("PENDING");
    });
  });
});
