// Describing the types we get in state
export interface UserList {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// Describing the different ACTION NAMES available
export const FETCH_DATA="FETCH_DATA";

interface  UserListAction {
    type: typeof FETCH_DATA;
    payload: UserList;
  }

  export type FetchActionTypes = UserListAction ;
