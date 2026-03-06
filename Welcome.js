import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#f7f7f7"}}>
      
      <div style={{width:"320px",background:"#fff",padding:"20px",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.1)"}}>
        
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <button 
          style={{width:"100%",padding:"10px",background:"#6C25FF",color:"#fff",border:"none",borderRadius:"5px",marginTop:"10px"}}
          onClick={()=>navigate("/signup")}
        >
          Create Account
        </button>

        <button 
          style={{width:"100%",padding:"10px",background:"#ceb3ff",border:"none",borderRadius:"5px",marginTop:"10px"}}
          onClick={()=>navigate("/login")}
        >
          Already Registered? Login
        </button>

      </div>

    </div>
  );
}

export default Welcome;