import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../../Grid/index";
import VHText from "../../../Components/Text/index";
import VHCardHired from "../../../Components/Cards/Hired/index";
import VHButton from "../../../Components/Button/index";

const VHPremiumHiredSection = props => {
  return (
        <React.Fragment>
            <Row alignItemsCenter marginTop={40} marginBottom={30}>
                <VHText 
                    variant={"h2"}
                    color={"gray-100"}
                    text={props.sectionTitle}
                />
            </Row>
            <Row row marginBottom={30}>
                {props.candidates.map(candidate => (
                    <Row style={{ backgroundColor: "#f2f6f9", width: "180px", height: "180px", padding: "24px", marginRight: "10px" }}>
                        <VHCardHired 
                            name={candidate.name}
                            position={candidate.position}
                            country={candidate.country}
                            userPhoto={candidate.userPhoto}
                            flag={candidate.flag}
                        />
                    </Row>
                ))}
            </Row>
            <Row alignItemsCenter>
                <Row width={"30%"}>
                        <VHButton 
                            label={props.btnLabel}
                            secondary
                            lg
                        />
                    </Row>
                </Row>
        </React.Fragment>
    )
}

VHPremiumHiredSection.propTypes = {
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  sectionTitle: PropTypes.string,
  btnLabel: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  country: PropTypes.string,
  userPhoto: PropTypes.string,
  flag: PropTypes.string,
}

export default VHPremiumHiredSection;