import { ButtonLoadMore } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load More
    </ButtonLoadMore>
  );
};
