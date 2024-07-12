import React from "react";
import { Button } from "antd";

function CreateButton(props) {
  const { onHandleCreateButton } = props;

  const handleCreateCar = () => {
    onHandleCreateButton();
  };

  return (
    <Button type="primary" danger onClick={handleCreateCar}>
      Thêm 1 Car
    </Button>
  );
}

export default CreateButton;
