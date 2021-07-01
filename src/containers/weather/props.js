import * as R from 'ramda';

const conditionProp = R.prop('condition');

export const conditionIconProp = R.pipe(
    conditionProp,
    R.prop('icon')
);

export const conditionTextProp = R.pipe(
    conditionProp,
    R.prop('text')
);

export const temperatureProp = R.prop('temp_c');

export const dateProp = R.prop('date');

const dayInfoProp = R.prop('day');

export const minTemperatureProp = R.pipe(
    dayInfoProp,
    R.prop('mintemp_c')
);

export const maxTemperatureProp = R.pipe(
    dayInfoProp,
    R.prop('maxtemp_c')
);

export const averageTemperatureProp = R.pipe(
    dayInfoProp,
    R.prop('avgtemp_c')
);

export const weatherTextProp = R.pipe(
    dayInfoProp,
    conditionTextProp
);

export const weatherIconProp = R.pipe(
    dayInfoProp,
    conditionIconProp
);

export const hoursProp = R.prop('hour');

export const timeProp = R.prop('time');