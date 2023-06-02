import dynamoInstance, { baseURL } from "@/services/dynamo";
import axios from "axios";

export const QUERY_KEY = {
  FECTH_RECORDS: "FECTH_RECORDS",
  FETCH_START_STOP: "FETCH_START_STOP",
};

export const fetchRecords = async () => {
  try {
    const { data } = await dynamoInstance(`/getTrackerRecord`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addRecords = async (data: {
  name: string;
  count: string | number;
}) => {
  try {
    await axios({
      method: "post",
      url: `${baseURL}/create-track-record`,
      data: data,
    });
    await fetchRecords();
  } catch (err) {
    console.log(err);
  }
};

export const sendMail = async (data: any) => {
  try {
    const { data: successData } = await axios({
      method: "POST",
      url: `${baseURL}/send-email`,
      withCredentials: false,
      data,
    });
    return successData;
  } catch (err) {
    console.log(err);
  }
};

export const getStartStopTime = async () => {
  try {
    const { data } = await dynamoInstance(`/get-timer-date`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const setStartDate = async (time: number) => {
  try {
    await axios({
      method: "POST",
      url: `${baseURL}/set-start-date`,
      withCredentials: false,
      data: {
        time,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
