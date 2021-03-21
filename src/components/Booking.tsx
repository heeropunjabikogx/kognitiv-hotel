import React, { Fragment, useEffect, useState, useRef } from "react";
import { Row, Col, Input, Select, Form, Button } from "antd";
import { HomeOutlined, AimOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { ResponseType } from "../service";
const { Option } = Select;

const distanceSample = {
  status: true,
  data: ["0km", "10km", "20km"],
};
const brandSample = {
  status: true,
  data: ["Amazon", "Flipkart", "PayTM"],
};
const Booking = () => {
  const [brands, setBrands] = useState<ResponseType>(brandSample);
  const [distances, setDistances] = useState<ResponseType>(distanceSample);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hotelName, setHotelName] = useState<string>();
  const [hotelLocation, setHotelLocation] = useState<string>();
  const [selectedDistance, setSelectedDistance] = useState<number>();
  const [selectedBrand, setSelectedBrand] = useState<number>();

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
    //fetchData();
    setHotelName(String(localStorage.getItem("hotel_name") || ""));
    setHotelLocation(String(localStorage.getItem("hotel_location") || ""));
    setSelectedBrand(Number(localStorage.getItem("hotel_brand") || 0));
    setSelectedDistance(Number(localStorage.getItem("hotel_distance") || 0));
    setIsLoading(false);
  }, []);
  const onNameChange = (e: string) => {
    setHotelName(e);
    String(localStorage.setItem("hotel_name", e));
  };
  const onLocationChange = (e: string) => {
    setHotelLocation(e);
    String(localStorage.setItem("hotel_location", e));
  };
  const onDistanceChange = (e: number) => {
    setSelectedDistance(e);
    localStorage.setItem("hotel_distance", e.toString());
  };
  const onBrandChange = (e: number) => {
    setSelectedBrand(e);
    localStorage.setItem("hotel_brand", e.toString());
  };
  return (
    <Fragment>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <Form
          name={"kognitiv"}
          onFinish={() => {
            console.log("Finish");
          }}
        >
          <Row>
            <Col span={16} offset={4}>
              <Form.Item
                label={"Enter Name"}
                rules={[{ required: true, message: "Please enter Name!" }]}
              >
                <Input
                  size={"large"}
                  placeholder={"Enter Hotel name..."}
                  value={hotelName}
                  prefix={<HomeOutlined />}
                  onChange={(e) => onNameChange(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={"Enter Location"}
                rules={[
                  { required: true, message: "Please enter Location..." },
                ]}
              >
                <Input
                  size={"large"}
                  placeholder={"Enter Hotel location..."}
                  value={hotelLocation}
                  prefix={<AimOutlined />}
                  onChange={(e) => onLocationChange(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label={"Choose Distance"}
                initialValue="Distance..."
                //name={"distance"}
                rules={[{ required: true, message: "Select distance..." }]}
              >
                <Select
                  style={{ width: 200 }}
                  value={selectedDistance}
                  //defaultValue={selectedDistance}
                  onChange={(e) => onDistanceChange(e)}
                >
                  {distances?.data.map((distance, id) => {
                    return (
                      <Option key={id} value={id}>
                        {distance}{" "}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                label={"Choose Brand"}
                initialValue={"Brands..."}
                //name={"brand"}
                rules={[{ required: true, message: "Select Brand..." }]}
              >
                <Select
                  style={{ width: 200 }}
                  value={selectedBrand}
                  //defaultValue={selectedBrand}
                  onChange={(e) => onBrandChange(e)}
                >
                  {brands?.data.map((brand, id) => {
                    return (
                      <Option key={id} value={id}>
                        {brand}{" "}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type={"primary"} htmlType={"submit"}>
                  {"Submit"}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </Fragment>
  );
};

export default Booking;
