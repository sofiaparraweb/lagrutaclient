import axios from "axios";

export const GET_NEWS = "GET_NEWS";

export function getNews() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:5173/news`);
      return dispatch({
        type: GET_NEWS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
