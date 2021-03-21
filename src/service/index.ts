export interface ResponseType {
  status: boolean;
  data: String[];
}
export type HotelAppType<T> = (p: T) => T;
export interface HotelStructureType {
  name: string;
  location: string;
  distance: number;
  brand: number;
}
export const distanceSample: ResponseType = {
  status: true,
  data: ["0km", "10km", "20km"],
};
export const brandSample: ResponseType = {
  status: true,
  data: ["Amazon", "Flipkart", "Paytm"],
};
export const getName = () => {
  return String(localStorage.getItem("hotel_name") || "");
};
export const getLocation = () => {
  return String(localStorage.getItem("hotel_location") || "");
};
export const getDistance = () => {
  return Number(localStorage.getItem("hotel_distance") || -1);
};
export const getBrand = () => {
  return Number(localStorage.getItem("hotel_brand") || -1);
};

export const setName = (name: string) => {
  localStorage.setItem("hotel_name", name);
  return name;
};
export const setLocation = (name: string) => {
  localStorage.setItem("hotel_location", name);
  return name;
};
export const setDistance = (d: number) => {
  localStorage.setItem("hotel_distance", d.toString());
  return d;
};
export const setBrand = (b: number) => {
  localStorage.setItem("hotel_brand", b.toString());
  return b;
};

export const onSubmit = (status: object) => {
  localStorage.removeItem("hotel_name");
  localStorage.removeItem("hotel_location");
  localStorage.removeItem("hotel_distance");
  localStorage.removeItem("hotel_brand");
  localStorage.setItem("bookingData", JSON.stringify(status));
};
