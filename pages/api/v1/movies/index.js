const fs = require("fs");
const movies = require("../../../../server/data.json");

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        res.status(200).json({
          status: 200,
          message: "Success",
          data: movies,
        });

        console.log({
          status: 200,
          message: "Success",
          data: movies,
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
    case "POST":
      try {
        const movie = req.body;
        movies.push(movie);

        const pathToFile = "D:/Learning/NextJs/movies-app/server/data.json";
        const stringifiedData = JSON.stringify(movies, null, 2);

        fs.writeFile(pathToFile, stringifiedData, (err) => {
          if (err) {
            res.status(500).json({
              status: 500,
              message: err.message,
            });

            console.log({
              status: 500,
              message: err.message,
            });
          }

          res.json({
            status: 200,
            message: "success",
            data: { ...movie },
          });

          console.log({
            status: 200,
            message: "success",
            data: { ...movie },
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
