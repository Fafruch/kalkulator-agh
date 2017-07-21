import React from 'react'
import PropTypes from 'prop-types'

import SubjectListContainer from '../containers/SubjectListContainer'
import AddSubjectContainer from '../containers/AddSubjectContainer'
import { primarySubjects } from '../constants/SubjectTypes'

const Subjects = ({ subjectsType }) => (
  <div className='mt-5 mb-5'>
    <h2>{subjectsType === primarySubjects ? 'Przedmioty główne' : 'Języki'} </h2>
    <SubjectListContainer subjectsType={subjectsType} />
    <AddSubjectContainer subjectsType={subjectsType} />
  </div>
)
Subjects.propTypes = {
  subjectsType: PropTypes.string.isRequired
}

export default Subjects
