import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../../assets/icons/close.svg'
import VHButton from '../Button'
import * as S from './styles';

const VHModal = props => {
  return (
    <S.ModalContainer open={props.open}>
      <S.ModalBox width={props.width}>
        <S.Header>
          <div>
           {props.header && props.header}
          </div>
          {!props.hideBtnClose && (
              <S.Close
                onClick={() => {
                  props.onEvent({
                    event: 'onClose',
                    target: 'VHModal'
                  })
                  props.onClose()}}>
                <img src={CloseIcon} alt="Close icon"/>
              </S.Close>
          )}
        </S.Header>
        <S.Content>
          {props.content}
        </S.Content>
        {props.confirmation && (
          <S.ConfirmationSection>
               <VHButton
                    primary
                    outline
                    label={props.cancelTitle}
                    onClick={props.onClose}/>
                <VHButton
                    disabled={props.disableAction}
                    primary
                    label={props.confirmType}
                    onClick={() => {
                      props.onEvent({
                        event: 'onConfirm',
                        target: 'VHModal',
                        type: props.confirmType,
                        data: props.data,
                      })
                      props.onClose()}}/>
          </S.ConfirmationSection>
        )}
      </S.ModalBox>
    </S.ModalContainer>
  );
};

VHModal.defaultProps = {
}

VHModal.propTypes = {
}

export default VHModal
