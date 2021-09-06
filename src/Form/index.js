import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input className="form-control" id="date"  type="date"  />
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
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
