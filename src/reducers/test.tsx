import { FETCH_DATA } from '../actions/types';

export default function githubReducer(state = [], action:any) {
  switch (action.type) {
      case FETCH_DATA:
      return action.data;
    default:
      return state;
  }
}