import { fetchFromServer } from "@/app/actions/fetchFromServer";
import AccountBunddles from "@/components/AccountBunddles";
import AccountCards from "@/components/AccountCards";
import AccountContribution from "@/components/AccountContribution";
import AccountEmailprefrence from "@/components/AccountEmailprefrence";
import AccountProfile from "@/components/AccountProfile";
import AccountSlider from "@/components/common/AccountSlider";
import Table from "@/components/common/Table";
import { user } from "@/utils/cybersifyApi";

const page = async({ params }: any) => {
  const type = params.type[0];
  console.log(type, "uuusufusd");
  // const api1: any = {
  //   url: user?.listing,
  //   method: "GET",
  //   // body: { key: 'value' }
  // };

  // const data1 = await fetchFromServer(api1);
  // console.log(data1,"werwerrrrrrr");
  

  return (
    <div className=" bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Account</h1>
        <AccountSlider type={type}/>
        {type==="profile" && <AccountProfile />}
        {type==="cards" && <AccountCards />}
        {type==="bundles" && <AccountBunddles />}
        {type==="email-preferences" && <AccountEmailprefrence />}
        {type==="contributions" && <AccountContribution />}
        {type==="batches" && <Table />}
      </div>
    </div>
  );
};

export default page;
