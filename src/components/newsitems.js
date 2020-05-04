import React from 'react';
import axios from 'axios';

export default class Newsitems extends React.Component {
  state = {
    data:{},
  }

  componentDidMount() {
    axios.get(`https://api.covid19india.org/state_district_wise.json`).then(res => {var persons = res.data["Tamil Nadu"].districtData;this.setState({data:persons});});
}

  render() {
    console.log(this.state.data);
    return (
        <div>
            <h1>District Wise COVID Data in TN</h1>
        <ol>
        {Object.entries(this.state.data).map(([key, value]) => <li>
         <h1>{key}</h1>
         <ul>
        <li> <h3>Confirmed:{value.confirmed}</h3></li>
        <li><h3>Active:{value.active}</h3></li>
        <li><h3>Deceased:{value.deceased}</h3></li>
         </ul>    
        </li>  )}
      </ol>
      </div>
    );
  }
}