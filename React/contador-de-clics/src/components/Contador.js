import React from 'react'; //opcional
import '../stylesheets/Contador.css'

function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );
}

export default Contador;