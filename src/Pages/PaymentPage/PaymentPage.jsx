import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import "./PaymentPage.scss";
import * as yup from "yup";
import { COUNTRY } from "../../Constanst/Country";
import { useNavigate } from "react-router-dom"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const schema = yup.object().shape({
  "first-name": yup.string().required("نام را وارد کنید"),
  "last-name": yup.string().required("نام‌خانوادگی را وارد کنید"),
  age: yup
    .number()
    .typeError("عدد وارد کنید")
    .required("سن را وارد کنید")
    .positive("سن باید مثبت باشد")
    .min(18, "حداقل سن 18 سال است")
    .max(99, "حداکثر سن 99 سال است"),
  "state-select": yup.string().required("یک استان را انتخاب کنید"),
  "city-select": yup.string().required("یک شهر را انتخاب کنید"),
});
function PaymentPage() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCoords, setSelectedCoords] = useState({
    lat: 35.6878498390794,
    lng: 51.39037370681763,
  });
  const [cityOptions, setCityOptions] = useState(null);
  let stateOptions = [];
  const state = COUNTRY.forEach((item) => {
    stateOptions.push({ value: Object.keys(item), label: Object.keys(item) });
  });
  const navigate = useNavigate();
  function citylist(stateSelected) {
    let city = [];
    COUNTRY.forEach((item) => {
      if (Object.keys(item)[0] === stateSelected[0]) {
        Object.values(item).forEach((item) => {
          city.push(item);
        });
        let i = [];
        setCityOptions(() => {
          city[0].map((e) => {
            i.push({ value: e, label: e });
          });
          return i;
        });
      }
    });
  }
  COUNTRY.forEach((item) => {
    stateOptions.push({ value: Object.keys(item), label: Object.keys(item) });
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (data) => {
    console.log(selectedOption);
    const formDataWithCoords = {
      ...data,
      map: {
        lat: selectedCoords.lat,
        lng: selectedCoords.lng,
      },
    };
    console.log(formDataWithCoords);
    const isValid = await schema.isValid(formDataWithCoords);
    if (isValid) {
      navigate("/show-results");
    }
    console.log(formDataWithCoords);
  };
  function MapClickHandler() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setSelectedCoords({ lat, lng });
      },
    });
    return null;
  }

  return (
    <div className="payment-page">
      <form
        className="payment-page__wrapper"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <label htmlFor="first-name">نام</label>
        <input id="first-name" {...register("first-name")} />
        {errors["first-name"] && <p>{errors["first-name"].message}</p>}

        <label htmlFor="last-name">نام‌خانوادگی</label>
        <input id="last-name" {...register("last-name", { required: true })} />
        {errors["last-name"] && <p>{errors["last-name"].message}</p>}
        <label htmlFor="age">سن</label>
        <input id="age" {...register("age")} />
        {errors["age"] && <p>{errors["age"].message}</p>}
        <div className="map-container" style={{ marginBottom: "25px" }}>
          <label htmlFor="map">نقشه </label>

          <MapContainer
            center={[35.6892, 51.389]}
            zoom={13}
            className="map"
            id="map"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png" />
            <MapClickHandler />
            {selectedCoords && (
              <Marker
                position={[selectedCoords.lat, selectedCoords.lng]}
                icon={L.icon({
                  iconUrl:
                    "https://leafletjs.com/examples/custom-icons/leaf-red.png",
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                })}
              />
            )}
          </MapContainer>
        </div>
        <div>
          <label htmlFor="state-select">
            استان
            <Select
              id="state-select"
              defaultValue={selectedOption}
              onChange={(stateSelected) => {
                setSelectedOption(stateSelected.value);
                citylist(stateSelected.value);
                setValue("state-select", stateSelected.value[0]);
              }}
              options={stateOptions}
            />
          </label>
          {errors["state-select"] && <p>{errors["state-select"].message}</p>}
          {cityOptions !== null && (
            <label htmlFor="city-select">
              شهر
              <Select
                id="city-select"
                defaultValue={selectedOption}
                onChange={(selectedCityOption) => {
                  setSelectedOption(selectedCityOption.value);
                  setValue("city-select", selectedCityOption.value);
                }}
                options={cityOptions}
              />
              {errors["city-select"] && <p>{errors["city-select"].message}</p>}
            </label>
          )}
        </div>
        <button type="submit">پرداخت</button>
      </form>
    </div>
  );
}

export default PaymentPage;
