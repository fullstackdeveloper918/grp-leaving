import { fetchCards, fetchReview } from "@/utils/fakeApi";
import Main from "../component/Home";
interface Data {
  id: number;
  name: string;
}
const Home = async () => {
  const res = await fetchCards();
  const reviewRes= await fetchReview()
  console.log(res, "res");

  return (
    <main className="">
      <Main {...res} {...reviewRes}/>
    </main>
  );
};
export default Home;
