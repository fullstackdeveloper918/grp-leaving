import Sidebar from "./common/Sidebar";
import Card from "./common/Card";
import CollectionFilter from "./common/CollectionFilter";
const cardData = [
  {
    title: "Happy Birthday from the Team",
    imageSrc: "/cards/happy-birthday-team.png",
    isNew: true,
  },
  { title: "Clink Clink", imageSrc: "/cards/clink-clink.png", isNew: true },
  { title: "Upload Your Own", imageSrc: "/cards/upload-your-own.png" },
  { title: "Happy Birthday Mugs", imageSrc: "/cards/happy-birthday-mugs.png" },
  { title: "Happy Birthday Cake", imageSrc: "/cards/happy-birthday-cake.png" },
  {
    title: "Happy Birthday Cupcakes",
    imageSrc: "/cards/happy-birthday-cupcakes.png",
  },
  {
    title: "Personalised Card",
    imageSrc: "/cards/personalised.png",
    personalized: true,
  },
];
const CardCollection = ({ params }: any) => {
  return (
    <div className="min-h-screen bg-light-gray">
      <div className="flex">
        <Sidebar urlValue={params?.slug[0]} />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold justify-center items-center">
              Pick a birthday card design
            </h1>
            <CollectionFilter />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {params?.slug[0]}
            {cardData.map((card, index) => (
              <Card item={card} index={index} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CardCollection;
