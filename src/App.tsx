import { useEffect, useState } from "react";
import { getImages } from "./apiService/photos";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import SearchBar from "./components/SearchBar/SearchBar";
import './App.css';

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  user: {
    name: string;
  };
  likes: number;
} 

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean | null>(null);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [imageCard, setImageCard] = useState<Image | null>(null);
    
  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImages() {
      setIsError(false);
      setIsLoading(true);
      try {
        const data = await getImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setShowBtn(data.total_pages > page);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (searchWord: string) => {
    if (searchWord === query) return;
    setQuery(searchWord);
    setImages([]);
    setPage(1);
    setShowBtn(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }
  
   const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const getImageCard = (card: Image) => {
    setImageCard(card)
  }

  return (
    <div className='container'>
      <SearchBar onFormSubmit={onSetSearchQuery} /> 
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={"Sorry, something went wrong"} />}
      {images.length > 0 && <ImageGallery  images={images} getImageCard={getImageCard} openModal={openModal} />}
      {showBtn && <LoadMoreBtn onClick={handleLoadMore} disabled={false}>Load more</LoadMoreBtn>}
      {imageCard && (<ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        card={imageCard}/>)}  
    </div>
  )
}

export default App