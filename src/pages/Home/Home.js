import React from 'react';
import Rectangle from './../../components/Advertising/Rectangle/Rectangle';
import PrimaryHeader from './../../components/PrimaryHeader/PrimaryHeader';
import Container from './../../components/Container/Container';

const Home = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Rectangle>
          <Container>
            <PrimaryHeader>Project Collaborator</PrimaryHeader>
          </Container>
        </Rectangle>
      </div>
    </>
  );
};

export default Home;
