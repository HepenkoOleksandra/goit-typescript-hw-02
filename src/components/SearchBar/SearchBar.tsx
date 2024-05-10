import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FcSearch } from "react-icons/fc";
import React, { FormEvent} from 'react';
import { SearchBarProps } from './SearchBar.types';

const SearchBar: React.FC<SearchBarProps> = ({ onFormSubmit }) => {
  // (e: FormEvent<HTMLFormElement>): void =>
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const query = (e.currentTarget as HTMLFormElement).elements.namedItem("query") as HTMLInputElement;
    
    if(query.value === '') {  
    toast.error('Enter the search term, please!')
      return;
    }
    
    onFormSubmit(query.value.trim());
  }
  
  return (
  <header className={css.header}>
  <form onSubmit={handleSubmit} className={css.form}>  
    <input
      type="text"
      name="query"
      autoComplete="off"
      autoFocus
      className={css.search}
      placeholder="Search images and photos"
    />
    <button type="submit" className={css.button}><FcSearch /></button>
    <Toaster />           
  </form>
</header>
  )
}

export default SearchBar