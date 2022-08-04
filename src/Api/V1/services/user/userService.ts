import TourDbLayer from "../../dataAccess/SQL/user/userLayer";
import { akbar } from "../../lib/helpers/helper";
import { User } from "../../lib/helpers/helper";
export default new (class TourService {
  saveTourDetails = async (
    account_type: any,
    tour_date: any,
    tour_destination: any,
    tour_departure: any,
    bus_name: any,
    bus_number: any,
    busImagesDetails: any,
    tourImagesDetails: any
  ) => {
    try {
      let account = 0;
      if (account_type.toLowerCase() === "driver") {
        account = User.Driver;
      } else if (account_type.toLowerCase() === "company") {
        account = User.Company;
      } else if (account_type.toLowerCase() === "manager") {
        account = User.Manager;
      } else if (account_type.toLowerCase() === "user") {
        account = User.User;
      }
      const tourData = await TourDbLayer.saveTourDetails(
        account,
        tour_date,
        tour_destination,
        tour_departure,
        bus_name,
        bus_number,
        busImagesDetails,
        tourImagesDetails
      );
      return tourData;
      // if (!type) {
      //   const userData = await getUserFromDb.user();
      //   return userData;
      // } else {
      //   return { androidUser: "Android Ios User" };
      // }
    } catch (error: any) {
      throw error.message;
    }
  };
  getTourDetails = async (id: any) => {
    try {
      const details = await TourDbLayer.getTourDetails(id);
      return details;
    } catch (error) {
      throw error;
    }
  };
})();
