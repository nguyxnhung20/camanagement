import React, { useState, useEffect } from "react";
import { Button, Container, Form, FormGroup, Label, Input } from "reactstrap";

function CarForm({ car, onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [vin, setVIN] = useState("");

  useEffect(() => {
    if (car) {
      setName(car.name || "");
      setMake(car.make || "");
      setModel(car.model || "");
      setYear(car.year || "");
      setColor(car.color || "");
      setVIN(car.vin || "");
    }
  }, [car]);

  const handleSubmit = () => {
    const carData = {
      name,
      make,
      model,
      year,
      color,
      vin,
    };
    if (car && car.id) {
      carData.id = car.id;
    }
    onSubmit(carData);
  };

  const handleReset = () => {
    setName("");
    setMake("");
    setModel("");
    setYear("");
    setColor("");
    setVIN("");
  };

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="Name">Tên xe: </Label>
          <Input
            id="Name"
            placeholder="Nhập tên xe"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Make">Hãng sản xuất: </Label>
          <Input
            id="Make"
            placeholder="Nhập hãng sản xuất"
            type="text"
            value={make}
            onChange={(event) => setMake(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Model">Mẫu xe: </Label>
          <Input
            id="Model"
            placeholder="Nhập mẫu xe"
            type="text"
            value={model}
            onChange={(event) => setModel(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Year">Năm sản xuất: </Label>
          <Input
            id="Year"
            placeholder="Nhập năm sản xuất"
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Color">Màu sắc: </Label>
          <Input
            id="Color"
            type="select"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          >
            <option value="">Chọn màu</option>
            <option value="Đen">Đen</option>
            <option value="Trắng">Trắng</option>
            <option value="Đỏ">Đỏ</option>
            <option value="Xanh">Xanh</option>
            <option value="Bạc">Bạc</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="VIN">Số khung (VIN): </Label>
          <Input
            id="VIN"
            placeholder="Nhập số khung"
            type="text"
            value={vin}
            onChange={(event) => setVIN(event.target.value)}
          />
        </FormGroup>
      </Form>
      <Button color="primary" onClick={handleSubmit}>
        {car ? "Cập nhật" : "Tạo mới"}
      </Button>
      <Button color="danger" onClick={handleReset}>
        Đặt lại
      </Button>
      <Button color="secondary" onClick={onCancel}>
        Hủy
      </Button>
    </Container>
  );
}

export default CarForm;
