import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Icons from '../../assets/icons';

import { Shadow } from 'react-native-neomorph-shadows';

import { COLORS, FONTS, SIZES } from "../../constants";

import GetDatas from '../../services/connectApi';

import LinearGradient from "react-native-linear-gradient";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Main() {
    const[data, setData] = useState([]);

    useEffect(() => {
        async function loadData() {
            GetDatas.then(res => setData(res) );

            // console.log(data.results);
        };

        loadData();
    },[data]);
    
    return (
        <View style={styles.container}>
            <LinearGradient colors={[COLORS.greenTurquoise, COLORS.lightGray, COLORS.orangeCarot]} style={{width:'100%', height:'100%', alignItems:'center', justifyContent:'flex-end'}} >
            {typeof data.results !== 'undefined' 
            ? <View style={{alignItems:'center', justifyContent:'center'}}>
                <Icons icon={data.results.condition_code} time={data.results.time} />
                <Text style={{...FONTS.h11, color: COLORS.gray}}> {data.results.city} </Text>
                <Text style={{...FONTS.largeTitle, color: COLORS.gray}}> {data.results.temp}° </Text>
               

                <View style={{flexDirection:'row', margin: 5,}}>
                    <Text style={{...FONTS.h2, color: COLORS.gray}}> {data.results.description} </Text>
                    <Text style={{...FONTS.h2, color:COLORS.gray}}> / </Text>
                    <Text style={{...FONTS.h1, color: COLORS.gray}}> {data.results.humidity} </Text>
                    <Icon name="water-percent" color={COLORS.gray} size={35} />
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{...FONTS.h4, color: COLORS.gray }} > Vento: {data.results.wind_speedy} </Text>
                    <Text style={{...FONTS.h4, color: COLORS.gray }}> - </Text>
                    <Text style={{...FONTS.h4, color: COLORS.gray }}> {data.results.date} </Text>
                    
                </View>
                
                <View style={{flexDirection:'row', margin: 5,}}>
                    <View style={{flexDirection:'row'}}>
                        <Icon name="weather-sunset-up" color="gray" size={20} />
                        <Text style={{...FONTS.h4, color: COLORS.gray }}> {data.results.sunrise} </Text>
                    </View>
                    <Text style={{...FONTS.h4, color: COLORS.gray }}> - </Text>
                    <View style={{flexDirection:'row'}}>
                        <Icon name="weather-sunset-down" color="gray" size={20} />
                        <Text style={{...FONTS.h4, color: COLORS.gray }}> {data.results.sunset} </Text>
                    </View>
                </View>
                
                <View>
                        <Shadow
                            inner // <- enable inner shadow
                            useArt // <- set this prop to use non-native shadow on ios
                            style={{
                                shadowOffset: {width: 10, height: 10},
                                shadowOpacity: 1,
                                shadowColor: '#C67e22',
                                shadowRadius: 8,
                                borderRadius: 20,
                                backgroundColor: COLORS.orangeCarot,
                                width: 250,
                                height: 120,
                                // ...include most of View/Layout styles
                                alignItems:'center',
                                justifyContent:'center',
                                marginBottom: 10,
                                borderColor: '#C67e22',
                                borderWidth: 1,
                                borderRadius: 8,
                            }}
                            >
                            <View style={{flexDirection:'row'}}>
                                
                                <View style={{margin: 5, alignItems:'center'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[1].weekday} </Text>
                                        <Icon name="weather-hazy" color="gray" size={20} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[1].max} </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> / </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[1].min} </Text>
                                    </View>
                                </View>

                                <View style={{margin: 5, alignItems:'center'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[2].weekday} </Text>
                                        <Icon name="weather-hazy" color="gray" size={20} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[2].max} </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> / </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[2].min} </Text>
                                    </View>
                                </View>

                                <View style={{margin: 5, alignItems:'center'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[3].weekday} </Text>
                                        <Icon name="weather-hazy" color="gray" size={20} />
                                    </View>

                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[3].max} </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> / </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[3].min} </Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{flexDirection:'row', borderTopColor: COLORS.secondary, borderTopWidth: 0.5, }}>
                                
                                <View style={{margin: 5, alignItems:'center'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[1].weekday} </Text>
                                        <Icon name="weather-hazy" color="gray" size={20} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[1].max} </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> / </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[1].min} </Text>
                                    </View>
                                </View>

                                <View style={{margin: 5, alignItems:'center'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[2].weekday} </Text>
                                        <Icon name="weather-hazy" color="gray" size={20} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[2].max} </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> / </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[2].min} </Text>
                                    </View>
                                </View>

                                <View style={{margin: 5, alignItems:'center'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[3].weekday} </Text>
                                        <Icon name="weather-hazy" color="gray" size={20} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[3].max} </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> / </Text>
                                        <Text style={{...FONTS.h4, color: COLORS.black}}> {data.results.forecast[3].min} </Text>
                                    </View>
                                </View>

                            </View>

                        </Shadow>
                    
                </View>
                
              </View>
            : <Text style={{...FONTS.h2, color: COLORS.gray}}>Carregando...</Text>}

            </LinearGradient>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: COLORS.greenEsmerald,
        width:'100%',
        height:'100%',
    },
    

    
});