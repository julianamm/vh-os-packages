import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHTitleDescription from "../../Components/TitleDescription";
import VHModalEducation from "../../Components/ModalEducation"
import VHButton from "../../Components/Button-New"
import VHCardBase from "../../Components/Cards/Base/"
import VHText from "../../Components/Text/"
import { CardSkeleton } from 'react-preload-skeleton'
import VHPreloader from '../../Components/Preloader';

const VHEducationSection = props => {
  const [openModal, setOpenModal] = React.useState(false);
  const education = props.education ? props.education : [];
  const items = props.degreeTypeList;
  const [currentItem, setCurrentItem] = React.useState({});
  return (
    <React.Fragment>
      {openModal &&
        <VHModalEducation openModal={openModal} onClose={() => setOpenModal(false)}
          closeModal={props.closeModal}
          modalEducation={props.modalEducation}
          currentItem={props.currentItem}
          items={items}
          controls={props.controls}
          onEvent={props.onEvent}
          currentItem={currentItem} />
      }
      <Row>
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
        {props.controls.educationSection.loading ?
          <VHPreloader type="circle" />
          :
          <React.Fragment>
            {
              props.preLoading ? (
                <>
                  <CardSkeleton />
                  <CardSkeleton button />
                </>
              ) : (
                  <Row column>
                    {education.map(item => {
                      return (
                        <Row marginBottom5>
                          <VHTitleDescription
                            hover
                            pointer
                            title={item.degreeTitle}
                            titleColor="primary-light"
                            description={item.schoolName}
                            titleVariant="h4"
                            descriptionVariant="bodyweb"
                            onEvent={props.onEvent}
                            data={{ label: 'openModalEducation', ...item }}
                            onOpen={() => setOpenModal(true)}
                            setCurrentItem={() => setCurrentItem(item)}
                          />
                          <VHText variant={'caption'} text={`${new Date(item.startDate).getFullYear()} - ${item.endDate ? new Date(item.endDate).getFullYear() : 'Present'}`} color={'gray-90'} onEvent={props.onEvent} />
                        </Row>
                      )
                    })
                    }
                    <Row width={'20%'}>
                      <VHButton data={'openModal'} primary onEvent={props.onEvent} closeModal={props.closeModal} onOpen={() => { setCurrentItem({}); setOpenModal(true) }} label="Add Education" />
                    </Row>
                  </Row>
                )
            }
          </React.Fragment>
        }
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
