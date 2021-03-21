import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Input, Select, Form, Button, Modal } from "antd";
import { HomeOutlined, AimOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setLocation,
  setDistance,
  setBrand,
  submit,
} from "../redux/actions";
import styled from "styled-components";
import {
  ResponseType,
  HotelStructureType,
  distanceSample,
  brandSample,
} from "../service";
const { Option } = Select;

const HeaderContainer = styled.div`
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;
const Booking = () => {
  const dispatch = useDispatch();
  const hotelName: string = String(
    useSelector<HotelStructureType>((state) => state.name)
  );
  const locationName: string = String(
    useSelector<HotelStructureType>((state) => state.location)
  );
  const totalDistance: number = Number(
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

  const bookingSuccess = () => {
    Modal.info({
      title: "Your booking has been confirmed...",
      content: (
        <div>
          <p>
            {" "}
            {"Hotel Name: "} {hotelName}{" "}
          </p>
          <p>
            {" "}
            {"Location: "} {locationName}
          </p>
        </div>
      ),
      okText: "Thank You",
      onOk() {
        window.location.reload();
      },
    });
  };

  return (
    <Fragment>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <Form
          name={"kognitiv"}
          onFinish={(e) => {
            dispatch(
              submit({ hotelName, locationName, brandName, totalDistance })
            );
            bookingSuccess();
          }}
        >
          <Row>
            <Col span={24}>
              <HeaderContainer>
                <img
                  alt="HotelBooking App"
                  src={
                    "https://i.pinimg.com/originals/cd/11/e9/cd11e9cc2d09b20cc0a7e263b5535a5e.jpg"
                  }
                />
              </HeaderContainer>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h1
                style={{ textAlign: "center" }}
                className={"text-primary mt-5 mb-5"}
              >
                {"Hotel Booking App"}{" "}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col span={20} offset={4}>
              <h5 className={"mt-5"}> {"Hotel and City of Choice"} </h5>
            </Col>
            <Col span={8} offset={4}>
              <Form.Item
                label={"Name"}
                rules={[{ required: true, message: "Please enter Name!" }]}
              >
                <Input
                  placeholder={"Enter Hotel name..."}
                  value={hotelName}
                  prefix={<HomeOutlined />}
                  onChange={(e) => onNameChange(e.target.value)}
                  required={true}
                />
              </Form.Item>
            </Col>
            <Col span={8} offset={1}>
              <Form.Item
                label={"City"}
                rules={[
                  { required: true, message: "Please enter Location..." },
                ]}
              >
                <Input
                  placeholder={"Enter Hotel location..."}
                  value={locationName}
                  prefix={<AimOutlined />}
                  onChange={(e) => onLocationChange(e.target.value)}
                  required={true}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={20} offset={4}>
              <h5 className={"mt-5"}> {"Filters"} </h5>
            </Col>
            <Col span={8} offset={4}>
              <Form.Item
                label={"Distance"}
                rules={[{ required: true, message: "Select distance..." }]}
              >
                <Select
                  placeholder={"Select Distance..."}
                  value={totalDistance >= 0 ? totalDistance : undefined}
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
            </Col>
            <Col span={8} offset={1}>
              <Form.Item
                label={"Brand"}
                rules={[{ required: true, message: "Select Brand..." }]}
              >
                <Select
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
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <ButtonContainer>
                <Form.Item>
                  <Button
                    style={{ margin: "auto" }}
                    type={"primary"}
                    htmlType={"submit"}
                    size={"large"}
                  >
                    {"Submit"}
                  </Button>
                </Form.Item>
              </ButtonContainer>
            </Col>
          </Row>
        </Form>
      )}
    </Fragment>
  );
};

export default Booking;
