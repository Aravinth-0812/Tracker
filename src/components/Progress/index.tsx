function Progress({ progressValue }: { progressValue: number | null }) {
  return (
    <>
      <div className="heading-x-large">Progress</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 my-4 dark:bg-gray-700">
        <div
          className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300"
          style={{ width: `${progressValue}%` }}
        ></div>
      </div>
    </>
  );
}

export default Progress;
