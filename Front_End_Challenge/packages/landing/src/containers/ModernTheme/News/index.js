import React from 'react';

import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import BlogPost from 'common/components/BlogPost';

import SectionWrapper, { SectionHeading, NewsWrapper } from './news.style';

import data from 'common/data/ModernTheme';
import comment from 'common/assets/image/agencyModern/comment.png';

const News = () => {
  return (
    <SectionWrapper id="news">
      <Container>
        <SectionHeading>
          <Heading as="h2" content="Popular blog post we update everyday" />
          <Text content="Focus only on your business, we take care of the rest." />
        </SectionHeading>
        <NewsWrapper>
          {data.posts.map((post) => (
            <BlogPost
              key={`news-${post.id}`}
              thumbUrl={post.icon}
              title={post.title}
              link={
                <React.Fragment>
                  <img src={comment?.src} alt="comment" /> {post.comments_count}
                  comments
                </React.Fragment>
              }
            />
          ))}
        </NewsWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default News;
