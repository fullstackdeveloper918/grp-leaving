import { fetchCards, fetchCardsType, fetchReview,  } from "@/utils/fakeApi";
import Main from "../component/Home";
import api from "@/utils/api";
interface Data {
  id: number;
  name: string;
}
const Home = async () => {
  const res = await fetchCards();
  const ApiRes = await fetchCards();
  console.log(ApiRes,"ApiRes");
  

  // const qwerty= await Users()
  const reviewRes= await fetchReview()
  const cardType= await fetchCardsType()
  // console.log(qwerty, "res");

  return (
    <main className="">
      <Main {...res} {...reviewRes} {...cardType} {...ApiRes}/>
    </main>
  );
};
export default Home;
