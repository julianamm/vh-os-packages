import React from 'react'
import PropTypes from 'prop-types'
import VHAvatar from '../Avatar'
import * as S from './styles'

const VHComments = props => {
    return (
        <React.Fragment>
            <S.Title>{`Comments (${props.comments.length})`}</S.Title>
            <div style={{ height: '150px', overflow: 'scroll' }}>
                {props.comments.map(comment =>
                    <React.Fragment>
                        <S.Wrapper>
                            <VHAvatar image={comment.image}
                                size={"md"} />
                            <S.Name >{comment.fullName}</S.Name>
                            <S.Date >{comment.days}</S.Date>
                        </S.Wrapper>
                <S.Description>{comment.event}</S.Description>
                    </React.Fragment>
                )}
            </div>
            <S.CommentWrapper>
                <VHAvatar image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
                    size={"md"} />
                <S.Area placeholder='Ask a question or post a uptade'></S.Area>
            </S.CommentWrapper>
        </React.Fragment>
    )

}
VHComments.defaultProps = {
}

VHComments.propTypes = {
}

export default VHComments
