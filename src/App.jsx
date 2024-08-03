import Calculator from "./components/Calculator";

export default function App() {
  return (
    <main className="h-screen flex flex-col gap-8 items-center py-7 bg-lightGrayishCyan">
      <h1 className="text-darkGrayishCyan text-3xl uppercase">
        Spli
        <br />
        tter
      </h1>
      <Calculator />
    </main>
  );
}
