import axios from "axios";

export default async function getActions() {
  const response = await axios.get(
    "https://forty-two-motors.herokuapp.com/actions"
  );
  return response.data.actions;
}
