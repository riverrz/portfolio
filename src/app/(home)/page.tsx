import { PersonalFloatingCard } from "./components/personal-floating-card";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col md:flex-row">
      <div className="h-full order-2 flex-grow md:order-1 md:flex-grow-0 md:basis-2/5 bg-accent relative">
        <div className="relative md:absolute md:top-[50%] md:right-0 md:translate-x-[75%] md:translate-y-[-50%] flex items-center flex-col md:gap-10 md:flex-row">
          <PersonalFloatingCard className="h-[480px] md:h-auto md:min-w-[375px] w-[90%] absolute translate-y-[-25%] sm:translate-y-0 sm:static" />
          <div className="mt-[420px] md:mt-0 self-start w-full p-6 mx-auto sm:self-auto">
            <p className="font-primary text-5xl md:text-8xl font-bold mb-4 ">
              Hello
            </p>
            <p className="font-secondary font-semibold text-xl md:text-lg mb-6 md:mb-8">
              Here&apos;s who I am & what I do
            </p>
            <p className="font-secondary text-lg font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              eveniet, saepe quam fuga quis autem non iure aspernatur temporibus
              dolores? Soluta ipsum enim iste. Neque veritatis sint at nulla
              porro.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-72 sm:h-full order-1 md:order-2 md:flex-grow"></div>
    </div>
  );
}
