import Navigation from "./component/navigation";
import Country from "./page/country/country";
import Number from "./page/number";
import Region from "./page/country/Region";
function App() {
  return (
    <div>
      <Navigation/>
      {/*<Country/>*/}
      {/*<Number/>*/}
        <Region></Region>
    </div>
  );
}

export default App;
