import React from "react";
import { Table, Space, Button, Popconfirm } from "antd";

const ResultForm = ({ listCar, onDeleteCar, onEditCar }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên xe",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hãng sản xuất",
      dataIndex: "make",
      key: "make",
    },
    {
      title: "Mẫu xe",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Năm sản xuất",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Màu sắc",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Số khung (VIN)",
      dataIndex: "vin",
      key: "vin",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Hành động",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => onEditCar(record)}>
            Sửa
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this car?"
            onConfirm={() => onDeleteCar(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Table
        dataSource={listCar}
        columns={columns}
        rowKey={(record) => record.id}
        bordered
      />
    </div>
  );
};

export default ResultForm;
