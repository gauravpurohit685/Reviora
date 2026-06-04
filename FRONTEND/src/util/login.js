const login = async (setIsLoginSuccessful, setIsAuthenticated, email, password, navigate) => {

  try{

    if(!email || !password){
        setIsLoginSuccessful(false);
        throw new Error("Email and password cannot be empty!");
    }

    console.log(process.env.LOGIN_API);
    const res = await fetch(process.env.LOGIN_API,
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailId: email,
                password
            })
        }
    );

    if(!res.ok){
        throw new Error("Invalid credentials!");
    }

    setIsLoginSuccessful(true);
    setIsAuthenticated(true);
    navigate("/");

  }  

  catch(err){
        console.log(err.message);
        setIsLoginSuccessful(false);
  }

}


export default login;