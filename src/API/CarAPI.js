import { api } from "./API";

const getListCarAPI = () => {
  return api("GET", "car", null);
};

const createNewCarAPI = (carNew) => {
  return api("POST", "car", carNew);
};

const deleteCarAPI = (id) => {
  const url = `car/${id}`;
  return api("DELETE", url);
};

const updateCarAPI = (carUpdate) => {
  const url = `car/${carUpdate.id}`;
  return api("PUT", url, carUpdate);
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
