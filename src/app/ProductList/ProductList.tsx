/* eslint-disable react/prop-types */
import { useState } from 'react';

import { GetProductsResponse } from 'api/actions/auth/auth.types';
import { Pagination } from 'app/Pagination/Pagination';
import { ProductCard } from 'app/ProductCard/ProductCard';
import task_list from 'assets/images/task_list.svg';
import { ProductModal } from 'app/ProductModal/ProductModal';

interface ProductListProps {
  products: GetProductsResponse;
  onChangePage: (newPage: number) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onChangePage }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ name: 'Lorem ipsum', description: 'Lorem ipsum', image: '' });

  const { items, meta } = products;
  const { currentPage, itemCount, totalPages } = meta;

  const toggleModal = (modalData?: { name: string; description: string; image: string }) => {
    if (!modalData) {
      setModalOpen(false);
      return;
    }

    setModalInfo(modalData);
    setModalOpen(true);
  };

  if (itemCount === 0) {
    return (
      <div className="oops_wrapper">
        <main className="oops">
          <div className="oops_content">
            <img src={task_list} alt="task_list_logo" className="oops_image" />
            <div className="oops_title">Ooops… It’s empty here</div>
            <div className="oops_description">There are no products on the list</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="catalog_wrapper">
      {modalOpen && (
        <ProductModal
          name={modalInfo.name}
          description={modalInfo.description}
          image={modalInfo.image}
          onModalClose={toggleModal}
        />
      )}
      <main className="catalog">
        {items.map((item) => {
          const { id, name, description, rating, image, promo, active } = item;

          return (
            <ProductCard
              key={id}
              name={name}
              description={description}
              rating={rating}
              image={image}
              promo={promo}
              active={active}
              modalOpened={modalOpen}
              onModalOpened={toggleModal}
            />
          );
        })}
      </main>

      <Pagination currentPage={currentPage} totalPages={totalPages} onChangePage={onChangePage} />
    </div>
  );
};
