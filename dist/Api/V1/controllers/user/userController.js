"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseHandler_1 = require("../../lib/helpers/response/responseHandler");
const userService_1 = __importDefault(require("../../services/user/userService"));
const upload_1 = __importDefault(require("../../lib/helpers/ImageUpload/upload"));
exports.default = new (class Tour {
    constructor() {
        this.getTourDetails = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { account_type, tour_date, tour_destination, tour_departure, bus_name, bus_number, } = req.body;
                if (!!!account_type ||
                    !!!tour_date ||
                    !!!tour_destination ||
                    !!!tour_departure ||
                    !!!bus_name ||
                    !!!bus_number) {
                    return (0, responseHandler_1.successResponse)(400, "Invalid Parameter", "", res);
                }
                try {
                    const images = req.files;
                    let busImages = images.bus_images;
                    let tour_images = images.tour_images;
                    let busImagesDetails = [];
                    let tourImagesDetails = [];
                    for (const image of busImages) {
                        const cloudImageUrl = yield (0, upload_1.default)(image.path, image.filename);
                        busImagesDetails.push(cloudImageUrl.url);
                    }
                    for (const image of tour_images) {
                        const cloudImageUrl = yield (0, upload_1.default)(image.path, image.filename);
                        tourImagesDetails.push(cloudImageUrl.url);
                    }
                    const saveDetails = yield userService_1.default.saveTourDetails(account_type, tour_date, tour_destination, tour_departure, bus_name, bus_number, busImagesDetails, tourImagesDetails);
                    if (saveDetails) {
                        const data = {
                            account_type: account_type,
                            tour_date: tour_date,
                            tour_destination: tour_destination,
                            tour_departure: tour_departure,
                            bus_name: bus_name,
                            bus_number: bus_number,
                            images: {
                                bus_images: busImagesDetails,
                                tour_images: tourImagesDetails,
                            },
                        };
                        return (0, responseHandler_1.successResponse)(200, "All Tour Details", data, res);
                    }
                    else {
                        (0, responseHandler_1.successResponse)(200, "Something Went wrong", "", res);
                    }
                }
                catch (error) {
                    (0, responseHandler_1.dbError)([{ valid: false, data: error.message }], res);
                }
                // const validCheck = await validation.validTour(type);
                // if (validCheck) {
                //   try {
                //     const allUser = await userMobile.getUser();
                //     successResponse(200, "All Users", [{ allUser: allUser }], res);
                //   } catch (error) {
                //     dbError(error, res);
                //   }
                // } else {
                //   const userType = await validation.typeOfUser(type);
                //   if (userType.valid) {
                //     successResponse(200, "Users", [{ data: userType.type }], res);
                //   } else {
                //     return successResponse(400, "Invalid Parameter", [{ data: "" }], res);
                //   }
                // }
            }
            catch (error) {
                (0, responseHandler_1.internalServerError)("Server Error", [{ valid: false, data: error.message }], res);
            }
        });
    }
})();
//# sourceMappingURL=userController.js.map