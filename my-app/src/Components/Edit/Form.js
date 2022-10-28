import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const user = useLocation();
  const navigate = useNavigate();

  const [subs, setSubs] = useState(user.state.subs);

  const handleChange = (e) => {
    setSubs(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    return await axios
      .patch(`http://localhost:8000/profile/${user.state.rfid}`, {
        subscription: subs,
      })
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form>
        <h1>Edit Subscription</h1>
        <input
          name="subscription"
          id="subscription"
          placeholder="Subscription"
          onChange={handleChange}
          value={subs}
        />
        <button onClick={handleSubmit}>Update</button>
      </form>
    </div>
  );
};

export default Edit;
