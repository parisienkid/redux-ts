import { 
    dataRuFetching, 
    dataRuFetched, 
    dataRuFetchingError, 
    dataEnFetching, 
    dataEnFetched, 
    dataEnFetchingError 
} from "../reducers/data-slice";

export const fetchRuData = (request, url) => (dispatch) => {
    dispatch(dataRuFetching());
    request(url)
    .then(data => dispatch(dataRuFetched(data)))
    .catch(() => dispatch(dataRuFetchingError()))
};

export const fetchEnData = (request, url) => (dispatch) => {
    dispatch(dataEnFetching());
    request(url)
    .then(data => dispatch(dataEnFetched(data)))
    .catch(() => dispatch(dataEnFetchingError()))
};


