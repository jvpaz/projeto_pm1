import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet } from "react-native";

export function MapScreen()
{
    return(
        <View style={{flex: 1}}>
            <MapView provider={PROVIDER_GOOGLE} style={StyleSheet.absoluteFill}/>
        </View>
    );
}