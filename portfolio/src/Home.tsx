import Nav from "./Nav";
import IntroCard from "./IntroCard";

export default function Home() {
  return (
    <div>
      <Nav />
      <IntroCard
        imageSrc={"/profile_pic.jpg"}
        title={"Hello I'm Tyler."}
        description={"Aspiring Software Engineer"}
      />
    </div>
  )
}
