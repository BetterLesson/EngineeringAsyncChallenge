import news1 from 'common/assets/image/agencyModern/news/3.png';
import news2 from 'common/assets/image/agencyModern/news/1.png';
import news3 from 'common/assets/image/agencyModern/news/2.png';
import member1 from 'common/assets/image/team/member1.jpg';
import member2 from 'common/assets/image/team/member2.jpg';
import member3 from 'common/assets/image/team/member3.jpg';
import {Icon} from "react-icons-kit";
import facebook from 'common/assets/image/agencyModern/icons/facebook.png';
import twitter from 'common/assets/image/agencyModern/icons/twitter.png';
import { socialDribbble } from 'react-icons-kit/ionicons/socialDribbble';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialGoogleplus } from 'react-icons-kit/ionicons/socialGoogleplus';
import { socialSkype } from 'react-icons-kit/ionicons/socialSkype';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';

export const teamData = {
  slogan: 'Meet Our Coaches',
  members: [
    {
      id: 1,
      avatar: member1,
      name: 'Jessica D.',
      availableDate: '11/6/22',
      designation: 'Professional Services',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      id: 2,
      avatar: member2,
      name: 'David F.',
      availableDate: '8/5/21',
      designation: 'Sports/Fitness',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      id: 3,
      avatar: member3,
      name: 'Naina Cooper',
      availableDate: '4/12/22',
      designation: 'E-Sports',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
  ],
};

const data = {
  leftMenuItems: [
    {
      label: 'Home',
      path: '#home',
      offset: '70',
    },
    {
      label: 'Experts',
      path: '#Experts',
      offset: '70',
    },
    {
      label: 'Features',
      path: '#features',
      offset: '70',
    },
    {
      label: 'News',
      path: '#news',
      offset: '70',
    },
  ],
  rightMenuItems: [
    {
      label: 'Login',
      path: '#home',
      offset: '70',
    },
    {
      label: 'Sign Up',
      path: '#home',
      offset: '70',
    },
  ],
  mobileMenuItems: [
    {
      label: 'Home',
      path: '#home',
      offset: '70',
    },
    {
      label: 'Services',
      path: '#services',
      offset: '70',
    },
    {
      label: 'Features',
      path: '#features',
      offset: '70',
    },
    {
      label: 'News',
      path: '#news',
      offset: '70',
    },
    {
      label: 'Login',
      path: '#',
      offset: '70',
    },
    {
      label: 'Sign Up',
      path: '#',
      offset: '70',
    },
  ],
  posts: [
    {
      id: 1,
      icon: news1,
      title: 'Why Coaching Is Essential for Personal and Professional Growth',
      comments_count: 122,
    },
    {
      id: 2,
      icon: news2,
      title: 'How Coaching Can Help Entrepreneurs Start and Grow Their Business',
      comments_count: 215,
    },
    {
      id: 3,
      icon: news3,
      title: 'Expanding Coaching Services Beyond K-12 Education',
      comments_count: 218,
    },
  ],
  aboutUs: [
    {
      id: 1,
      title: 'Support Center',
    },
    {
      id: 2,
      title: 'Customer Support',
    },
    {
      id: 3,
      title: 'About Us',
    }
  ],
  ourInformation: [
    {
      id: 1,
      title: 'Privacy Policy',
    },
    {
      id: 2,
      title: 'Terms & Conditions',
    },
    {
      id: 3,
      title: 'Site Map',
    },
  ],
  myAccount: [
    {
      id: 1,
      title: 'Press inquiries',
    },
    {
      id: 2,
      title: 'Social media',
    },
    {
      id: 3,
      title: 'directories',
    }
  ],
  social: [
    {
      id: 1,
      icon: facebook,
      title: 'Facebook',
    },
    {
      id: 2,
      icon: twitter,
      title: 'Twitter',
    }
  ],
};
export default data;
