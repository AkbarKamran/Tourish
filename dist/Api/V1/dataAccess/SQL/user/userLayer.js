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
const baseQuery_1 = __importDefault(require("../common/baseQuery"));
exports.default = new (class TourDbLayer {
    constructor() {
        this.saveTourDetails = (account_type, tour_date, tour_destination, tour_departure, bus_name, bus_number, busImagesDetails, tourImagesDetails) => __awaiter(this, void 0, void 0, function* () {
            try {
                const saveDetailsQuery = `INSERT INTO dbo.neTour(tour_destination,tour_date,tour_departure,bus_name,bus_number,account_type) VALUES('${tour_destination}','${tour_date}','${tour_departure}','${bus_name}','${bus_number}',${account_type}) SELECT SCOPE_IDENTITY() as id`;
                const tourId = yield baseQuery_1.default.runQuery(saveDetailsQuery);
                // console.log(tourId[0].id);
                for (const image of busImagesDetails) {
                    const busQuery = `INSERT INTO dbo.neBusImages(tourId,busImages) VALUES (${tourId[0].id},'${image}')`;
                    yield baseQuery_1.default.runQuery(busQuery);
                }
                for (const image of tourImagesDetails) {
                    const busQuery = `INSERT INTO dbo.neTourImages(tourId,tourImages) VALUES (${tourId[0].id},'${image}')`;
                    yield baseQuery_1.default.runQuery(busQuery);
                }
                return tourId[0].id;
                // if (!type) {
                //   const query = `select COUNT(username) as totalNeeoUser from dbo.neUserExtension`;
                //   const allUser: any = await baseQuery.runQuery(query);
                //   akbar(allUser);
                //   akbar("abdul Rehman");
                //   return allUser[0].totalNeeoUser;
                // }
            }
            catch (error) {
                throw error;
            }
        });
        this.getTourDetails = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getTour = `select * from dbo.neTour where ID = ${id}`;
                const getTourImages = `select * from dbo.neTourImages where tourId = ${id}`;
                const getBusImages = `select  * from dbo.neBusImages where tourId = ${id}`;
                const tour = yield baseQuery_1.default.runQuery(getTour);
                const busImages = yield baseQuery_1.default.runQuery(getBusImages);
                const tourImages = yield baseQuery_1.default.runQuery(getTourImages);
                // console.log(tour);
                // console.log(busImages);
                // console.log(tourImages);
                let data = tour[0];
                data.images = {
                    bus_images: busImages,
                    tour_images: tourImages,
                };
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
})();
//# sourceMappingURL=userLayer.js.map