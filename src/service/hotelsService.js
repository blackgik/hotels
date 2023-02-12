import roomTypeModel from "../module/roomTypeModel.js";

export const createRoomTypeService = async ({ body }) => {
	const roomTypeData = {
		...body
	};

	const createRoomType = await roomTypeModel.create(roomTypeData);

	return createRoomType;
};

export const fetchHotelsRoomType = async () => {
	const data = await roomTypeModel.find();

	return data;
};
