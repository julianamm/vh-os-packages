import React, {useState} from 'react'
import PropTypes from 'prop-types'
import VHInput from '../Simple'

const VHInputMultiple = props => {
  const it = JSON.parse(props.items)
  const [items, setItems] = useState(it)
  const [newItems, setNewItems] = useState([{value: ''}])

  const [maxItems, setMaxItems] = useState(1)

  return (
    <>
    {
      items.map((item, index) => (
        <div
          key={`VHInputMultiple-${index}`}
          style={{margin: '9px 0'}}
        >
          <VHInput
            value={item.value}
            placeholder={props.placeholder}
            autoFocus
            onEvent={e => {
              switch(true) {
                case e.event ===  "onKeyUpAction":
                  if (e.data.value !== '') {

                    // newItems.push({value: e.data.value})
                    // setNewItems(newItems)
                    // if (items.length + newItems.length <= props.max)
                    // setMaxItems((maxItems +1))
                    items[index] = {value: e.data.value}
                    setItems(items)

                    props.onEvent({
                      data: {
                          value: JSON.stringify(items.concat(newItems)),
                          data: props.data
                        },
                        event: "onKeyUpAction",
                        origin: "VHInputMultiple"
                      })
                    }

                  break
              }
            }}
          />
        </div>
      ))
    }
    {
      newItems.map((item, index) => (
        <div
          key={`VHInputMultiple-item-${index}`}
          style={{margin: '9px 0'}}
        >
          <VHInput
            placeholder={props.placeholder}
            value=''
            onEvent={e => {
              switch(true) {
                case e.event ===  "onKeyUpAction":
                  if (e.data.value !== '') {
                    newItems[index] = {value: e.data.value}

                    if (items.length + newItems.length < props.max) {
                      newItems.push({value: ''})
                    }

                    setNewItems(newItems)
                    setMaxItems((maxItems +1))
                    props.onEvent({
                      data: {
                        value: JSON.stringify(items.concat(newItems)),
                        data: props.data
                      },
                      event: "onKeyUpAction",
                      origin: "VHInputMultiple"
                    })

                    }

                  break
              }
            }}
          />
        </div>
      ))
    }
    </>
  )
}

VHInputMultiple.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
  className: '',
  noBorder: false
}

VHInputMultiple.propTypes = {
  disabled: PropTypes.bool,
  autoFocus: PropTypes.string,
  placeholder: PropTypes.string,
  noBorder: PropTypes.bool,
}

export default VHInputMultiple
