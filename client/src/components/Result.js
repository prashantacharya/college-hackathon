import React, { useState } from 'react';

const Result = () => {
  const [email, setEmail] = useState('');

  return (
    <>
      <h1>Look for your result</h1>
      <form>
        <div className="form-element">
          <label htmlFor="email">Enter your email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            required
          />
        </div>
      </form>
    </>
  );
};

export default Result;
