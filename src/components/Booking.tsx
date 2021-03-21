import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Input, Select } from "antd";
import { HomeOutlined, AimOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { ResponseType } from "../service";
const { Option } = Select;

const Booking = () => {
  const [brands, setBrands] = useState<ResponseType>();
  const [distances, setDistances] = useState<ResponseType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    await fetch("https://distance.free.beeceptor.com/")
      .then((response) => response.json())
      .then((data) => {
        setDistances(data);
      });
    await fetch("https://brands.free.beeceptor.com/")
      .then((response) => response.json())
      .then((data) => {
        setBrands(data);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);
  return (
    <Fragment>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <Row>
          <Col span={16} offset={4}>
            <Input
              size={"large"}
              placeholder={"Enter Hotel name..."}
              prefix={<HomeOutlined />}
              required={true}
            />
            <Input
              size={"large"}
              placeholder={"Enter Hotel location..."}
              prefix={<AimOutlined />}
              required={true}
            />
            <Select
              defaultValue="Distance"
              style={{ width: 200 }}
              onChange={(e) => console.log(e)}
            >
              {distances?.data.map((distance, id) => {
                return <Option value={id}>{distance} </Option>;
              })}
            </Select>
            <Select
              defaultValue="Brands..."
              style={{ width: 200 }}
              onChange={(e) => console.log(e)}
            >
              {brands?.data.map((brand, id) => {
                return <Option value={id}>{brand} </Option>;
              })}
            </Select>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default Booking;
