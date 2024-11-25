import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default Page;
