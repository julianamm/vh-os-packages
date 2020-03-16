import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardHired from "../../Components/Cards/Hired/index";
import VHButton from "../../Components/Button/index";
import VHText from "../../Components/Text/index";

const VHPremiumHiredSection = props => {
    console.log(props.candidates)
  return (
    <React.Fragment>
        <Row>
            <Row alignItemsCenter marginBottom={20}>
                <VHText
                    variant="h3"
                    color="gray-90"
                    text="Premium VanHackers Hired"
                />
            </Row>
            <Row row>
                {props.candidates.map(candidate => (
                    <Row style={{ backgroundColor: "#f2f6f9", width: "150px", height: "150px", padding: "24px", marginRight: "10px" }}>
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
        </Row>
        <Row alignItemsCenter marginTop={50} marginBottom={10}>
            <Row width={"20%"}>
                <VHButton
                    onEvent={props.onEvent}
                    label={"JOIN VANHACK PREMIUM"}
                    secondary
                    full
                />
            </Row>
        </Row>
    </React.Fragment>
  )
}

VHPremiumHiredSection.propTypes = {
//   onEvent: PropTypes.func,
//   data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   className: PropTypes.string
}

export default VHPremiumHiredSection;
