import { useMemo, useRef, useState } from "react";
import CustomSignoutButton from "@/components/CustomSignoutButton";
import Progress from "@/components/Progress";
import StartStopButton from "@/components/StartStopButton";
import Table from "@/components/Table";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY, fetchRecords, getStartStopTime } from "@/queries";

function Home({ user }: { user: any }) {
  const { data: tableRecords, isLoading } = useQuery({
    queryKey: [QUERY_KEY.FECTH_RECORDS],
    queryFn: fetchRecords,
  });
  const {
    data: startStopTime,
    isLoading: startStopLoading,
    refetch,
  } = useQuery({
    queryKey: [QUERY_KEY.FETCH_START_STOP],
    queryFn: getStartStopTime,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
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
        <StartStopButton
          user={user}
          refetch={refetch}
          tableRecords={tableRecords}
        />
        {!startStopLoading && <Progress startStopTime={startStopTime} />}
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
