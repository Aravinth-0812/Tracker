import { QUERY_KEY, addRecords, fetchRecords, sendMail } from "@/queries";
import CircularButton from "../CircularButton";
import { useQuery } from "@tanstack/react-query";

function StartStopButton({ user }: { user: any }) {
  const { data: tableRecords, isLoading } = useQuery({
    queryKey: [QUERY_KEY.FECTH_RECORDS],
    queryFn: fetchRecords,
  });

  const handleStartOnClick = async () => {
    const name = user?.attributes?.name;
    let count = 0;
    tableRecords.find((item: any) => {
      if (item.name === name) {
        count = item.count;
        return true;
      }
    });
    const createRecordData = {
      name,
      count,
    };
    await addRecords(createRecordData);
    // const emailData = {
    //   from: "aravinth0812@gmail.com",
    //   to: user?.attributes?.email,
    //   subject: "Stay calm",
    //   text: "Not even useful for 10paise",
    // };
    // await sendMail(emailData);
  };
  const handleStopOnClick = () => {};
  return (
    <div className="flex justify-around w-full py-5">
      <CircularButton
        name={"Start"}
        handleOnClick={handleStartOnClick}
        className="bg-green-400 hover:bg-green-800"
      />
      <CircularButton
        name={"Stop"}
        handleOnClick={handleStopOnClick}
        className="bg-rose-400 hover:bg-rose-800"
      />
    </div>
  );
}

export default StartStopButton;
