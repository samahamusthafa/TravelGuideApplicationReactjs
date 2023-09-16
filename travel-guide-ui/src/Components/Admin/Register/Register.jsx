import React from 'react'

function AdminRegister() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md sm:w-96 w-full">
      <h2 className="text-3xl font-semibold text-center mb-4 text-indigo-600">
        Admin Registration
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
          />
        </div>
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
        {/* Additional admin-specific fields can be added here */}
        <div className="mb-8">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded-md py-2 font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Register as Admin
          </button>
        </div>
      </form>
      <p className="text-center text-gray-600 text-sm">
        Already an admin?{' '}
        <a href="/admin/login" className="text-indigo-600 hover:underline">
          Admin Login
        </a>
      </p>
    </div>
  </div>
  )
}

export default AdminRegister;
