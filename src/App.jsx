import LoginPage from "./Login/Components/LoginPage";

const App = () => {
  return (
    <div className="flex w-[1440px] h-[960px] bg-slate-600">
      {/* image panel */}
      <div className="w-[874px] h-[975px] bg-slate-300">image</div>
      <div>
        <LoginPage />
      </div>
    </div>
  );
};

export default App;
