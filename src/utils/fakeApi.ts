import cards from "../constants/home.json"
import Banner from "../constants/banner.json"
import ReviewData from "../constants/HomePageJson/review.json"

export const fetchCards = (): Promise<typeof cards> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cards);
      }, 1000); 
    });
  };


export const fetchBanner = (): Promise<typeof Banner> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Banner);
      }, 1000); 
    });
  };

export const fetchReview = (): Promise<typeof ReviewData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ReviewData);
      }, 1000); 
    });
  };

