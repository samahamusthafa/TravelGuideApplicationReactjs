import React from 'react'

function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md sm:w-96 w-full">
        <h2 className="text-3xl font-semibold text-center mb-4 text-indigo-600">
          Admin Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              name="password"
              placeholder="********"
              required
            />
          </div>
          <div className="mb-8">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white rounded-md py-2 font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 text-sm">
          Don't have an admin account?{' '}
          <a href="/admin/register" className="text-indigo-600 hover:underline">
            Register as Admin
          </a>
        </p>
      </div>
    </div>
  )
}

export default AdminLogin
