import db from "./db/connection.js";
import routes from "./routes/index.js";

import express from "express";
import logger from "morgan";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

db.on("connected", () => {
  console.log("Connected to MongoDB!");
  app.listen(PORT, () =>
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(
          `Express server running in development on: http://localhost:${PORT}`
        )
  );
});
