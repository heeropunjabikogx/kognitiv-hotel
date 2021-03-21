import { SET_BRAND, SET_DISTANCE, SET_LOCATION, SET_NAME } from "./types";

export const setBrand = (name: number) => {
  return {
    type: SET_BRAND,
    payload: name,
  };
};
export const setDistance = (name: number) => {
  return {
    type: SET_DISTANCE,
    payload: name,
  };
};
export const setLocation = (name: string) => {
  return {
    type: SET_LOCATION,
    payload: name,
  };
};
export const setName = (name: string) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};
