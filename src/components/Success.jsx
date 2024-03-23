import React, {useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );
  

function Success() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user){
                    console.log(value.data.user)
                    setUser(value.data.user)
                }
            })
        }
        getUserData();
    }, [])

    async function signOutUser() {
        const {error} = await supabase.auth.signOut();
    }
  return (
    <div>
        {/* {Object.keys(user) !== 0 ?  */}
            <div>
                <div>You logged in Successfully</div>
                <button className='border-none block my-4 bg-[#ff6e6e] rounded p-2 text-[20px]' onClick={() => signOutUser()} >
                    Log out
                </button>
            </div>
            {/* : */}
            {/* <>
                <div>You are not logged in</div>
                <button className='border-none block my-4 bg-[#ff7878] rounded p-2 text-[20px]' onClick={() => { navigate("/") }} >
                    Go back
                </button>
            </> */}
        {/* } */}
        
    </div>
  );
}


export default Success;