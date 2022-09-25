import Clients from "../components/Clients";
import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <AddClientModal />
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
