import Url from "../models/url.model.js";
import { nanoid } from "nanoid";

export const createUrl = async (req, res) => {
  const { longUrl } = req.body;
  try {
    const existingUrl = await Url.findOne({ longUrl });
    if (existingUrl) {
      res.json({
        shortUrl: `${req.protocol}://${req.get("host")}/${
          existingUrl.shortUrl
        }`,
      });
    } else {
      const shortUrl = nanoid(10);
      const url = new Url({ longUrl, shortUrl });
      await url.save();
      res.json({
        shortUrl: `${req.protocol}://${req.get("host")}/${shortUrl}`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getUrl = async (req, res) => {
  const { shortUrl } = req.params;
  try {
    const url = await Url.findOne({ shortUrl });
    if (url) {
      res.redirect(url.longUrl);
    } else {
      res.status(404).json({ error: "URL not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
