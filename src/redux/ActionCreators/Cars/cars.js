import {
  CHOSE_MODEL,
  UNCHOSE_MODEL,
  GET_CARS,
  CHOSE_CAR,
} from "../../Reducers/Cars/cars";

export const choseCar = (car) => {
  return {
    type: CHOSE_CAR,
    payload: car,
  };
};

export const choseModel = (id) => {
  return {
    type: CHOSE_MODEL,
    payload: id,
  };
};

export const unchoseModel = (id) => {
  return {
    type: UNCHOSE_MODEL,
    payload: id,
  };
};

export const getCars = () => async (dispatch) => {
  try {
    await fetch(`https://api-factory.simbirsoft1.com/api/db/car?limit=10`, {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: GET_CARS, payload: res.data }));
  } catch (e) {
    console.error(e);
  }
};
