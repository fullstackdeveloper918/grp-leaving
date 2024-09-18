import Sidebar from "./common/Sidebar";
import Card from "./common/Card";
import CollectionFilter from "./common/CollectionFilter";
import cardData from "../constants/CardJson/card.json"
const CardCollection = ({ params }: any) => {
  console.log(params, "qww");

  return (
    <div className="min-h-screen bg-light-gray">
      <div className="flex">
        <Sidebar urlValue={params?.slug[0]} />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold justify-center items-center">
              Pick a {params?.slug[0]} card design
            </h1>
            <CollectionFilter />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {cardData.data.map((card, index) => (
                <Card item={card} index={index} />
              ))} */}
            {cardData.data
              .filter((card) => card.type === params?.slug[0])
              .map((card:any, index:number) => (
                <Card item={card} index={index} />
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CardCollection;
