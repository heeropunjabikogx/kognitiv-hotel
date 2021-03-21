export interface ResponseType {
  status: boolean;
  data: String[];
}
export const getDistance = async () => {
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
