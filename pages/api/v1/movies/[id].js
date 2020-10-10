const fs = require("fs");
const movies = require("../../../../server/data.json");

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const movie = movies.find((m) => m.id === id);

        res.status(200).json({
          status: 200,
          message: "Success",
          data: movie,
        });

        console.log({
          status: 200,
          message: "Success",
          data: movie,
        });
      } catch (error) {
        res.status(500).json({
          status: 500,
          message: error.message,
        });

        console.log({
          status: 500,
          message: error.message,
        });
      }
      break;
    case "DELETE":
      try {
        const movieIndex = movies.findIndex((m) => m.id === id);
        movies.splice(movieIndex, 1);

        const pathToFile = "D:/Learning/NextJs/movies-app/server/data.json";
        const stringifiedData = JSON.stringify(movies, null, 2);

        fs.writeFile(pathToFile, stringifiedData, (err) => {
          if (err) {
            console.log({
              status: 500,
              message: err.message,
            });

            return res.status(500).json({
              status: 500,
              message: err.message,
            });
          }

          res.json({
            status: 200,
            message: "success",
          });

          console.log({
            status: 200,
            message: "success",
          });
        });
      } catch (error) {
        res.status(500).json({
          status: 500,
          message: error.message,
        });

        console.log({
          status: 500,
          message: error.message,
        });
      }
      break;
    default:
      break;
  }
};
