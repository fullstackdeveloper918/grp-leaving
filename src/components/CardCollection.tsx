import Sidebar from "./common/Sidebar";
import Card from "./common/Card";
import CollectionFilter from "./common/CollectionFilter";
import cardData from "../constants/CardJson/card.json"
const CardCollection = ({ params }: any) => {
  console.log(params, "qww");

  return (
    <div className=" bg-lightBg py-12">
      <div className="container-fluid">
      <div className="md:flex md:space-x-3 md:space-y-0 space-y-6 ">
        <Sidebar urlValue={params?.slug[0]} />
        <main className="flex-1 lg:px-8 md:px-6 px-2">
          <div className="flex md:justify-between md:items-center mb-6 md:flex-row  sm:flex-column-reverse justify-start ">
            <h2 className="xl:text-4xl md:text-xl sm:text-md font-semibold justify-center items-center">
              Pick a <span className="capitalize">{params?.slug[0]}</span> Card Design
            </h2>
            <CollectionFilter />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {cardData.data.map((card, index) => (
                <Card item={card} index={index} />
              ))} */}
            {cardData.data
              .filter((card) => card.type === params?.slug[0])
              .map((card:any, index:number) => (
                <Card item={card} index={index} key={index}/>
              ))}
          </div>
        </main>
      </div>
    </div>
    </div>
  );
};

export default CardCollection;
