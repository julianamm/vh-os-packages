import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHTitleDescription from "../../Components/TitleDescription";
import VHModalEducation from "../../Components/ModalEducation"
import VHButton from "../../Components/Button"
import VHCardBase from "../../Components/Cards/Base/"
import VHText from "../../Components/Text/"

const VHEducationSection = props => {
  console.log(props.education)
  const [openModal, setOpenModal] = React.useState(false);
  const education = props.education ? props.education : [];
  return (
    <React.Fragment>
      {openModal &&
        <VHModalEducation openModal={openModal} onClose={() => setOpenModal(false)}
          currentItem={props.currentItem}
          items={props.items}
          controls={props.controls}
          onEvent={props.onEvent} />
      }
      <Row marginBottom={5}>
        <VHText
          className={`vh-education-section-title ${props.className ? props.className : ''}`}
          text={"Education"}
          color="black-50"
          variant="h2"
        />
      </Row>
      <VHCardBase
        className={`vh-education-section-card ${props.className ? props.className : ''}`}
      >
        <Row column>
          {education.map(item => {
            return (
              <Row marginBottom5>
                <VHTitleDescription
                  title={item.title}
                  titleColor="primary-light"
                  description={item.subTitle}
                  titleVariant="h4"
                  descriptionVariant="bodyweb"
                  data={{}}
                  onEvent={(e) => console.log(e)}
                />
              </Row>
            )
          })
          }
          <Row width={'10%'} lg>
            <VHButton primary onEvent={e => {
              setOpenModal(true)
            }} label="Add Education" />
          </Row>
        </Row>
      </VHCardBase>
    </React.Fragment>
  )
}

VHEducationSection.propTypes = {
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string
}

export default VHEducationSection;
