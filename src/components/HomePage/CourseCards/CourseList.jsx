import React from 'react';
import CourseCard from './CourseCards';
import { course_data } from '../../constants/data';



const CourseList = () => {
 const slicedCourses = course_data.slice(0, 5);


  return (
    <div className="flex flex-wrap justify-center courseCard">
      {slicedCourses.map((courses, index) => (
        <CourseCard key={index} courseData={courses} />
      ))}
    </div>
  );
};

export default CourseList;
