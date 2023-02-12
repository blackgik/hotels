import {
	createRoomTypeService,
	fetchHotelsRoomType
} from "../service/hotelsService.js";

export const createHotelsRoomType = async (req, res) => {
	const { body } = req;

	const createdRoomType = await createRoomTypeService({ body });

	res.send({
		message: "created hotel room type",
		success: true,
		data: createdRoomType
	});
};

export const fetchHotelsRoomTypeHandler = async (req, res) => {
	const data = await fetchHotelsRoomType();

	res.send({
		message: "fetchd hotel room types",
		success: true,
		data
	});
};
