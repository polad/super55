import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import withReduxField from '../hoc/withReduxField';
import SearchBar from '../components/SearchBar';

const enhance = compose(
  withReduxField,
  withState('suggestions', 'setSuggestions', []),
  withState('userInput', 'setInput', ''),
  withState('anchorEl', 'setAnchorEl', null),
  withHandlers({
    handleSelect: props => (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
      // TODO: do smth
    },

    handleTextChange: props => (event, { newValue }) => {
      props.setInput(newValue);

      if (!newValue) {
        props.input.onChange('');
      }

      if (!props.anchorEl) {
        props.setAnchorEl(event.target);
      }
    },

    handleSuggestionsFetch: props => ({ value, reason }) => {
      // TODO: fetch suggestions
      // TODO: props.setSuggestions()
      props.setSuggestions(['a', 'b', 'c']);
    },

    handleSuggestionsClear: props => () => {
      // TODO: handle suggestion clear
      props.setSuggestions([]);
    },

    getSuggestionValue: () => suggestion => {
      // TODO: set suggestion value extractor
      return suggestion;
    },
  })
);

export default enhance(SearchBar);
