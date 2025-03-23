import { Link } from "react-router-dom";
import { useState } from "react";

import SleekSpeak from "../../../components/svgs/SleekSpeak";

import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { useMutation} from "@tanstack/react-query";
import SS_logo from "../../../assets/SS_logo.svg";


const SignUpPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		username: "",
		fullName: "",
		password: "",
	});

	const { mutate, isError, isPending, error } = useMutation({
		mutationFn: async ({ email, username, fullName, password }) => {
			try {
				const res = await fetch("/api/auth/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, username, fullName, password }),
				});

				const data = await res.json();
				if (!res.ok) throw new Error(data.error || "Failed to create account");
				return data;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		onSuccess: () => {
			toast.success("Account created successfully");

		},
	});

	const handleSubmit = (e) => {
		e.preventDefault(); //page will not reload
		mutate(formData);
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
				<form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
					<img src={SS_logo} alt="SleekSpeak" className="w-50 h-20 bg-purple-700 rounded-full lg:hidden" />
					<h1 className='text-4xl font-extrabold text-white'>Join today.</h1>
					<label className='input input-bordered rounded flex items-center gap-2'>
						<MdOutlineMail />
						<input
							type='email'
							className='grow'
							placeholder='Email'
							name='email'
							onChange={handleInputChange}
							value={formData.email}
						/>
					</label>
					<label className='input input-bordered rounded flex items-center gap-2'>
						<FaUser />
						<input
							type='text'
							className='grow '
							placeholder='Username'
							name='username'
							onChange={handleInputChange}
							value={formData.username}
						/>
					</label>
					<label className='input input-bordered rounded flex items-center gap-2'>
						<MdDriveFileRenameOutline />
						<input
							type='text'
							className='grow'
							placeholder='Full Name'
							name='fullName'
							onChange={handleInputChange}
							value={formData.fullName}
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
					<button className='btn rounded-full border-purple-700 btn-primary text-white bg-purple-700'>
						{isPending ? "Loading..." : "Sign up"}
					</button>
					{isError && <p className='text-red-500'>{error.message}</p>}
				</form>
				<div className='flex flex-col gap-2 mt-4'>
					<p className='text-white text-lg'>Already have an account?</p>
					<Link to='/login'>
						<button className='btn rounded-full border-purple-700 btn-primary text-white hover:bg-purple-700 btn-outline w-full'>Login</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default SignUpPage;