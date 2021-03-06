import React, { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axiosInterceptor";
import { Select, Spin } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { message } from "antd";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Button, Spinner } from "react-bootstrap";
import { getOverflowOptions } from "antd/lib/tooltip/placements";
const { Option } = Select;
export const Form = ({ onSubmit }) => {
  const [data, setdata] = useState({
    doctor: " ",
    time: " ",
    date: " ",
  });
  const [option, setoptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  function handle(e) {
    
    const newdata = { ...data };
    console.log(e.target.value);
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log(newdata);
    //setdata(...data, [event.target.value])
   // console.log(data);
    
  }
  function Submit(e) {
    console.log("hi");
    e.preventDefault();
    console.log(data);
    setBtnLoading(true);
    axiosInstance
      .post(`https://maivrikdoc.herokuapp.com/api/askappointment`, {
        doctor: data.doctor,
        time: data.time,
        date: data.date,
      })
      .then((res) => {
        console.log(res.data);
        message.success("successful appointment");
        setBtnLoading(false);
      })
      .catch((err) => {
        console.log(err);
        message.error(" Appointment Failed");
        setBtnLoading(false);
      });
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  let fetchProfile = () => {
    setLoading(true);
    console.log("hi");
    axiosInstance
      .get(`/doctors`)
      .then((res) => {
        console.log(res.data);
        let response = res.data;

        let n = response.length;
        // console.log(  response[1].user.name);
        /* for(let i=0;i<n;i++)
       {
         let ans =  response[i].user.name;
         console.log(ans);
         options.push(i,ans);
       }*/
        /*for(let i = 0; i < n; i++){
        options.push({
            id: i,
            name: response[i].user.name
        });
    };*/

        /* for(let i = 0; i < n; i++){
      setoptions( arr => [...arr, `${response[i].user.name}`]);
  };*/
        /*for(let i = 0; i < n; i++){
  setoptions((prevState) => ({
    ...prevState,
    
      name:   response[i].user.name,
      id : response[i].user.id,
    
  }));
};*/
        /*for(let i =0;i<n;i++)
{
  setoptions({name : response[i].user.name, id :response[i].user.id })
}*/
        let vilData = [{ name: " ", id: " " }];

        for (let i = 0; i < n; ++i) {
          vilData.push({
            name: response[i].user.name,
            id: response[i].user.id,
          });
        }
        console.log(vilData);

        setoptions(vilData);
        console.log(option);
        console.log("good luck");

        // setoptions(options);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  let MakeItem = function (X) {
    return <option>{X}</option>;
  };
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  function hi() {
    console.log("hi");
  }
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
    <Select
        placeholder="Select a doctor"
        style={{ width: "100%" }}
        onChange={(e) => {
          console.log(e);
        }}
      >
        <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
        {/* {option.map((option) => {
          return <Option style={{zIndex:'13'}} value={option.id}>{option.name}</Option>
        })} */}
      </Select>
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
          style={{ marginTop: "20px", backgroundColor: "#172578" }}
          onClick={Submit}
          className="form-control btn btn-primary"
          type="submit"
        >
          {btnLoading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            ""
          )}
          Submit
        </button>
      </div>
    </form>
    </>
  
  );
};
export default Form;
