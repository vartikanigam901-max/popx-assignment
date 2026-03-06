import React from "react";

function Profile() {

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#f7f7f7"}}>

      <div style={{width:"320px",background:"#fff",padding:"20px",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.1)"}}>

        <h2>Account Settings</h2>

        <p><b>Name:</b> Marry Doe</p>
        <p><b>Email:</b> marry@example.com</p>

        <p style={{marginTop:"10px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

      </div>

    </div>
  );
}

export default Profile;