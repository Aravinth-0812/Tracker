import { useRouter } from "next/router";

function NoData({}: {
  href?: string;
  buttonTitle?: string;
  description?: string;
}) {
  return (
    <section className="py-4 bg-neutral-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-heading mb-3 text-2xl font-semibold">
            No data found
          </h2>
        </div>
      </div>
    </section>
  );
}

export default NoData;
