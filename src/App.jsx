import { BiDollar } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";

import logo from "./assets/images/logo.svg";

function App() {
  return (
    <div className="bg-light-grayish-cyan min-h-screen flex flex-col items-center justify-center gap-10">
      <img src={logo} />
      <main className="bg-white p-8 flex flex-col gap-4">
        <>
          <p className="font-mono text-dark-grayish-cyan">Bill</p>
          <div className="relative">
            <input
              placeholder="0"
              type="number"
              className="border h-[32px] w-full rounded text-right outline-strong-cyan text-bold bg-very-light-grayish-cyan px-2"
            />
            <BiDollar className="absolute top-2 left-1.5 text-light-grayish-cyan" />
          </div>
        </>
        <>
          <p className="font-mono text-dark-grayish-cyan">Number of People</p>
          <div className="relative">
            <input
              placeholder="0"
              type="number"
              className="border h-[32px] w-full rounded text-right outline-strong-cyan text-bold bg-very-light-grayish-cyan px-2"
            />
            <IoPerson className="absolute top-2 left-1.5 text-light-grayish-cyan" />
          </div>
        </>
      </main>
    </div>
  );
}

export default App;
