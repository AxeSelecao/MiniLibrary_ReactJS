export const appendBook = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: "APPEND_BOOK",
      payload: {
        data,
        message: `Book was added ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};

export const updateName = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: "UPDATE_NAME",
      payload: {
        data,
        message: `Book changes name to ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};

export const updateAvgRating = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: "UPDATE_AVG_RATING",
      payload: {
        data,
        message: `Avg rating updated ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};

export const addReview = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: "ADD_REVIEW",
      payload: {
        data,
        message: `Review was added ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};

export const addRate = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: "ADD_RATE",
      payload: {
        data,
        message: `Rate was added ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};
