import { Link } from "react-router-dom";
import Layout from "../../Layout";

function Home() {
  return (
    <Layout>
      <Link
        className="bg-indigo-700 px-6 py-2 rounded text-xl text-white"
        to={"/"}
      >
        +
      </Link>
      <div className=" bg-red-700 text-red-500 text-[32px]">Abbos</div>
    </Layout>
  );
}

export default Home;
