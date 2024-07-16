import { api } from "./API";

const getListCarAPI = () => {
  return api("GET", "car", null);
};

const createNewCarAPI = (carData) => {
  return api("POST", "car", carData);
};

const deleteCarAPI = (id) => {
  const url = `car/${id}`;
  return api("DELETE", url);
};

const updateCarAPI = (car) => {
  const url = `car/${car.id}`;
  return api("PUT", url, {});
};

const getCarAPI = (id) => {
  const url = `car/${id}`;
  return api("GET", url, null);
};

export {
  getListCarAPI,
  createNewCarAPI,
  deleteCarAPI,
  updateCarAPI,
  getCarAPI,
};
