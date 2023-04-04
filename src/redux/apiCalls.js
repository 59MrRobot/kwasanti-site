import {
  publicRequest,
} from "../requestMethods";
import {
  startUserProcess,
  loginFailure,
  loginSuccess,
} from "./userRedux"

//USERS
export const login = async (dispatch, user) => {
  dispatch(startUserProcess());

  try {
    const response = await publicRequest.post('/auth/login', user);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
}
