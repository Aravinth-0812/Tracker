import { useMemo } from "react";
import CustomSignoutButton from "@/components/CustomSignoutButton";
import Progress from "@/components/Progress";
import StartStopButton from "@/components/StartStopButton";
import Table from "@/components/Table";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY, fetchRecords } from "@/queries";

function Home({ user }: { user: any }) {
  const { data: tableRecords, isLoading } = useQuery({
    queryKey: [QUERY_KEY.FECTH_RECORDS],
    queryFn: fetchRecords,
  });
  console.log("user", user);
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
      <div className="flex justify-end mr-3 border border-grey-150">
        <CustomSignoutButton />
      </div>
      <main className={`flex flex-col min-h-screen p-10`}>
        <div className="heading-x-large">
          {user?.attributes?.name ?? "Name"}
        </div>
        <StartStopButton user={user} />
        <Progress />
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
