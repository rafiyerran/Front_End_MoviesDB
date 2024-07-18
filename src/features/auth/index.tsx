import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostLogin } from "../../services/auth";

const Authentication = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(e);

        const payload ={ username, password };
        try{
            const response = await PostLogin(payload);
            if (response?.token) {
                localStorage.setItem('token', response?.token);
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen gap-2">
                <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                     className="border border-gray-400 rounded-sm"></input>

                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                     className="border border-gray-400 rounded-none"></input>

                <button className="bg-black text-white rounded-sm py-1 px-5">Login</button>    
            </form>
        </div>
    )
}

export default Authentication