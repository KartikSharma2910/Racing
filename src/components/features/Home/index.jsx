import { Fragment } from "react";
import Banner from "./Banner";
import Journey from "./Journey";
import Tape from "./Tape";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Tape />
      <Journey />
    </Fragment>
  );
};

export default Home;
