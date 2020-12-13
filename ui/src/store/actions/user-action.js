import Axios from "axios";

export const signIn = (e, data) => async (dispatch) => {
  e.preventDefault();
  const returnData = await Axios("http://localhost:5000/api/user", {
    method: "GET",
    data: {
      ...data,
    },
  });
  console.log(returnData.data);
};
