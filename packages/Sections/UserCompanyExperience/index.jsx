import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHButton from "../../Components/Button";
import VHUserCompanyPositionExperience from "../../Components/UserCompanyPositonExperience";
import VHModalExperience from '../../Components/ModalExperience'
import { PostDescriptionSkeleton } from 'react-preload-skeleton'
import VHPreloader from '../../Components/Preloader';

const VHUserCompanyExperienceSection = props => {
  const [openModal, setOpenModal] = React.useState(false);
  const [newExperience, setNewExperience] = React.useState(false);
  const experience = props.experience.experiences ? props.experience.experiences : [];
  const [currentItem, setCurrentItem] = React.useState({});

  return (
    <>
      {openModal &&
        <VHModalExperience openModal={openModal} onClose={() => setOpenModal(false)}
          modalExperience={props.modalExperience}
          currentItem={currentItem}
          controls={props.controls}
          onEvent={props.onEvent}
          newExperience={newExperience}
          countries={props.countries}
          companyList={props.companyList}
          industryList={props.industryList}
          positions={props.positions}
          closeModalExperience={props.closeModalExperience} />
      }
      <Row mmarginBottom={2}>
        <VHText
          className={`vh-skills-section-title ${props.className ? props.className : ''}`}
          text={`Experience ${props.yearsOfExperience || ''}`}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row>
        <VHCardBase
          className={`vh-skills-section-card ${props.className ? props.className : ''}`}
        >
          {props.controls.experienceSection.loading ?
            <VHPreloader type="circle" />
            :
            <React.Fragment>
              {
                props.preLoading ? (
                  <PostDescriptionSkeleton />
                ) : (
                    <>
                      {

                        experience.map(userPosition => {
                          return (
                            <Row marginBottom={10}>
                              <VHUserCompanyPositionExperience
                                item={userPosition}
                                companyList={props.companyList}
                                industryList={props.industryList}
                                onOpen={() => { setOpenModal(true) }}
                                onEvent={props.onEvent}
                                setCurrentItem={() => setCurrentItem(userPosition)}
                              />
                            </Row>
                          )
                        })
                      }
                      <Row row>
                        <Row paddingRight8 autoWidth>
                          <VHButton
                            nowrap
                            primary
                            onEvent={props.onEvent}
                            data={"AddExperience"}
                            label="Add Experience"
                            closeModal={props.closeModal}
                            onOpen={() => { setCurrentItem({}); setOpenModal(true) }}
                            setNewExperience={() => { setNewExperience(true) }}
                          />
                        </Row>
                        <Row row>
                          <VHButton
                            outline
                            primary
                            onEvent={props.onEvent}
                            data={"RequestProfileReview"}
                            label="Request Profile Review"
                          />
                        </Row>
                      </Row>
                    </>
                  )
              }
            </React.Fragment>}
        </VHCardBase>
      </Row>
    </>
  )
}

VHUserCompanyExperienceSection.propTypes = {
  onEvent: PropTypes.func,
  title: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string
}

export default VHUserCompanyExperienceSection;
