import axios from "@/services/index.ts";

export function getCategories() {
  axios
    .get("/users", { withCredentials: true })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
