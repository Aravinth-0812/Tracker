import { addRecords, sendMail, setStartDate } from "@/queries";
import CircularButton from "../CircularButton";

function StartStopButton({
  user,
  refetch,
  tableRecords,
}: {
  user: any;
  refetch: () => void;
  tableRecords: any;
}) {
  const handleStartOnClick = async () => {
    const name = user?.attributes?.name;
    let count = 1;
    tableRecords.find((item: any) => {
      if (item.name === name) {
        count = Number(item.count) + 1;
        return true;
      }
    });
    const createRecordData = {
      name,
      count: count.toString(),
    };
    await addRecords(createRecordData);
    const emailData = {
      from: "aravinth0812@gmail.com",
      to: user?.attributes?.email,
      subject: "Stay calm",
      text: "Not even useful for 10paise",
    };
    await sendMail(emailData);
    await setStartDate(new Date().getTime());
    await refetch();
  };

  const handleStopOnClick = async () => {
    const emailData = {
      from: "aravinth0812@gmail.com",
      to: user?.attributes?.email,
      subject: "Cheers",
      text: "Have a drink",
    };
    await sendMail(emailData);
    await setStartDate(0);
    await refetch();
  };
  return (
    <div className="flex justify-around w-full py-5 flex-wrap">
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
