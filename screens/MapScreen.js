import { View, Text, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { todosMoveis } from "../localVariables/moveis";
import { StyleSheet } from "react-native";

export function MapScreen()
{
    return(
        <View style={{flex: 2}}>
            <MapView provider={PROVIDER_GOOGLE} style={StyleSheet.absoluteFill}
            
            initialRegion={{
                latitude: -31.3314,
                longitude: -54.1069,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
  }}>

    {todosMoveis.map((movel) => (
    <Marker
      key={movel.id}
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