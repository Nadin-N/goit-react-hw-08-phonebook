import { setFilterValue } from 'redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import {
  FilterSection,
  SearchInput,
  SearchLabel,
  TitleH2,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterSection>
      <TitleH2>Find contact</TitleH2>
      <SearchLabel>
        Find contacts by name
        <SearchInput
          type="text"
          name="name"
          required
          placeholder="Enter name"
          onChange={e => dispatch(setFilterValue(e.target.value))}
        />
      </SearchLabel>
    </FilterSection>
  );
};
