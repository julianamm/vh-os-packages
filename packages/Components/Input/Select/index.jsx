import React from 'react';
import PropTypes from 'prop-types'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import VHText from '../../Text'

const animatedComponents = makeAnimated();

const VHSelect = props =>  {
  return (
    <React.Fragment>
      {
        props.caption &&
          <VHText
            text={props.caption}
            variant="platform1"
          />
      }
      <Select
        closeMenuOnSelect={false}
        className={props.className}
        isLoading={props.isLoading}
        components={animatedComponents}
        defaultValue={props.currentItem}
        isMulti={props.isMulti}
        options={props.items}
        onChange={(newValue, actionMeta) => {
          switch(true) {
            case actionMeta.action === "remove-value":
              props.onEvent({
                type: "OnChange",
                origin: "VHSelect",
                props: {
                  data: props.data,
                  item: actionMeta.removedValue,
                  action: 'delete'
                }
              })
              break
            case actionMeta.action === "select-option":
              props.onEvent({
                type: "OnChange",
                origin: "VHSelect",
                props: {
                  data: props.data,
                  item: actionMeta.option,
                  action: 'add'
                }
              })
              break
          }
        }}
      />
      {
        props.description &&
          <VHText
            text={props.description}
            variant="caption"
          />
      }
    </React.Fragment>
  );
}

export default VHSelect
