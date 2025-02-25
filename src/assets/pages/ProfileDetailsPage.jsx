import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";

const ProfileDetailPage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(
      `https://web.ics.purdue.edu/~maddy/profile-app/fetch-data-with-id.php?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [id]);

  return (
    <Wrapper>
      <>
        {!profile ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="profile-details">
              <img src={profile.image_url} alt={profile.name}></img>
              <p>Name: {profile.name}</p>
              <p>Email: {profile.email}</p>
              <p>Bio: {profile.bio}</p>
              <link to="edit"></link>
            </div>
          </>
        )}
      </>
    </Wrapper>
  );
};

export default ProfileDetailPage;
