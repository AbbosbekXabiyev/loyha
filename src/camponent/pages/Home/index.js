import Layout from "../../Layout";
import Build from "./build";
import Finger from "./finger";
import Producs from "./producs";
import Technalogik from "./technalogik";

function HomeRoute() {
  return (
    <Layout>
      <div className="font-body bg-[rgb(243,242,242)]">
        <Finger />
        <Technalogik />
        <Build />
        <Producs />
      </div>
    </Layout>
  );
}

export default HomeRoute;
