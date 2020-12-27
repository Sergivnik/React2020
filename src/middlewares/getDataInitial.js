import axios from "axios";
import { db } from "../services/firebase.js";

export const GET_DATA = "DATA::GET_DATA";
export const GET_DATA_REQUEST = "DATA::GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "DATA::GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "DATA::GET_DATA_FAILURE";

export const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
});

export const getDataSuccess = (dataServer) => ({
  type: GET_DATA_SUCCESS,
  dataServer,
});

export const getDataFailure = () => ({
  type: GET_DATA_FAILURE,
});

export const getData = () => {
  return (dispatch) => {
    dispatch(getDataRequest());
    try {
      db.ref().on("value", (snapshot) => {
        const data = snapshot.val();
        dispatch(getDataSuccess(data));
      });
    } catch (error) {
      dispatch(getDataFailure());
    }

    // axios
    //   .get("http://localhost:5000/API/data")
    //   .then((res) => dispatch(getDataSuccess(res.data)))
    //   .catch(() => dispatch(getDataFailure()));
  };
};
