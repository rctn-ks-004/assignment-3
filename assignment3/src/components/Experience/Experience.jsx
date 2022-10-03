import React from 'react'
import { Header } from '../Header';
import useAnimate from '../Hooks';

const Experience = () => {
  const { scrollPercent } = useAnimate(60, 100);

  return (
      <section class="experience">
          <Header scrollPercent={scrollPercent === 0 ? 10 : scrollPercent - 60}>
              Experience
          </Header>
          <div class="container">
              <div class="content">
                  <h3>Participant of OSK Mathematics</h3>
                  <span>2018</span>
              </div>
              <div class="content">
                  <h3>
                      Public relation at 'The Power of Cobra' Road to Dies
                      Natalis SMAN 1 Cikarang Utara
                  </h3>
                  <span>2018</span>
              </div>
              <div class="content">
                  <div>
                      <h3>Social Media Admin at Kean Store</h3>
                      <p>
                          Responsible fot replying customer's chat and doing a
                          financial statements
                      </p>
                  </div>
                  <span>April 2019 - July 2020</span>
              </div>
              <div class="content">
                  <h3>Public relation at TCircus 2021</h3>
                  <span>April 2019 - July 2020</span>
              </div>
              <div class="content">
                  <div>
                      <h3>Frontend Developer at Simplus</h3>
                      <p>
                          Used several tech stack like React Native, React JS,
                          Tailwind CSS, Typescript, MobX
                      </p>
                  </div>
                  <span>February 2022 - August 2022</span>
              </div>
              <div class="content">
                  <div>
                      <h3>Software Engineer Inter at DELOS</h3>
                      <p>
                          Used several tech stack like Next JS, Typescript, Javascript, Redux, Ant Design
                      </p>
                  </div>
                  <span>July 2022 - Present</span>
              </div>
          </div>
      </section>
  );
}

export default Experience;