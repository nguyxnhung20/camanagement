import React, { useEffect, useState } from "react";
import { message } from "antd";
import ResultForm from "../Components/Car/ResultForm";
import CreateButton from "../Components/Car/CreateButton";
import ModalCarForm from "../Components/Car/ModalCarForm";
import {
  getListCarAPI,
  createNewCarAPI,
  deleteCarAPI,
  updateCarAPI,
} from "../API/CarAPI";

function CarContainer() {
  const [showForm, setShowForm] = useState(false);
  const [listCar, setListCar] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    getListCarAPI().then((res) => {
      setListCar(res);
    });
  };

  const onDeleteCar = (id) => {
    deleteCarAPI(id)
      .then(() => {
        fetchCars();
        message.success("Xoá Car thành công");
      })
      .catch((err) => {
        console.log("Lỗi", err);
        message.error("Xoá Car thất bại");
      });
  };

  const onHandleCreateButton = () => {
    setSelectedCar(null);
    setShowForm(true);
  };

  const onHandleCloseForm = () => {
    setShowForm(false);
    setSelectedCar(null);
  };

  const onHandleSubmitCar = (car) => {
    if (car.id) {
      updateCarAPI(car)
        .then(() => {
          fetchCars();
          setShowForm(false);
          message.success("Cập nhật car thành công");
        })
        .catch((err) => {
          console.log("Lỗi", err);
          message.error("Cập nhật car thất bại");
        });
    } else {
      createNewCarAPI(car)
        .then(() => {
          fetchCars();
          setShowForm(false);
          message.success("Thêm car thành công");
        })
        .catch((err) => {
          console.log("Lỗi", err);
          message.error("Thêm car thất bại");
        });
    }
  };

  const onEditCar = (car) => {
    setSelectedCar(car);
    setShowForm(true);
  };

  return (
    <div>
      <CreateButton onHandleCreateButton={onHandleCreateButton} />
      <br />
      <ModalCarForm
        showForm={showForm}
        onClose={onHandleCloseForm}
        onSubmit={onHandleSubmitCar}
        car={selectedCar}
      />
      <ResultForm
        listCar={listCar}
        onDeleteCar={onDeleteCar}
        onEditCar={onEditCar}
      />
    </div>
  );
}

export default CarContainer;
