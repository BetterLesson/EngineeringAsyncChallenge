import app from "../app";

export const generateSampleReservations = () => {
  app.service("reservation").create();
};
