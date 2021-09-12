import React, { useState } from "react";
import { axiosInstance } from "../utils/axiosInterceptor";
export const Form = ({ onSubmit }) => {
  const [data, setdata] = useState({
    id: 1,
    date: " ",
    patient: localStorage.getItem("patient_id"),
    doctor: localStorage.getItem("Doctor_id"),
  });
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log(newdata);
  }
  function Submit(e) {
    console.log("hi");
    e.preventDefault();
    console.log(data);
    axiosInstance
      .post(`/getappointment`, {
        id: data.id,
        date: data.date,
        patient: data.patient,
        doctor: data.doctor,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          onChange={(e) => handle(e)}
          className="form-control"
          id="date"
          type="date"
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input
          onChange={(e) => handle(e)}
          type="time"
          className="form-control"
          id="time"
        />
      </div>
      <div className="form-group">
        <button
         style={{marginTop:'20px'}}
          onClick={Submit}
          className="form-control btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
