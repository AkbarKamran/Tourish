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
const userLayer_1 = __importDefault(require("../../dataAccess/SQL/user/userLayer"));
const helper_1 = require("../../lib/helpers/helper");
exports.default = new (class TourService {
    constructor() {
        this.saveTourDetails = (account_type, tour_date, tour_destination, tour_departure, bus_name, bus_number, busImagesDetails, tourImagesDetails) => __awaiter(this, void 0, void 0, function* () {
            try {
                let account = 0;
                if (account_type.toLowerCase() === "driver") {
                    account = helper_1.User.Driver;
                }
                else if (account_type.toLowerCase() === "company") {
                    account = helper_1.User.Company;
                }
                else if (account_type.toLowerCase() === "manager") {
                    account = helper_1.User.Manager;
                }
                else if (account_type.toLowerCase() === "user") {
                    account = helper_1.User.User;
                }
                const tourData = yield userLayer_1.default.saveTourDetails(account, tour_date, tour_destination, tour_departure, bus_name, bus_number, busImagesDetails, tourImagesDetails);
                return tourData;
                // if (!type) {
                //   const userData = await getUserFromDb.user();
                //   return userData;
                // } else {
                //   return { androidUser: "Android Ios User" };
                // }
            }
            catch (error) {
                throw error.message;
            }
        });
        this.userType = (type) => __awaiter(this, void 0, void 0, function* () { });
    }
})();
//# sourceMappingURL=userService.js.map