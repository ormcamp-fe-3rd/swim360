import axios from "@/services/index.ts";

export function getCategories() {
  axios
    .get("/백엔드 uri 보고 적기")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
