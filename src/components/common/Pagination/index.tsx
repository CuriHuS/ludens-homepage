import { useEffect, useId, useRef, useState } from 'react';

type PaginationProps = {
  handlePageClick: (clickedPage: number) => void;
  numberOfPages: number;
  currentPage: number;
};

export function Pagination({ handlePageClick, numberOfPages, currentPage }: PaginationProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const ulElement = container.querySelector('ul');

      if (ulElement) {
        const containerWidth = container.offsetWidth;
        const ulWidth = ulElement.scrollWidth;

        setIsCentered(ulWidth <= containerWidth);
      }
    }
  }, [numberOfPages]);

  useEffect(() => {
    if (containerRef.current) {
      const activeItem = containerRef.current.querySelector(`li[data-page="${currentPage}"]`);
      if (activeItem) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const itemLeft = (activeItem as HTMLElement).offsetLeft;
        const itemWidth = (activeItem as HTMLElement).offsetWidth;

        container.scrollTo({
          left: itemLeft - containerWidth / 2 + itemWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [currentPage]);

  return (
    <div 
      className={`w-full mx-5 flex items-center overflow-x-scroll scrollbar-hide ${isCentered ? 'justify-center' : ''}`}
      ref={containerRef}
    >
      <ul className="mt-8 flex text-base font-normal leading-[150%] hover:cursor-pointer">
        {[...new Array(numberOfPages)].map((_, i) => {
          const isSelected = currentPage === i + 1;
          return (
            <li
              onClick={() => handlePageClick(i + 1)}
              className={`w-14 h-14 flex items-center justify-center ${
                isSelected ? 'text-white font-bold' : 'text-white/60 font-medium'
              }`}
              key={`page-${id}-${i + 1}`}
              data-page={i + 1}
            >
              {i + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
