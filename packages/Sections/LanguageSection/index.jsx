import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHSelect from "../../Components/Input/Select";
import VHInputCheckbox from "../../Components/Input/checkbox";
import VHList from "../../Components/List";
import VHLanguageList from "../../Components/LanguageList";
import VHTitleDescription from "../../Components/TitleDescription";


const VHLanguageSection = props => {
  return (
    <>
      <Row marginBottom={2}>
        <VHText
          className={`vh-skills-section-title ${props.className ? props.className : ''}`}
          text={"Languages"}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row>
        <VHCardBase
          className={`vh-skills-section-card ${props.className ? props.className : ''}`}
        >
          <Row row >
            <Row>
              <VHLanguageList
                languages={props.languages}
                controls={props.controls}
                onEvent={props.onEvent}
                secondList={props.proficiencyList}
                list={props.languageList}
                items={props.languages}
                data="vanhack" />
            </Row>
          </Row>
        </VHCardBase>
      </Row>
    </>
  )
}

VHLanguageSection.propTypes = {
  onEvent: PropTypes.func,
  title: PropTypes.string.isRequired,
  data: PropTypes.object,
  className: PropTypes.string
}

export default VHLanguageSection;
