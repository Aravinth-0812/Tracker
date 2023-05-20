import dynamoInstance from "@/services/dynamo";
import axios from "axios";

export const QUERY_KEY = {
  FECTH_RECORDS: "FECTH_RECORDS",
};

export const fetchRecords = async () => {
  const { data } = await dynamoInstance(`/getTrackerRecord`);
  return data;
};

export const addRecords = async (data: any) => {
  const { data: successData } = await dynamoInstance.put(
    `/createtrackerrecord`,
    {
      data: { name: "check1", count: "1" },
    }
  );
  return successData;
};

export const sendMail = async (data: any) => {
  const { data: successData } = await axios({
    method: "POST",
    url: `https://c3h6x5dao7.execute-api.eu-west-1.amazonaws.com/dev/send-email`,
    withCredentials: false,
    data,
  });
  return successData;
};
