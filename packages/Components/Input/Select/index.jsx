import React from 'react';
import PropTypes from 'prop-types'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import VHText from '../../Text'
import { TitleDescriptionSkeleton } from 'react-preload-skeleton'
import { Row } from '../../../Grid'
const animatedComponents = makeAnimated();

const VHSelect = props => {

if (props.preLoading) {
  return <TitleDescriptionSkeleton />
}


  const [value, handleChange] = React.useState(props.currentItem);
  React.useEffect(() => {
    handleChange(props.currentItem);
  }, [props.currentItem])

  const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: "none",
      fontWeight: props.bold ? 'bold' : '500'
    }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    clearIndicator: (styles) => ({ display: 'none' })
  };

  const styled = {
    indicatorSeparator: (styles) => ({ display: 'none' }),
    clearIndicator: (styles) => ({ display: 'none' })
  };

  return (
    <Row responsive style={{ position: 'relative', marginBottom: props.marginBottom ? props.marginBottom : '21px' }}>
      {
        props.caption &&
        <VHText
          text={props.caption}
          variant="subtitle3"
          color={props.captionColor}
        />
      }
      <Select
        styles={props.removeBorder ? style : styled}
        closeMenuOnSelect={!props.isMulti}
        className={props.className}
        isLoading={props.isLoading}
        isDisabled={props.isLoading || props.isDisabled}
        components={animatedComponents}
        value={value}
        isMulti={props.isMulti}
        isClearable={true}
        options={props.items}
        onChange={(newValue, actionMeta) => {
          switch (true) {
            case actionMeta.action === "remove-value":
              let finalValue = []
              if (newValue.value === 'zero') {
                newValue.value = 0
              }
              handleChange(newValue);
              newValue.map(item => {
                finalValue.push(parseInt(item.value === 'zero' ? 0 : item.value))
              })
              props.onEvent({
                type: "OnChange",
                origin: "VHSelect",
                props: {
                  data: props.data,
                  item: finalValue,
                  action: 'delete',
                  order: props.order
                }
              })
              break
            case actionMeta.action === "clear":
              props.onEvent({
                type: "OnChange",
                origin: "VHSelect",
                props: {
                  data: props.data,
                  item: null,
                  action: "clear"
                }
              })
              break
            case actionMeta.action === "select-option":
              let finalValueChange = []
              if (newValue.value === 'zero') {
                newValue.value = 0
              }
              handleChange(newValue);
              if (props.isMulti) {
                newValue.map(item => {
                  finalValueChange.push(parseInt(item.value === 'zero' ? 0 : item.value))
                })
              }
              props.onEvent({
                type: "OnChange",
                origin: "VHSelect",
                props: {
                  data: props.data,
                  item: props.isMulti ? finalValueChange : newValue,
                  action: 'add',
                  order: props.order
                }
              })
              break
          }
        }}
      />
      {
        props.description &&
        <div style={{ position: 'absolute', top: '60px' }}>
          <VHText
            text={props.description}
            variant="caption"
            color={props.descriptionColor}
          />
        </div>
      }
    </Row>
  );
}

export default VHSelect
