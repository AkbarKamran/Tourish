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

  public getTourDetails = async (id: any) => {
    try {
      const getTour = `select * from dbo.neTour where ID = ${id}`;
      const getTourImages = `select * from dbo.neTourImages where tourId = ${id}`;
      const getBusImages = `select  * from dbo.neBusImages where tourId = ${id}`;

      const tour: any = await baseQuery.runQuery(getTour);
      const busImages: any = await baseQuery.runQuery(getBusImages);
      const tourImages: any = await baseQuery.runQuery(getTourImages);

      // console.log(tour);
      // console.log(busImages);
      // console.log(tourImages);

      let data = tour[0];
      data.images = {
        bus_images: busImages,
        tour_images: tourImages,
      };
      return data;
    } catch (error) {
      throw error;
    }
  };
})();
