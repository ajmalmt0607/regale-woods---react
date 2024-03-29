import axios from "axios";

const productionUrl = "http://localhost:1337/api";

export const customFetch = axios.create({ baseURL: productionUrl });

export const formatPrice = (price) => {
	const rupeesAmount = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "INR",
	}).format((price / 100).toFixed(2));
	return rupeesAmount;
};

export const generateAmountOptions = (number) => {
	return Array.from({ length: number }, (_, index) => {
		const amount = index + 1;
		return (
			<option key={amount} value={amount}>
				{amount}
			</option>
		);
	});
};
