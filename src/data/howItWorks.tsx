import type React from 'react';

interface howItWorksStep {
  title: string;
  text: React.ReactNode | string;
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
  },
  {
    title: 'Unlimited Mentoring',
    text: 'Have unlimited mentoring all along the learning.',
  },
  {
    title: 'Guided Courses',
    text: 'With guided courses, complete new projects to use as portfolio.',
  },
  {
    title: 'Job Opporturnitites',
    text: 'Our students have 80% more job opporturnitites with our partnerships',
  },
];
