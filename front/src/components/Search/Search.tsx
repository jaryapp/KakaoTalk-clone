/* External dependencies */
import React, { useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { AiOutlineSearch } from 'react-icons/ai';

/* Internal dependencies */

const StyledSearch = styled.div`
  background: #f7f7f7;
  width: 100%;
  display: flex;
  align-items: center;
  height: 22px;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-radius: 3px;
  &.focus {
    border: solid 2px #8ab4fa;
  }
  input {
    flex-grow: 1;
    background: transparent;
    border: none;
    outline: none;
  }
  input::placeholder {
    color: #b9b9b9;
  }
  .icon {
    margin: 0px 5px;
    margin-bottom: -5px;
  }
`;

interface SearchParams {
  placeholder?: string;
}

const Search: React.FC<SearchParams> = ({ placeholder }) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onFocusInput = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  return (
    <StyledSearch className={classNames(isFocus && 'focus')}>
      <figure className="icon">
        <AiOutlineSearch />
      </figure>
      <input
        type="search"
        placeholder={placeholder}
        onFocus={onFocusInput}
        onBlur={onBlur}
      />
    </StyledSearch>
  );
};

export default Search;
