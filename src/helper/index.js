import Axios from "axios";
import { AppConfigs } from "../settings";

export const getAxios = () => {
  return Axios.create({
    baseURL: AppConfigs.apiBaseUrl,
  });
};

export const socialMediaUrlTypes = [
  { value: "Facebook", label: "Facebook" },
  { value: "Instagram", label: "Instagram" },
  { value: "Twitter", label: "Twitter" },
  { value: "TikTok", label: "TikTok" }
]
