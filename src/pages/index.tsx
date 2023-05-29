import { useMemo, useRef, useState } from "react";
import CustomSignoutButton from "@/components/CustomSignoutButton";
import Progress from "@/components/Progress";
import StartStopButton from "@/components/StartStopButton";
import Table from "@/components/Table";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY, fetchRecords } from "@/queries";
import { useCustomWebSocket } from "@/hooks/useCustomWebSocket";

function Home({ user }: { user: any }) {
  const { data: tableRecords, isLoading } = useQuery({
    queryKey: [QUERY_KEY.FECTH_RECORDS],
    queryFn: fetchRecords,
  });
  const { sendMessage, data: liveData } = useCustomWebSocket();
  const tableProps = useMemo(() => {
    if (tableRecords) {
      return {
        columns: ["name", "count"],
        rows: tableRecords,
      };
    }
  }, [tableRecords]);

  return (
    <>
      <div className="w-full bg-slate-900 fixed">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-widest pl-4 text-indigo-300">
            Tracker
          </h1>
          <div>
            <CustomSignoutButton />
          </div>
        </div>
      </div>
      <main className={`flex flex-col min-h-screen px-10 pb-10 pt-20`}>
        <div className="heading-x-large">
          {user?.attributes?.name ?? "Name"}
        </div>
        <StartStopButton user={user} sendMessage={sendMessage} />
        <Progress progressValue={liveData?.data} />
        {isLoading ? (
          ""
        ) : (
          <Table tableProps={tableProps} isLoading={isLoading} />
        )}
      </main>
    </>
  );
}

export default withAuthenticator(Home);
