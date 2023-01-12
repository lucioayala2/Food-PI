import React from 'react';
import { PAGINAS as paginas } from '../reducer/actions';
import { useDispatch } from 'react-redux';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

export default function Paginas({
  tamañoRecipe,
  tamañoPorpagina,
  pageactual,
}) {
  const dispach = useDispatch();
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(tamañoRecipe / tamañoPorpagina); i++) {
    pageNumbers.push(i + 1);
  }

  function handelClickpage(numero) {
    dispach(paginas(numero));
  }

  /* next */
  function handleClickNext() {
    if (pageactual < pageNumbers.length) {
      dispach(paginas(pageactual + 1));
    } else {
      alert('No more pages');
    }
  }
  function handleClickPreview() {
    if (pageactual > 1) {
      dispach(paginas(pageactual - 1));
    } else {
      alert('No more pages');
    }
  }

  return (
    <div>
      <button onClick={handleClickPreview}>
        <FaAngleDoubleLeft />
      </button>
      {pageNumbers.map((page) => {
        return (
          <button
            key={page}
            onClick={() => handelClickpage(page)}
          >
            {page}
          </button>
        );
      })}
      <button onClick={handleClickNext}>
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}
