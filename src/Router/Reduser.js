const initialState = {
    status:
      localStorage.getItem("loginStatus") === null
        ? false
        : Boolean(localStorage.getItem("loginStatus")),
    storeCounter:
      localStorage.getItem("videoCountData") === null
        ? []
        : localStorage.getItem("videoCountData").split(",")
  };
  
  const reducer = (state = initialState, action) => {
    if (action.type === "LOGIN_STATUS") {
      const updateStatus = !state.status;
      localStorage.setItem("loginStatus", updateStatus);
      return { ...state, status: updateStatus };
    }
    if (action.type === "INC") {
      console.log(action.id);
      const updateCounter =
        state.storeCounter.indexOf(action.val) >= 0
          ? [...state.storeCounter]
          : [...state.storeCounter, action.val];
      console.log(updateCounter);
      localStorage.setItem("videoCountData", updateCounter);
      return {
        ...state,
        storeCounter: [...updateCounter]
      };
    }
  
    return { ...state };
  };