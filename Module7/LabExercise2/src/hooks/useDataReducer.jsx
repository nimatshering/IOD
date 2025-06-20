import { useReducer, useEffect } from "react";

// Reducer definition
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, data: null, error: action.payload };
    default:
      return { ...state, loading: false };
  }
}

// Custom hook using - useReducer
export function useDataReducer(url) {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    data: null,
    error: "",
  });

  useEffect(() => {
    let ignore = false;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        }
      })
      .catch((error) => {
        if (!ignore) {
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      });

    // cleanup function, in case url changes before complete
    return () => {
      ignore = true;
    };
  }, [url]); // re-run effect if url changes

  return state; // return the state after fetching from the given url
}
