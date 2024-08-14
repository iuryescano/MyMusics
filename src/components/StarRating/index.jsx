import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Container, StarList, StarItem } from './styles';

export function StarRating({ rating }) {
  return (
    <Container>
      <StarList>
        {[1, 2, 3, 4, 5].map((star) => (
          <StarItem key={star} selected={star <= rating}>
            <FaStar />
          </StarItem>
        ))}
      </StarList>
    </Container>
  );
}