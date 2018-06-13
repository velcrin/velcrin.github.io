import * as React from 'react';
import { injectGlobal } from 'styled-components';
import normalize from 'styled-normalize';
import { Header } from '../templates/Header';
import { Body } from '../templates/Body';
import { Paragraph } from '../atoms/Paragraph';
import { Experience } from '../organisms/Experience';
import { Resume } from '../templates/Resume';
import { Citation } from '../molecules/Quote';
import { Footer } from '../templates/Footer';
import { MainTitle } from '../atoms/MainTitle';
import { Social } from '../organisms/Social';
import { Myself } from '../organisms/Myself';
import Head from 'next/head';

injectGlobal`
  ${normalize}
  
  @import url('https://fonts.googleapis.com/css?family=Dosis');
  
  body {
    font-family: 'Dosis', sans-serif;
    font-size: 24px;
    line-height: 1.6;
  }
`;

export default () => (
  <Resume>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header>
      <MainTitle>Hello.</MainTitle>
      <Paragraph>
        I’m Vincent. A software engineer with 8 years of experience in building
        solutions in all kind of environment. Now living in Mainz, Germany. I
        speak French and English. When I’m not at a concert or cooking
        something, I just love solving real problems with a clean code and a
        good UX.
      </Paragraph>
      <Social />
    </Header>
    <Body>
      <Experience
        job="Frontend Engineer"
        title="Since 2017 at Optimiz.me located in Lyon and remotely"
        environment={[
          'Typescript',
          'MongoDB',
          'MariaDB',
          'Node',
          'React',
          'Redux',
          'RxJS',
          'Sketch',
          'Agile',
          'Design Thinking',
          'TDD',
          'CI/CD',
          'git-flow',
          'Gitlab',
          'Sass',
          'Bem',
          'Webpack'
        ]}
      >
        <Citation author="Bruce Nussbaum">
          Innovation is no longer just about new technology per se. It is about
          new models of organisation. Design is no longer just about form
          anymore but is a method of thinking that can let you to see around
          corners. And the high tech breakthroughs that do count today are not
          about speed and performance but about collaboration, conversation and
          co-creation.
        </Citation>
        <Paragraph>
          A real startup and human experience. We are building a SaaS platform
          to help brands and e-commerce to improve their performance using the
          internet. Here I can take great care of the UI and the UX, building
          prototypes and designing parts of the application using Sketch,
          InVision, and Zeplin. I am also part of the development team building
          the entire solution from scratch, in addition to mentoring and sharing
          through Pair Programming and code review. We focus a lot on the user
          experience and the way we deliver new features. Leveraging CI/CD,
          Design Thinking, and other Agile practices.
        </Paragraph>
      </Experience>
      <Experience
        job="Software Engineer"
        title="From 2012 to 2016 at Bonitasoft located in Grenoble"
        environment={[
          'Java',
          'Spring',
          'GWT',
          'Javascript',
          'AngularJS',
          'TDD',
          'CI/CD',
          'Agile',
          'UCD',
          'Github',
          'LESS',
          'gulp'
        ]}
      >
        <Paragraph>
          Served in the R&D team to build Bonita, an Open-Source business
          process management, and workflow application platform. I developed
          features cross components with Java and Javascript in an Agile
          environment. Notably, I was part of the team which fully revamped the
          front stack. I also collaborated on the creation of a web-based page
          editor using technologies such as Java/Spring and AngularJS. We
          successfully introduced practices such as CD, TDD and code review. It
          also gave me the opportunity to get involved in the community and
          talked to different conferences in Grenoble and Lyon.
        </Paragraph>
      </Experience>
      <Experience
        job="Software Engineer"
        title="From September 2010 à September 2012 to at APT Codec located in Belfast"
        environment={['C/C++', 'Java/C#', 'HTML5', 'CSS', 'GWT']}
      >
        <Paragraph>
          APT specializes in developing professional equipment to transport
          Audio over IP. I participated with the rest of the software team in
          developing and maintaining a proprietary web framework built on top of
          GWT. I have also built monitoring features in C/C++ on low-performance
          devices, Frontend administration applications in HTML5/GWT and Network
          Management Systems in Java/C#.
        </Paragraph>
      </Experience>
    </Body>
    <Footer>
      <Myself />
    </Footer>
  </Resume>
);
