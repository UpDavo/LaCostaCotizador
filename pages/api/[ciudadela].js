// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Data from "../json/Data";

export default (req, res) => {
  const { query } = req;
  const { ciudadela } = query;
  res.statusCode = 200;
  if (ciudadela == "azul") {
    res.json(Data.azul);
  } else if (ciudadela == "verde") {
    res.json(Data.verde);
  }
};
