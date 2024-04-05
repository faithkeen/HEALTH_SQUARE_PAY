
import WelcomeBack from "../../assets/images/LoginImg.png";


function LoginForm() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="">
        <img src= {WelcomeBack} alt="Image" className="w-100 h-50 object-cover rounded-md" />
      </div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="font-inter text-6xl font-semibold leading-[62px] text-center text-[#090914]">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Log in to your account.</p>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-[532.44px] h-[60px] border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-[532.44px] h-[60px] border border-gray-300 rounded-md" />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">Forgot your password? <a href="#" className="text-cyan-500">Click here</a></p>
            <button type="submit" className="px-4 py-2 bg-cyan-500 text-white rounded-md">Login</button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Sign up with Google</p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account? <a href="#" className="text-cyan-500">Sign up here</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
