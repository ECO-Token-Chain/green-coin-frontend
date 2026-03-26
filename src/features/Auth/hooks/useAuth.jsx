import { useContext } from "react";
import { Authcontext } from "../Context/Authcontext";
import { login, register } from "../services/auth.service";

function useAuth(){
    const { user, setUser ,loading, setLoading } = useContext(Authcontext);
    async function handleLogin(identifier, password){
        setLoading(true);
        try{
            const res = await login(identifier, password);
            setUser(res.user);
        }catch(err){
            setUser(null);
            console.log(err);
        }finally{
            setLoading(false);
        }
    }
    async function handleRegister(name,email,password,rollNo){
        setLoading(true);
        try{
            const res = await register(name,email,password,rollNo);
            setUser(res.user);
        }catch(err){
            setUser(null);
            console.log(err);
        }finally{
            setLoading(false);
        }
    }
    return { user, loading , handleLogin , handleRegister };
}

export default useAuth;