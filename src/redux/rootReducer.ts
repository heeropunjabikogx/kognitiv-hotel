import { SET_BRAND, SET_DISTANCE, SET_LOCATION, SET_NAME } from "./types";
import {
  getName,
  getBrand,
  getLocation,
  getDistance,
  setBrand,
  setDistance,
  setLocation,
  setName,
} from "../service";

const initialState = {
  name: getName(),
  location: getLocation(),
  distance: getDistance(),
  brand: getBrand(),
};

const hotelReducer = (
  state: object = initialState,
  action: { type: string; payload: string | number }
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
    default:
      return state;
  }
};

export default hotelReducer;
