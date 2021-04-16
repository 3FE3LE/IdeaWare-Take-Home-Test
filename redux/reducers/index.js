const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_LIMIT":
      return { ...state, limit: payload };
    default:
      return state;
  }
};

export default reducer;
