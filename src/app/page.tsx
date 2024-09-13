import {
  fetchCards,
  fetchCards1,
  fetchCardsType,
  fetchReview,
} from "@/utils/fakeApi";
import Main from "../component/Home";
import { user } from "@/utils/cybersifyApi";
import { fetchData } from "@/utils/fetchUtils";
interface Data {
  id: number;
  name: string;
}
const Home = async () => {
  const res = await fetchCards();
  const postData = {
    id: "1",
  };
  // const response = await fetchData(user.listing,"GET")
  const apiRes = await fetchData(user.add, "POST", postData);
  console.log(apiRes, "gggg");

  // const qwerty= await Users()
  const reviewRes = await fetchReview();
  const cardType = await fetchCardsType();
  // console.log(qwerty, "res");

  return (
    <main className="">
      <Main {...res} {...reviewRes} {...cardType}  />
    </main>
  );
};
export default Home;
