import React from 'react'
import PropTypes from 'prop-types'
import { primarySubjects } from '../constants/SubjectTypes'

const BestSubject = ({ maxScoreWrapper, subjectType }) => {
  if (maxScoreWrapper === null) {
    return null
  } else {
    return (
      <div>
        <p>
          Maksymalny wynik dla {subjectType === primarySubjects ? 'przedmiotu głównego' : 'języka'} to
          &nbsp;<b>{maxScoreWrapper.computedScore}</b> punktów dla przedmiotu
          &nbsp;<b>{maxScoreWrapper.subject.name === '' ? 'przedmiotu bez nazwy' : maxScoreWrapper.subject.name}</b>
          &nbsp;obliczony zgodnie z formułą
          &nbsp;{maxScoreWrapper.formula === 'A/B' ? 'A lub B' : maxScoreWrapper.formula}.
        </p>
      </div>
    )
  }
}
BestSubject.propTypes = {
  maxScoreWrapper: PropTypes.any.isRequired,
  subjectType: PropTypes.string.isRequired
}

export default BestSubject
