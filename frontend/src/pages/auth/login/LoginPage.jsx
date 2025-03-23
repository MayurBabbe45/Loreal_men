import { useState } from "react";
import { Link } from "react-router-dom";

// import XSvg from "../../../components/svgs/X";
import SleekSpeak from "../../../components/svgs/SleekSpeak";

import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import SS_logo from "../../../assets/SS_logo.svg";

const LoginPage = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const queryClient = useQueryClient();

	const {mutate:loginMutation,isPending,isError,error} = useMutation({
		mutationFn: async ({username,password}) => {
			try {
				const res = await fetch("/api/auth/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ username, password }),
				});

				const data = await res.json();

				if (!res.ok) throw new Error(data.error || "Failed to login");

			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			//refetch the authUser
			queryClient.invalidateQueries({queryKey:["authUser"]});
		}
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		loginMutation(formData);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};



	return (
		<div className='max-w-screen-xl mx-auto flex h-screen'>
			<div className='flex-1 hidden lg:flex items-center justify-center'>
				<img src={SS_logo} alt="SleekSpeak" className="w-10 h-10 md:w-100 md:h-100" />
			</div>
			<div className='flex-1 flex flex-col justify-center items-center'>
				
				<img src={SS_logo} alt="SleekSpeak" className="w-50 h-20  bg-purple-700 rounded-full lg:hidden" />
				<form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
					<h1 className='text-4xl font-extrabold text-white'>{"Let's"} go.</h1>
					<label className='input input-bordered rounded flex items-center gap-2'>
						<MdOutlineMail />
						<input
							type='text'
							className='grow'
							placeholder='username'
							name='username'
							onChange={handleInputChange}
							value={formData.username}
						/>
					</label>

					<label className='input input-bordered rounded flex items-center gap-2'>
						<MdPassword />
						<input
							type='password'
							className='grow'
							placeholder='Password'
							name='password'
							onChange={handleInputChange}
							value={formData.password}
						/>
					</label>
					<button className='btn rounded-full border-purple-700 btn-primary bg-purple-700 text-white'>
						{isPending ? "Loading..." : "Login"}
					</button>
					{isError && <p className='text-red-500'>{error.message}</p>}
				</form>
				<div className='flex flex-col gap-2 mt-4'>
					<p className='text-white text-lg'>{"Don't"} have an account?</p>
					<Link to='/signup'>
						<button className='btn rounded-full border-purple-700 hover:bg-purple-700 btn-primary text-white btn-outline w-full'>Sign up</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default LoginPage;