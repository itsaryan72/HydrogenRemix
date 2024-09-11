import React from 'react';
import { Link } from '@remix-run/react';

function Navbar() {
  return (
    <nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">

		<div class="indigo-600 text-indigo-500 md:order-1">
	
        <svg width="40" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  style={{ fill: '#4f46e5' }}>
        <path d="M12 2L2 7l10 5 10-5L12 2zm0 10.6L4.24 8.88 12 5.4l7.76 3.48L12 12.6zM12 16l10-5v9l-10 5-10-5V11l10 5z"/>
      </svg>
		</div>
		<div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul class="flex font-semibold justify-between">

				<li class="md:px-4 md:py-2 text-indigo-500"><a href="/Dashboard">Dashboard</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/Search">Search</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/Explore">Explore</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/About">About</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/Contact">Contact</a></li>
			</ul>
		</div>
		<div class="order-2 md:order-3">
			<button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <span>Login</span>
            </button>
		</div>
	</div>
</nav>
  );
}

export default Navbar;
