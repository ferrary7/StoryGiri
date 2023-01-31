import React from 'react';
import './Table.css';

const Table = () => {
  return (
    <div className='tableContainer'>
        <div className='table'>
            <h1>Get help, the Storygiri way</h1>
        <table>
    <tr>
        <th></th>
        <th><h2>Storygiri</h2></th>
        <th><h2>In-person</h2></th>
    </tr>
    <tr>
        <td>At your convenience</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck'>❌</td>
    </tr>
    <tr>
        <td>Everything Online</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck'>❌</td>
    </tr>
    <tr>
        <td>No Judgement Zone</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck'>❌</td>
    </tr>
    <tr>
        <td>Chat with your Doctor 24/7</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck'>❌</td>
    </tr>
    <tr>
        <td>Discrete Doorstep Delivery</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck'>❌</td>
    </tr>
    <tr>
        <td>No fad supplements and pills</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck'>❌</td>
    </tr>
    </table>
    </div>
</div>
  );
};

export default Table;
