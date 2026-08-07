<script setup lang="ts">

import ExperienceEntryCard from '@/components/ExperienceEntryCard.vue'

const ExperienceEntries = [
  {
    company: "Frontier Airlines",
    position: "Software Developer Intern",
    description: [
      `Developed and maintained full-stack object-oriented software in an agile development environment, 
      working with over 20 software developers, testers, and interns supporting airline business operations.`,
      `Built an endpoint status dashboard utilizing Vue.js for our team and third-party partners to 
      quickly monitor endpoint health.`,
      `Acted as the primary front-end developer for the endpoint dashboard project, designing wireframes, 
      developing with the Vue.js web framework, building the GUI, and integrating it with the .NET backend.`
    ],
    location: "Denver, CO",
    date: "May 2019 - Feb. 2022",
    skills: [
      "Vue.js",
      "HTML",
      "CSS",
      "Typescript",
      "Azure",
      "Postman",
      ".NET",
      "Team Projects",
    ],
  },

  {
    company: "University of Colorado Boulder Smead Aerospace",
    position: "Teaching Facilitator - Intro to Thermodynamics and Aerodynamics",
    description: [
      `Managed the class’s online Q&A forum for 120 students and provided guidance 
      for student technical and general questions.`,
      `Hosted office hours for 15 weeks, averaging 10-15 questions per session and guided students 
      through answers using an engineering problem-solving framework and first-principles analysis.`,
      `Communicated with the professor and other teaching facilitators to ensure smooth operation of the class.`
    ],
    location: "Boulder, CO",
    date: "Aug. 2023 - Dec. 2023",
    skills: [
      "Thermodynamics",
      "Aerodynamics",
      "First Principles Analysis",
      "Education",
      "Tutoring",
    ]
  },

  {
    company: "Colorado Association of Black Professional Engineers and Scientists",
    position: "Teaching Assistant - Summer Math Boot Camp",
    description: [
      `Supervised daily activities for students in grades 6-11, encouraging student engagement and 
      collaboration.`,
      `Assisted students with individual coursework on an online learning platform and supervising 
      classrooms of approximately 10-20 students primarily in 6th and 7th grades.`
    ],
    location: "Denver, CO",
    date: "Jun. 2018 - Jul. 2018",
    skills: [
      "Mathematics",
      "Education",
      "Tutoring",
    ]
  },
  {
    company: "American Paintball Coliseum",
    position: "Team Member",
    description: [
      `Lead customer experiences, including equipment rentals, safety orientations, game 
      coordination, and rule enforcement, to ensure customer safety.`,
      `Maintained the facility and equipment, such as setup and takedown of inflatable barriers, 
      cleaning paintball markers and masks, and maintaining facility cleanliness.`
    ],
    location: "Denver, CO",
    date: "Oct. 2016 - Jul. 2018",
    skills: [
      "Communication",
      "Customer Service",
      "Safety",
      "Teamwork",
    ]
  }
]

</script>

<template>

  <section>

    <h2 class="text-3xl font-bold mt-8">
      Work Experience
    </h2>


    <div class="x-auto flex max-w-4xl flex-col gap-8 py-4">

      <ExperienceEntryCard
        v-for="experience in ExperienceEntries"
        :key="experience.position"
        :experience="experience"
      />

    </div>

  </section>

</template>