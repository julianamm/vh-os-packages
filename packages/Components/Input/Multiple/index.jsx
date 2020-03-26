import React, { useState } from 'react'
import PropTypes from 'prop-types'
import VHInput from '../Simple'

const VHInputMultiple = props => {
  let it = []
  try {
    it = JSON.parse(props.items.value)
  } catch (error) {

  }
  const [items, setItems] = useState(it)
  const [newItems, setNewItems] = useState([{ value: '' }])

  const [render, reRender] = useState(1)
  return (
    <>
      {
        items.map((item, index) => (
          <div
            key={`VHInputMultiple-${index}`}
            style={{ margin: '9px 0' }}
          >
            <VHInput
              value={item.Value}
              data={item}
              placeholder={props.placeholder}
              onEvent={e => {
                switch (true) {
                  case e.event === "onKeyUpAction":
                    if (e.data.value !== '') {
                      items[index] = {
                        value: e.data.value,
                        loading: e.data.data.id === item.id
                      }
                      setItems(items)
                      reRender(render + 1)

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
            style={{ margin: '9px 0' }}
          >
            <VHInput
              placeholder={props.placeholder}
              value=''
              autoFocus
              onEvent={e => {
                switch (true) {
                  case e.event === "onKeyUpAction":
                    if (e.data.value !== '') {
                      newItems[index] = { value: e.data.value, loading: true }

                      if (items.length + newItems.length < props.max) {
                        newItems.push({ value: '' })
                      }

                      setNewItems(newItems)
                      reRender(render + 1)
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
