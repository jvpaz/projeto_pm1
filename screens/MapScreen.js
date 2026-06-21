import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { listarCarrinho} from "../database/db";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export function MapScreen() {
  const [moveis, setMoveis] = useState([]);

  useEffect(() => {
    setMoveis(listarCarrinho());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: -31.3314,
          longitude: -54.1069,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {moveis.map((movel) => (
          <Marker
            key={String(movel.id)}
            coordinate={{
              latitude: movel.latitude,
              longitude: movel.longitude,
            }}
            title={movel.nome}
          />
        ))}
      </MapView>
    </View>
  );
}