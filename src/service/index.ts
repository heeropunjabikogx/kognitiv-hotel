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

export const getDistances = async () => {
  let res;
  fetch("https://distance.free.beeceptor.com/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      res = data;
    });
  return res;
};
export const getBrands = () => {
  let res;
  fetch("https://brands.free.beeceptor.com/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res = data;
    });
  return res;
};
