const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_LIMIT":
      return { ...state, limit: payload };
    case "SET_INTERVAL":
      return { ...state, time: payload };

    default:
      return state;
  }
};

export default reducer;
