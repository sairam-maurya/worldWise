import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {

  const navigate =useNavigate()
  const [searchParams,setSearchParams]=useSearchParams()

  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")
  return <div className={styles.mapContainer} onClick={()=>navigate("form")}>
    <h1>map</h1>
    <h1>
      position:{lng},{lat}
    </h1>
    <button onClick={()=>setSearchParams({lat:20,lng:25})}>chnage postion</button>
    </div>;
}

export default Map;
