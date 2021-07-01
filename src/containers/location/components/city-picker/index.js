import React from 'react';
import Autocomplete from 'react-autocomplete';
import * as R from 'ramda';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../../../../components';
import { setCity, typeCity } from '../../actions';
import { locationSelector, suggestionsSelector } from '../../selectors';
import { MenuWrapper } from './MenuWrapper';
import { ItemWrapper } from './ItemWrapper';

export const CityPicker = () => {
    const dispatch = useDispatch();
    const city = useSelector(locationSelector);
    const suggestions = useSelector(suggestionsSelector);

    return (
        <Autocomplete
            wrapperStyle={{
                width: '100%'
            }}
            value={city}
            getItemValue={R.prop('name')}
            items={suggestions}
            onChange={R.pipe(
                R.prop('target'),
                R.prop('value'),
                typeCity,
                dispatch
            )}
            onSelect={R.pipe(setCity, dispatch)}
            renderInput={(props) =>
                <Input
                    {...props}
                />
            }
            renderMenu={(items, value, style) =>
                <MenuWrapper
                    style={style}
                >
                    {items}
                </MenuWrapper>
            }
            renderItem={(item, isHighlighted) =>
                <ItemWrapper
                    key={item.id}
                    highlighted={isHighlighted}
                >
                    {item.name}
                </ItemWrapper>
            }
        />
    );
}