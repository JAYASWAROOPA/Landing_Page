import React from 'react';
import './App.css'
export default function App() {
  return (
    <>
      <div className="content">
        <p style={{ fontSize: '40px' }}>TRAVELOGUE</p>
        <p style={{ fontSize: '20px' }}>Compare from over 30 insurance<br />plans and find your best option</p>
      </div>
      <div className="details" style={{ backgroundColor: 'rgb(37, 65, 150)', height: '290px', color: 'white', borderRadius: '10px', width: '1500px', textAlign: 'center', paddingLeft: '5px', marginTop: '200px', marginLeft: '10px' }}>
        <p style={{ width: '100%', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman', fontSize: '30px', fontStyle: 'normal' }}>Let me Compare Now</p>
        <table style={{ paddingLeft: '300px', paddingRight: '50px', width: '700px' }}>
          <tr>
            <td style={{ border: '1px solid', fontSize: 'larger' }}>1. Destination Details</td>
            <td style={{ fontSize: 'larger' }}>2. Traveller Details</td>
            <td style={{ fontSize: 'larger' }}>3. Payment Details</td>
          </tr>
        </table>
        <table>
          <tr>
            <th style={{ padding: '10px', paddingLeft: '400px' }}>Destination Country<br />
              <select name="country" id="country" style={{ padding: '17px', borderRadius: '5px' }}>
                <option value="india">India</option>
                <option value="united states">United States</option>
                <option value="korea">Korea</option>
              </select>
            </th>
            <th style={{ padding: '20px', paddingLeft: '20px' }}>Departure Date<br />
              <input type="date" style={{ padding: '15px', borderRadius: '5px' }} />
            </th>
            <th style={{ padding: '20px', paddingLeft: '20px' }}>Return Date<br />
              <input type="date" style={{ padding: '15px', borderRadius: '5px' }} />
            </th>
            <th>
              <input type="submit" value="Next ->" style={{ padding: '15px', borderRadius: '5px', width: '150px', height: '50px', marginTop: '15px', backgroundColor: 'rgb(232, 64, 64)' }} />
            </th>
          </tr>
        </table>
      </div>
    </>
  );
}
