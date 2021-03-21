import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Input, Select, Form, Button } from "antd";
import { HomeOutlined, AimOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { setName, setLocation, setDistance, setBrand } from "../redux/actions";
import styled from "styled-components";
import { ResponseType, HotelStructureType, HotelAppType } from "../service";
const { Option } = Select;
const distanceSample: ResponseType = {
  status: true,
  data: ["0km", "10km", "20km"],
};
const brandSample: ResponseType = {
  status: true,
  data: ["Amazon", "Flipkart", "PayTM"],
};
const Booking = () => {
  const dispatch = useDispatch();
  const hotelName: string = String(
    useSelector<HotelStructureType>((state) => state.name)
  );
  const locationName: string = String(
    useSelector<HotelStructureType>((state) => state.location)
  );
  const distanceName: number = Number(
    useSelector<HotelStructureType>((state) => state.distance)
  );
  const brandName: number = Number(
    useSelector<HotelStructureType>((state) => state.brand)
  );

  const [brands, setBrands] = useState<ResponseType>();
  const [distances, setDistances] = useState<ResponseType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    await fetch("https://distance.free.beeceptor.com/")
      .then((response) => {
        return response.status === 200 ? response.json() : distanceSample;
      })
      .then((data) => {
        setDistances(data);
      });
    await fetch("https://brands.free.beeceptor.com/")
      .then((response) => {
        return response.status === 200 ? response.json() : brandSample;
      })
      .then((data) => {
        setBrands(data);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);
  const onNameChange = (e: string) => {
    dispatch(setName(e));
  };
  const onLocationChange = (e: string) => {
    dispatch(setLocation(e));
  };
  const onDistanceChange = (e: number) => {
    dispatch(setDistance(e));
  };
  const onBrandChange = (e: number) => {
    dispatch(setBrand(e));
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
                  value={locationName}
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
                  style={{ width: 400 }}
                  placeholder={"Select Distance..."}
                  value={distanceName >= 0 ? distanceName : undefined}
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
                rules={[{ required: true, message: "Select Brand..." }]}
              >
                <Select
                  style={{ width: 400 }}
                  placeholder={"Select Brands..."}
                  value={brandName >= 0 ? brandName : undefined}
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
