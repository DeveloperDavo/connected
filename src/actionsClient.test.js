import axios from "axios";
import getActions from "./actionsClient";

jest.mock("axios");

describe("actionsClient", () => {
  it("fetches actions", async () => {
    const data = {
      actions: [
        { type: "UNLOCK", time: 1558985077355, status: "PENDING" },
        { type: "LOCK", time: 1558985032079, status: "COMPLETE" },
        { type: "LOCK", time: 1558985004649, status: "FAILED" }
      ]
    };

    const response = { data };
    axios.get.mockResolvedValue(response);

    const actions = await getActions();

    expect(axios.get).toHaveBeenCalledWith(
      "https://forty-two-motors.herokuapp.com/actions"
    );

    expect(actions).toBe(response.data.actions);
  });
});
