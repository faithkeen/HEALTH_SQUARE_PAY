import { useState } from 'react';

const CreateAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false); 


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

      {
        if (!agreeTerms) {
          alert('Please agree to the Terms & Conditions');
          return;
        }
    }

    const formData = {
      fullName,
      email,
      password,
    };

    try {
      // Perform API call to submit form data to backend
      const response = await fetch('backend_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully:', formData);
      } else {
        // Handle errors from backend
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('An error occurred. Please try again later.');
    }
  };

  // Function to handle signing up with Google
  const handleSignUpWithGoogle = () => {
    console.log('Signing up with Google...');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-white">
      <div className="mb-8">
        <h1 className="text-4xl text-black font-semibold text-center">Create Account</h1>
      </div>

      <p className="bg-gray-700 px-4 py-2 rounded">Create a free Healthsquare Pay account</p>


      <form className="mt-8 w-full max-w-xs" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-black text-sm mb-2">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="First and Last Name"
            className="w-full px-4 py-2  text-black rounded border border-gray-400"
          
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-2 text-black">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 text-black rounded border border-gray-400"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm text-black mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 text-black rounded border border-gray-400"
          
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirm_password" className="block text-black text-sm mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 text-black rounded border border-gray-400"
           
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            className="mr-2"
            checked={agreeTerms} 
            onChange={(e) => setAgreeTerms(e.target.checked)} 
          />
          <label htmlFor="agreeTerms" className="text-sm text-gray-700">
            I agree with the <a href="#" className='text-cyan-400'>Terms & Conditions</a> of Healthsquare Pay
          </label>
        </div>


        <button type="submit" className="bg-cyan-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">Sign Up</button>
      </form>

      {/* Sign Up with Google */}
      <div
        className="mt-4 bg-white hover:bg-blue-600 text-blue-500 font-semibold py-2 px-4 rounded cursor-pointer"
        style={{
          width: 'fit-content',
        }}
        onClick={handleSignUpWithGoogle}
      >
        Sign Up with Google
      </div>

      <p className="mt-4 text-black">Already have an account? <a href="#" className="text-cyan-400">Login Here</a></p>
    </div>
  );
}

export default CreateAccount;
