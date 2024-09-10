import { fetchCards } from "@/utils/fakeApi";
import Main from "../component/Home";
interface Data {
  id: number;
  name: string;
}
const Home = async () => {
  const res = await fetchCards();
  console.log(res, "res");

  return (
    <main className="">
      <Main {...res} />
    </main>
  );
};
export default Home;
