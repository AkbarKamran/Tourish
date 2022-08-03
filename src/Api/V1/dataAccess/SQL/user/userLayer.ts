import baseQuery from "../common/baseQuery";
import { akbar } from "../../../lib/helpers/helper";

export default new (class TourDbLayer {
  public saveTourDetails = async (
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
      const saveDetailsQuery = `INSERT INTO dbo.neTour(tour_destination,tour_date,tour_departure,bus_name,bus_number,account_type) VALUES('${tour_destination}','${tour_date}','${tour_departure}','${bus_name}','${bus_number}',${account_type}) SELECT SCOPE_IDENTITY() as id`;
      const tourId: any = await baseQuery.runQuery(saveDetailsQuery);

      // console.log(tourId[0].id);
      for (const image of busImagesDetails) {
        const busQuery = `INSERT INTO dbo.neBusImages(tourId,busImages) VALUES (${tourId[0].id},'${image}')`;
        await baseQuery.runQuery(busQuery);
      }
      for (const image of tourImagesDetails) {
        const busQuery = `INSERT INTO dbo.neTourImages(tourId,tourImages) VALUES (${tourId[0].id},'${image}')`;
        await baseQuery.runQuery(busQuery);
      }

      return tourId[0].id;
      // if (!type) {
      //   const query = `select COUNT(username) as totalNeeoUser from dbo.neUserExtension`;
      //   const allUser: any = await baseQuery.runQuery(query);
      //   akbar(allUser);
      //   akbar("abdul Rehman");
      //   return allUser[0].totalNeeoUser;
      // }
    } catch (error) {
      throw error;
    }
  };
})();
