import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#f7f7f7"}}>

      <div style={{width:"320px",background:"#fff",padding:"20px",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.1)"}}>

        <h2>Create your PopX account</h2>

        <input placeholder="Full Name" style={{width:"100%",padding:"8px",marginTop:"10px"}} />
        <input placeholder="Phone number" style={{width:"100%",padding:"8px",marginTop:"10px"}} />
        <input placeholder="Email address" style={{width:"100%",padding:"8px",marginTop:"10px"}} />
        <input placeholder="Password" type="password" style={{width:"100%",padding:"8px",marginTop:"10px"}} />
        <input placeholder="Company name" style={{width:"100%",padding:"8px",marginTop:"10px"}} />

        <button 
          style={{width:"100%",padding:"10px",background:"#6C25FF",color:"#fff",border:"none",borderRadius:"5px",marginTop:"15px"}}
          onClick={()=>navigate("/profile")}
        >
          Create Account
        </button>

      </div>

    </div>
  );
}

export default Signup;