import { Container } from "@/components/container/Container";
import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <Container>
      <div className=" w-full h-screen flex justify-center items-center bg-black-100 bg-opacity-75 z-50">
        <Spinner size="lg" label="Loading..." className="m-auto" />
      </div>{" "}
    </Container>
  );
};

export default Loading;
