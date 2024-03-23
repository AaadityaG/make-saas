import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);


function Login(){
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (e) => {
      if (e !== "SIGNED_OUT") {
        navigate("/success");
      } else {
        navigate("/");
      }
  });

  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark" 
        providers={["discord"]}
      />
    </div>
  );
};

export default Login;
