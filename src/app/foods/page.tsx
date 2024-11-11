import dynamic from "next/dynamic";

// import FoodsFilterContainer from "./_components/filter/foods-filter-container";
// import MobileFilterContainer from "./_components/filter/mobile-filter-container";
// import FoodsContainer from "./_components/foods-container";

const FoodsContainer = dynamic(() => import("./_components/foods-container"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const FoodsFilterContainer = dynamic(
  () => import("./_components/filter/foods-filter-container"),
  { loading: () => <p>Loading...</p>, ssr: false }
);
const MobileFilterContainer = dynamic(
  () => import("./_components/filter/mobile-filter-container"),
  { loading: () => <p>Loading...</p>, ssr: false }
);
const Page = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-x-10 min-h-screen container space-y-10 mt-10">
      <div className=" md:hidden w-full">
        <MobileFilterContainer />
      </div>
      <div className="hidden md:block md:w-[314px] flex-initial">
        <FoodsFilterContainer />
      </div>
      <div className="flex-auto">
        <FoodsContainer />
      </div>
    </div>
  );
};

export default Page;
