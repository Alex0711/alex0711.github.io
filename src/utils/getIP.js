const getIPData = async () => {
	try {
		const ipResponse = await fetch("https://ipapi.co/json/");
		const ipData = await ipResponse.json();
		return ipData;
	} catch (err) {
	  	console.error("getIPDataError:", err);
	}
};

export default getIPData;