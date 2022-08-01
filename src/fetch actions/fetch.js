import { dataGameFetching, dataGameFetched, dataGameFetchingError } from "../reducers/data-slice";
import { dataPostsFetching, dataPostsFetched,  dataPostsFetchingError } from "../reducers/data-slice";

export const fetchGameData = (request, url) => (dispatch) => {
    dispatch(dataGameFetching());
    request(url)
    .then(data => dispatch(dataGameFetched(data)))
    .catch(() => dispatch(dataGameFetchingError()))
};

export const fetchPostsData = (request, url) => (dispatch) => {
    dispatch(dataPostsFetching());
    request(url)
    .then(data => dispatch(dataPostsFetched(data)))
    .catch(() => dispatch(dataPostsFetchingError()))
};
