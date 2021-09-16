import React, { useState, useEffect }  from "react";
import { axiosInstance } from "../utils/axiosInterceptor";

export const Form =()=>{
    
    const [loading, setLoading] = useState(false);
  
   
    const [date, setdate] = useState("");
    const [patient, setpatient] = useState("");
    const [doctor, setdoctor] = useState("");
    
  
   
  
   /* function readURL(input) {
      if (input) {
        var reader = new FileReader();
        reader.onload = (e) => {
          console.log(e.target.result);
          setUrl(e.target.result);
        };
        reader.readAsDataURL(input);
      }
    }
  */
    
  
    let fetchProfile = () => {
      setLoading(true);
      
      axiosInstance
        .get(`/getappointment`)
        .then((profile) => {
          console.log(profile);
         console.log(profile.data.date)
          setdate(profile.data.date);
          setpatient(profile.data.patient);
          setdoctor(profile.data.doctor);
          
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    };
  
    
  
    useEffect(() => {
      fetchProfile();
    }, []);
  
  return (
    <form onSubmit>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          value={date}
          className="form-control"
          id="date"
          type="date"
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input
          
          type="time"
          className="form-control"
          id="time"
        />
      </div>
      <div className="form-group">
        <button
         style={{marginTop:'20px'}}
         
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
