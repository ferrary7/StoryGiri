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
        <th><h2>Others</h2></th>
    </tr>
    <tr>
        <td>At your convenience</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck'>❌</td>
    </tr>
    <tr>
        <td>Both Online & Offline</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck'>❌</td>
    </tr>
    <tr>
        <td>No Judgement Zone</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck' style={{color: 'crimson'}}>Maybe</td>
    </tr>
    <tr>
        <td>Customized 1-1 Coaching Program</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck'>❌</td>
    </tr>
    <tr>
        <td>Retreat Programs</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck' style={{color: 'crimson'}}>Maybe</td>
    </tr>
    <tr>
        <td>Thriving Community</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck'>❌</td>
    </tr>
    <tr>
        <td>Post Program Support</td>
        <td className='centerCheck'>✔️</td>
        <td className='centerCheck'>❌</td>
    </tr>
    </table>
    </div>
</div>
  );
};

export default Table;
