import React, { useState } from 'react';

const Postform = () => {

   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [upload, setUpload] = useState(null);

   const handleSubmit = (e)=>{
      e.preventDefault();
      const files = upload; // Array.from(e.target.upload)

      const formData = new FormData();

      files.forEach((file,i)=>{
         formData.append(i, file);
      })

      fetch("/api/login",{
          method: "POST",
          body: formData
      })
      .then(res =>res.json())
      .then()
   }

   const handle = () => {
      localStorage.setItem('E-Mail', name);
      localStorage.setItem('Password', pwd);
   };
   const remove = () => {
      localStorage.removeItem('E-Mail');
      localStorage.removeItem('Password');
   };
   return (
      <div className="App">
         <form onSubmit={handleSubmit}>
            <h1>Name of the user:</h1>
            <input
               placeholder="Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <h1>Password of the user:</h1>
            <input
               type="password"
               placeholder="Password"
               value={pwd}
               onChange={(e) => setPwd(e.target.value)}
            />
            <input 
               type="file"
               onChange={(e) => setUpload(e.target.value)}
            />
            <div>
               <button onClick={handle}>Done</button>
            </div>
            {localStorage.getItem('E-Mail') && (
               <div>
                  Name: <p>{localStorage.getItem('E-Mail')}</p>
               </div>
            )}
            {localStorage.getItem('Password') && (
               <div>
                  Password: <p>{localStorage.getItem('Password')}</p>
               </div>
            )}
            <div>
               <button onClick={remove}>Remove</button>
            </div>
            <input type="submit" value="Absenden" />
         </form>
      </div>
   );
};
export default Postform;