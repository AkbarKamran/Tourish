import { Request, Response, NextFunction } from "express";
import {
  successResponse,
  internalServerError,
  dbError,
} from "../../lib/helpers/response/responseHandler";
import TourService from "../../services/user/userService";
import validation from "./validation";
import { akbar } from "../../lib/helpers/helper";
import uploadImageToCloud from "../../lib/helpers/ImageUpload/upload";
export default new (class Tour {
  public saveTourDetails = async (req: Request, res: Response) => {
    try {
      const {
        account_type,
        tour_date,
        tour_destination,
        tour_departure,
        bus_name,
        bus_number,
      } = req.body;

      if (
        !!!account_type ||
        !!!tour_date ||
        !!!tour_destination ||
        !!!tour_departure ||
        !!!bus_name ||
        !!!bus_number
      ) {
        return successResponse(400, "Invalid Parameter", "", res);
      }
      try {
        const images: any = req.files;
        let busImages = images.bus_images;
        let tour_images = images.tour_images;

        let busImagesDetails: any = [];
        let tourImagesDetails: any = [];
        for (const image of busImages) {
          const cloudImageUrl: any = await uploadImageToCloud(
            image.path,
            image.filename
          );
          busImagesDetails.push(cloudImageUrl.url);
        }
        for (const image of tour_images) {
          const cloudImageUrl: any = await uploadImageToCloud(
            image.path,
            image.filename
          );
          tourImagesDetails.push(cloudImageUrl.url);
        }

        const saveDetails = await TourService.saveTourDetails(
          account_type,
          tour_date,
          tour_destination,
          tour_departure,
          bus_name,
          bus_number,
          busImagesDetails,
          tourImagesDetails
        );
        if (saveDetails) {
          const data = {
            id: saveDetails,
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

          return successResponse(200, "Tour Details", data, res);
        } else {
          successResponse(200, "Something Went wrong", "", res);
        }
      } catch (error: any) {
        dbError([{ valid: false, data: error.message }], res);
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
    } catch (error: any) {
      internalServerError(
        "Server Error",
        [{ valid: false, data: error.message }],
        res
      );
    }
  };
  public getTourDetails = async (req: Request, res: Response) => {
    try {
      const { id } = req.query;

      if (!!!id) {
        return successResponse(400, "Invalid Id parameter", "", res);
      }
      try {
        const data = await TourService.getTourDetails(id);
        return successResponse(200, "Tour Details", data, res);
      } catch (error: any) {
        dbError([{ valid: false, data: error.message }], res);
      }
    } catch (error: any) {
      internalServerError(
        "Server Error",
        [{ valid: false, data: error.message }],
        res
      );
    }
  };
})();
