import Head from "next/head";
import HeaderComponent from "../Header";
import InputTask from "../InputTask";
import ListTask from "../ListTask";

const HomeComponent = () => {
  return (
    <div>
      <Head>
        <title>Minhas Tarefas</title>
      </Head>
      <HeaderComponent />
      <InputTask />
      <ListTask />
    </div>
  );
};

export default HomeComponent;
