

function ForgottenPasswordModal() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
            <div className="w-[532.44px] h-[383px] bg-white rounded-md shadow-lg p-8 relative">
                <h2 className="text-4xl font-bold text-black mb-4">Forgotten Password</h2>
                <p className="text-sm text-gray-600 mb-6">Fill in your details below to regain access to your account.</p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-[472.44px] h-[55px] border border-gray-300 rounded-md" placeholder="Email Address" />
                    </div>
                    <button type="submit" className="w-[472px] h-[65px] bg-cyan-500 text-white rounded-md px-4 py-2">Reset My Password</button>
                </form>
                <p className="text-sm text-gray-600 mt-4">Change your mind? <a href="#" className="text-cyan-500">Back to login page</a></p>
            </div>
        </div>
    );
}

export default ForgottenPasswordModal;
