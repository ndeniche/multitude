import Multitude from "./multitude";

export const multitude = (selector: string) => {
	let select = new Multitude(document.querySelector(selector));
};
