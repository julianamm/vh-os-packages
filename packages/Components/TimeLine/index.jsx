import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import VHTitleDescription from "../TitleDescription";
import VHText from "../Text";
import { Row } from "../../Grid";

const VHTimeLine = props => {
  const getDate = date => new Date(date).toDateString().slice(4, 10);
  const getDay = date => new Date(date).getDate()

  const dates = props.items.map(item => {
    return getDay(item.createdOn)
  })


  return (
    <Row className={`vh-time-line ${props.className ? props.className : ""}`}>
      <Row row alignItemsCenter justifySpaceBetween>
        <VHText
          onEvent={props.onEvent}
          text="ACTIVITY"
          variant="subtitle2"
          color="gray-90"
        />
        <VHText
          onEvent={props.onEvent}
          text={`Total: ${props.totalDays}`}
          variant="caption"
          color="gray-50"
        />
      </Row>
      <S.Group>
        {props.items.map((item, index) => {
          return (
            <S.Item key={`vh-time-line-item${index}`}>
              <S.Circle />
              <S.WrapperText>
                <S.Date>
                  {getDate(item.createdOn)}
                  <VHText
                    onEvent={props.onEvent}
                    text={ dates[index + 1] !== undefined && ` ${dates[index + 1] - dates[index]} days` }
                    variant="caption"
                    color="gray-50"
                  />
                </S.Date>
                {item.items.length > 1 ? (
                  <Row>
                    {item.items.map(item => {
                      return (
                        <S.WrapperSameDate key={`vh-time-line-${item.columnName}`}>
                          <VHTitleDescription
                            className="vh-title-description-time-line"
                            data={item}
                            description={item.description}
                            descriptionColor="gray-50"
                            descriptionVariant="caption"
                            onEvent={props.onEvent}
                            title={item.columnName}
                            titleColor="gray-90"
                            titleVariant="platform2"
                          />
                        </S.WrapperSameDate>
                      );
                    })}
                  </Row>
                ) : (
                  <Row>
                    {item.items.map(item => {
                      return (
                        <VHTitleDescription
                          key={`vh-time-line-${item.columnName}`}
                          className="vh-title-description-time-line"
                          data={item}
                          description={item.description}
                          descriptionColor="gray-50"
                          descriptionVariant="caption"
                          onEvent={props.onEvent}
                          title={item.columnName}
                          titleColor="gray-90"
                          titleVariant="platform2"
                        />
                      );
                    })}
                  </Row>
                )}
              </S.WrapperText>
            </S.Item>
          );
        })}
      </S.Group>
    </Row>
  );
};

VHTimeLine.defaultProps = {
  items: [],
  totalDays: "",
  className: "",
  onEvent: null
};

VHTimeLine.propTypes = {
  items: PropTypes.array,
  totalDays: PropTypes.string,
  className: PropTypes.string,
  onEvent: PropTypes.func
};

export default VHTimeLine;
