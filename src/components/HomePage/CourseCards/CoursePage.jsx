import React from 'react'
import ExpertCard from './ExpertCard'
import CourseInfo from './CourseInfo'
import styles from '../../../style'
import { course_data } from '../../constants/data'


const CoursePage = () => {
  return (
    <div className={`${styles.paddingX} pt-10 expertise-Bg`}>
    <div className={`${styles.boxWidth}`}>
      <div className="text-white">
          <div className='my-10'><ExpertCard /></div>
        </div>

        <div>
        <CourseInfo courseData={course_data[0]} />
        </div>
        </div>
        </div>
  )
}

export default CoursePage