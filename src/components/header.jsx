import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const Header = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem('theme', 'light');
		}
	}, [darkMode]);

	return (
		<header className="relative p-4 font-bold">
			<h1 className="text-2xl">BrightPixel Studio</h1>
			<button
				onClick={() => setDarkMode(!darkMode)}
				className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
		aria-label="Toggle Dark Mode"
				
			>
				{darkMode ? (
					<SunIcon className="h-6 w-6 text-yellow-400" />
				) : (
					<MoonIcon className="h-6 w-6 text-gray-800" />
				)}
			</button>
		</header>
	);
}

export default Header;