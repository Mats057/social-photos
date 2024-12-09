import { useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { User, UserState } from "../types/userTypes";
import useAppDispatch from "./useAppDispatch";
import { fetchUsers } from "../actions/userActions";

export const useUserState = <T extends keyof RootState["userReducer"]>(
  key: T
): UserState[T] => {
  return useSelector((rootState: RootState) => rootState.userReducer[key]);
};

export const useUserStates = (): UserState => {
  return useSelector((state: RootState) => state.userReducer);
};

export const useUserById = (id: number | undefined): User | null => {
  const users = useUserState("users");
  const dispatch = useAppDispatch();
  if (id === undefined) {
    return null;
  }
  if (users.length === 0) {
    dispatch(fetchUsers());
  }
  const user = users.find((user) => user.id === id);
  return user || null;
};
