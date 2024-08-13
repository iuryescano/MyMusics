import React from 'react';
import { FaStar } from 'react-icons/fa'; // Usando o ícone de estrela da biblioteca react-icons
import { Container, Star } from './styles';

export function StarRating({ rating }) {
  return (
    <Container>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} selected={star <= rating}>
          <FaStar />
        </Star>
      ))}
    </Container>
  );
}