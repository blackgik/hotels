import hotelsRouter from "./hotelsRoute.js";

export const baseRoute = (route) => {
	route.use(hotelsRouter);
	return route;
};
