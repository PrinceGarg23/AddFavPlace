import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

function AllPlaces({route}) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  
  const isFocused = useIsFocused();
  useEffect(() => {
    if(isFocused && route.params){
      setLoadedPlaces(curPlaces => [...curPlaces, route.params.place]);
    }
  },[isFocused ]);

  return (
    <PlacesList places={loadedPlaces}/>
  );
}

export default AllPlaces;