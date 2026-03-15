import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../Button/Button";

interface PaginationProps {
  currentPage: number;
  totalPageCount: number;
  paginationRange: (number | string)[];
  onNext: () => void;
  onPrev: () => void;
  onPageChange: (page: number) => void;
  compact?: boolean;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPageCount,
  paginationRange,
  onNext,
  onPrev,
  onPageChange,
  compact = false,
  className = "",
}) => {
  if (totalPageCount <= 1) return null;

  return (
    <div className={`flex justify-center items-center ${compact ? "flex-nowrap gap-1.5 mt-8" : "flex-wrap gap-2 md:gap-3 mt-12 md:mt-20"} ${className}`}>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={(e) => {
          e.preventDefault();
          onPrev();
        }}
        disabled={currentPage === 1}
        className={compact ? "p-2! min-w-8! h-8!" : "p-3! md:p-4!"}
        title="Previous Page"
      >
        <FaChevronLeft className={`${compact ? "text-[10px]" : "text-sm md:text-base"} text-brand-accent`} />
      </Button>

      <div className={`flex ${compact ? "flex-nowrap gap-1" : "flex-wrap justify-center gap-1 md:gap-2"}`}>
        {paginationRange?.map((page, i) => (
          <Button
            key={i}
            type="button"
            variant={currentPage === page ? "primary" : "ghost"}
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              if (typeof page === "number") onPageChange(page);
            }}
            disabled={page === "..."}
            className={`${compact ? "w-8! h-8! p-0!" : "w-10! h-10! md:w-12! md:h-12! p-0!"} rounded-xl! ${
              currentPage === page
                ? `${compact ? "scale-100" : "scale-105 md:scale-110"} shadow-lg shadow-brand-accent/30 font-black text-[10px] md:text-base`
                : `font-bold text-brand-muted ${compact ? "text-[10px]" : "text-xs md:text-base"}`
            }`}
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={(e) => {
          e.preventDefault();
          onNext();
        }}
        disabled={currentPage === totalPageCount}
        className={compact ? "p-2! min-w-8! h-8!" : "p-3! md:p-4!"}
        title="Next Page"
      >
        <FaChevronRight className={`${compact ? "text-[10px]" : "text-sm md:text-base"} text-brand-accent`} />
      </Button>
    </div>
  );
};

export default Pagination;
