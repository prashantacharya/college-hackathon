import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Axios from 'axios';

const Score = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const alert = useAlert();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [score, setScore] = useState('');
  const [remarks, setRemarks] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await Axios.post(
        'http://localhost:3001/sendEmail',
        {
          name,
          email,
          question,
          score,
          remarks,
        },
        {
          headers: {
            Authorization: `Bearer ${authContext.accessToken}`,
          },
        }
      );

      if (response.data) {
        setName('');
        setEmail('');
        setRemarks('');
        setScore('');
        setLoading(false);
        alert.success('Mail sent successfully');
      }
    } catch (error) {
      setLoading(false);
      if (error.response.status === 403) {
        authContext.handleTokenUpdate('');
        alert.error('Log in again');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    authContext.handleTokenUpdate('');
  };

  useEffect(() => {
    if (!authContext.accessToken) history.push('/');
  }, [history, authContext.accessToken]);
  return (
    <>
      <h1>Grade Students</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label htmlFor="Name">Student's Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            required
          />
        </div>

        <div className="form-element">
          <label htmlFor="Email">Student's Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
          />
        </div>

        <div className="form-element">
          <label htmlFor="Question">Question</label>
          <input
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            type="text"
            required
          />
        </div>

        <div className="form-element">
          <label htmlFor="Score">Score (Out of 10)</label>
          <input
            value={score}
            onChange={(e) => {
              setScore(e.target.value);
            }}
            type="number"
            required
          />
        </div>

        <div className="form-element">
          <label htmlFor="Comments">Remarks</label>
          <textarea
            value={remarks}
            onChange={(e) => {
              setRemarks(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="form-element">
          <button onClick={handleSubmit}>
            {loading ? <>Sending Score</> : <>Send Score</>}
          </button>
        </div>
        <div className="form-element">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </>
  );
};

export default Score;
