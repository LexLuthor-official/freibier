import React, { useState } from 'react';

const Form = () => {

   const [name, setName] = useState('');
   

   const handle = () => {
      localStorage.setItem('URL', name);
   };

   const remove = () => {
      localStorage.removeItem('URL');
   };
   return (
      <div className="App">
         <h1>Name of the user:</h1>
         <input
            placeholder="URL"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <div>
            <button onClick={handle}>Done</button>
         </div>
         {localStorage.getItem('URL') && (
            <div>
               Name: <p>{localStorage.getItem('URL')}</p>
            </div>
         )}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};
export default Form;