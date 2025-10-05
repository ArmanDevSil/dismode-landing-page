import type React from 'react';

import roadmapImg from '../assets/img/roadmap.png';
import mentoringImg from '../assets/img/mentoring.png';
import guidedImg from '../assets/img/guided.png';
import jobImg from '../assets/img/job.png';

interface howItWorksStep {
  title: string;
  text: React.ReactNode | string;
  img: string;
}

export const howItWorksSteps: howItWorksStep[] = [
  {
    title: 'Personalized RoadMap',
    text: (
      <>
        Create a <strong>personalized RoadMap</strong> that will be used in your
        learning.
      </>
    ),
    img: roadmapImg,
  },
  {
    title: 'Unlimited Mentoring',
    text: (
      <>
        Have <strong>unlimited mentoring</strong> all along the learning.
      </>
    ),
    img: mentoringImg,
  },
  {
    title: 'Guided Courses',
    text: (
      <>
        With <strong>guided courses</strong>, complete new projects to use as
        portfolio.
      </>
    ),
    img: guidedImg,
  },
  {
    title: 'Job Opporturnitites',
    text: (
      <>
        Our students have <strong>80%</strong> more{' '}
        <strong>job opporturnitites</strong> with our partnerships
      </>
    ),
    img: jobImg,
  },
];
