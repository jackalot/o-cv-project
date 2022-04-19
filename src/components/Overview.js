import React, { Component } from "react";
import NumberField from "./NumberField";
import DateField from "./DateField";
class OverView extends React.Component {
    render () {
      return <div>
        <NumberField fieldName='Phone Number' className='phone-number' labelText='Enter Your Phone number'></NumberField>
      </div>;
    }
}
export default OverView;