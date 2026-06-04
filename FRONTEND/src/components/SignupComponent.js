const SignupComponent = () => {
    
    return (
        <div className="flex justify-center items-center min-h-screen">
            <fieldset className="fieldset bg-accent border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">SignUp</legend>

                <label className="label text-accent-content">Firstname</label>
                <input type="text" className="input" placeholder="Firstname" />

                <label className="label text-accent-content">LastName</label>
                <input type="text" className="input" placeholder="LastName" />

                <label className="label text-accent-content">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label text-accent-content">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <label className="label text-accent-content">Re-enter Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-ghost mt-4">SignUp</button>
            </fieldset>
        </div>
    )

}

export default SignupComponent;