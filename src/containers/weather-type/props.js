import * as R from 'ramda';

import { TEMPERATURE, WEATHER_INFO } from './const';

const dayProp = R.prop('day');

const maxTemperatureProp = R.pipe(
    dayProp,
    R.prop('maxtemp_c')
);

const minTemperatureProp = R.pipe(
    dayProp,
    R.prop('mintemp_c')
);

const averageTemperatureProp = R.pipe(
    dayProp,
    R.prop('avgtemp_c')
);

const isRainyDayProp = R.pipe(
    dayProp,
    R.prop('daily_will_it_rain')
);

// number => weather type
const getWeatherType = R.cond([
    [R.equals(3), R.always(WEATHER_INFO.NICE)], 
    [R.equals(2), R.always(WEATHER_INFO.PASSABLE)], 
    [R.T, R.always(WEATHER_INFO.NOT_NICE)], 
]);

// day info => boolean
const isRainyDay = R.pipe(
    isRainyDayProp,
    R.equals(1)
);

// [day info] => boolean
const isAnyRainyDay = R.any(isRainyDay);

// day info => boolean
const isGoodAverageTemperature = (day) => {
    const average = averageTemperatureProp(day);

    return TEMPERATURE.AVERAGE.min <= average &&
        TEMPERATURE.AVERAGE.max >= average;
};

// [day info] => boolean
const isGoodAllAverageTemperature = R.all(isGoodAverageTemperature);

// day info => boolean
const isTemperatureGood = (day) =>
    TEMPERATURE.LIMIT.min <= minTemperatureProp(day) &&
    TEMPERATURE.LIMIT.max >= maxTemperatureProp(day)
;

// [day info] => boolean
const isGoodAllTemperatureGood = R.all(isTemperatureGood);

// [day info] => number
const getNumberOfAttributes = (forecastDays) =>
    R.sum(
        R.map(
            (attribute) => attribute ? 1 : 0,
            R.map(R.applyTo(forecastDays), [
                isGoodAllTemperatureGood,
                isGoodAllAverageTemperature,
                R.complement(isAnyRainyDay)
            ])
        )
    )
;

// forecast => weather type
export const getForecastType = R.pipe(
    getNumberOfAttributes,
    getWeatherType
);