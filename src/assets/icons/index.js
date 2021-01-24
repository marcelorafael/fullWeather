import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../constants";

export default function Icons(props) {
    const[time, setTime] = useState(props.time);
    const [code, setCode] = useState(props.icon);
    const [cn, setCn] = useState([]);
    useEffect(() => {

        function sunOrMoon() {
            if (time > "17:59") {

                if (code === 27) {
                    setCn('moon-full');
                } else {
                    setCn('weather-night-partly-cloudy');
                }
            } else  {
                
                if (code === 27) {
                    setCn('weather-sunny');
                } else {
                    setCn('weather-partly-cloudy');
                }
            }
        }

        sunOrMoon();
        getIcon();
    },[]);

    function getIcon() {
        
        switch (code) {
            case "0":
                return <Icon name="weather-pouring" color={COLORS.gray} size={250} />
                break;
            case "1":
                return <Icon name="weather-pouring" color={COLORS.gray} size={250} />
                break;
            case "2":
               return  <Icon name="weather-tornado" color={COLORS.gray} size={250} />
                break;
            case "3":
                return <Icon name="weather-rainy" color={COLORS.gray} size={250} />
                break;    
            case "4":
                return <Icon name="weather-pouring" color={COLORS.gray} size={250} />
                break;
            case "5":
                return <Icon name="weather-snowy-rainy" color={COLORS.gray} size={250} />
                break;
            case "6":
               return  <Icon name="weather-snowy-rainy" color={COLORS.gray} size={250} />
                break;
            case "7":
                return <Icon name="weather-snowy-heavy" color={COLORS.gray} size={250} />
                break;
            case "8":
               return  <Icon name="weather-snowy" color={COLORS.gray} size={250} />
                break;
            case "9":
               return <Icon name="weather-partly-rainy" color={COLORS.gray} size={250} />
                break;
            case "10":
               return <Icon name="weather-snowy-rainy" color={COLORS.gray} size={250} />
                break;
            case "11":
               return <Icon name="weather-rainy" color={COLORS.gray} size={250} />
                break;
            case "12":
              return  <Icon name="weather-rainy" color={COLORS.gray} size={250} />
                break;
            case "13":
               return <Icon name="weather-snowy-heavy" color={COLORS.gray} size={250} />
                break;
            case "14":
              return  <Icon name="weather-snowy-rainy" color={COLORS.gray} size={250} />
                break;
            case "15":
              return  <Icon name="snowflake-melt" color={COLORS.gray} size={250} />
                break;
            case "16":
              return  <Icon name="snowflake" color={COLORS.gray} size={250} />
                break;
            case "17":
              return  <Icon name="weather-hail" color={COLORS.gray} size={250} />
                break;
            case "18":
              return  <Icon name="hexagon-slice-2" color={COLORS.gray} size={250} />
                break;
            case "19":
              return  <Icon name="blur" color={COLORS.gray} size={250} />
                break;
            case "250":
               return <Icon name="segment" color={COLORS.gray} size={250} />
                break;
            case "21":
               return <Icon name="blur" color={COLORS.gray} size={250} />
                break;
            case "22":
               return <Icon name="blur" color={COLORS.gray} size={250} />
                break;
            case "23":
               return <Icon name="weather-windy" color={COLORS.gray} size={250} />
                break;
            case "24":
              return  <Icon name="weather-windy" color={COLORS.gray} size={250} />
                break;
            case "25":
               return <Icon name="weather-fog" color={COLORS.gray} size={250} />
                break;
            case "26":
              return  <Icon name="weather-cloudy" color={COLORS.gray} size={250} />
                break;
            case "27":
              return  <Icon name={cn} color={COLORS.gray} size={250} />
                break;
            case "28":
                return <Icon name='weather-cloudy' color={COLORS.gray} size={250} /> 
                
            case "29":
               return <Icon name="weather-partly-cloudy" color={COLORS.gray} size={250} />
                break;
            case "30":
               return <Icon name={cn} color={COLORS.gray} size={250} />
                break;
            case "31":
               return <Icon name={cn} color={COLORS.gray} size={250} />
                break;
            case "32":
               return <Icon name="weather-sunny" color={COLORS.gray} size={250} />
                break;
            case "33":
               return <Icon name="weather-night" color={COLORS.gray} size={250} />
                break;
            case "34":
               return <Icon name="weather-partly-cloudy" color={COLORS.gray} size={250} />
                break;
            case "35":
               return <Icon name="weather-partly-snowy-rainy" color={COLORS.gray} size={250} />
                break;
            case "36":
               return <Icon name="segment" color={COLORS.gray} size={250} />
                break;
            case "37":
               return <Icon name="weather-pouring" color={COLORS.gray} size={250} />
                break;
            case "38":
               return <Icon name="weather-lightning" color={COLORS.gray} size={250} />
                break;
            case "39":
               return <Icon name="weather-lightning" color={COLORS.gray} size={250} />
                break;
            case "40":
               return <Icon name="weather-rainy" color={COLORS.gray} size={250} />
                break;
            case "41":
               return <Icon name="snowflake-variant" color={COLORS.gray} size={250} />
                break;
            case "42":
               return <Icon name="snowflake-melt" color={COLORS.gray} size={250} />
                break;
            case "43":
               return <Icon name="weather-partly-snowy-rainy" color={COLORS.gray} size={250} />
                break;
            case "44":
               return <Icon name="weather-partly-rainy" color={COLORS.gray} size={250} />
                break;
            case "45":
               return <Icon name="weather-pouring" color={COLORS.gray} size={250} />
                break;
            case "46":
              return  <Icon name="weather-snowy-heavy" color={COLORS.gray} size={250} />
                break;
            case "47":
               return <Icon name="weather-pouring" color={COLORS.gray} size={250} />
                break;
                                                                                                                                                                                                                     
            default:
               return <Icon name="weather-sunny-alert" color={COLORS.gray} size={250} />
                break;
        }

    }

    return (
        <View>
            <Text> {getIcon()} </Text>
            {/* <Text> {code} </Text> */}
        </View>
    )
}
