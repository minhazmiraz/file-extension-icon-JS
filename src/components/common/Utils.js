export const convertToBase64 = (iconString) => {
	try {
		return btoa(iconString);
	} catch (err) {
		return Buffer.from(iconString).toString("base64");
	}
};
