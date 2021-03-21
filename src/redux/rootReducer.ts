import {
  SET_BRAND,
  SET_DISTANCE,
  SET_LOCATION,
  SET_NAME,
  SUBMIT,
} from "./types";
import {
  getName,
  getBrand,
  getLocation,
  getDistance,
  setBrand,
  setDistance,
  setLocation,
  setName,
  onSubmit,
} from "../service";

const initialState = {
  name: getName(),
  location: getLocation(),
  distance: getDistance(),
  brand: getBrand(),
  bookingData: {},
};

const hotelReducer = (
  state: object = initialState,
  action: { type: string; payload: string | number | object }
) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: setName(String(action.payload)),
      };
    case SET_LOCATION:
      return {
        ...state,
        location: setLocation(String(action.payload)),
      };
    case SET_DISTANCE:
      return {
        ...state,
        distance: setDistance(Number(action.payload)),
      };
    case SET_BRAND:
      return {
        ...state,
        brand: setBrand(Number(action.payload)),
      };
    case SUBMIT:
      return {
        ...state,
        bookingData: onSubmit(Object(action.payload)),
      };
    default:
      return state;
  }
};

export default hotelReducer;
