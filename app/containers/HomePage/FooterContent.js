import React from 'react';
import { FaTruckMoving } from 'react-icons/fa';

export default () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <FaTruckMoving color="#fff" size={'30px'} />
    <div style={{ marginLeft: 10 }}>
      <p style={{ color: '#fff', margin: 0, fontWeight: 'bold' }}>Heading</p>

      <p style={{ color: '#fff', margin: 0 }}>Subheading</p>
    </div>
  </div>
);
