import { useState, useContext } from "react";
import { Context } from "../../context/userContext/Context";

export default function Profile() {
  const { user } = useContext(Context);
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="profile">
        <div className="profile-div">
          <img className="image" src={profilePicture || user.profilePicture} alt="" />
        </div>
        <div className="profile-info">
          <h4>{user.username}</h4>
          <span>{user.email}</span>
        </div>
      </div>
      <div className="upload">
        <input type="file" id="profilePicture" onChange={handlePictureUpload} style={{ display: "none" }} />
        <label htmlFor="profilePicture" className="uploadButton">Select Picture</label>
      </div>
    </>
  );
}
