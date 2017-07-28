import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import renderInput from './Input';
import renderSuggestion from './Suggestion';
import renderSuggestionsContainer from './SuggestionContainer';

class SearchBar extends Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired,
    meta: PropTypes.object.isRequired,
  };

  render() {
    /* eslint-disable react/prop-types, no-unused-vars */
    const {
      anchorEl,
      input,
      meta,
      floatingLabelText,
      fullWidth,

      country,
      suggestions,
      userInput,

      handleSelect,
      handleTextChange,
      handleSuggestionsFetch,
      handleSuggestionsClear,
      getSuggestionValue,

      ...rest
    } = this.props;
    /* eslint-enable */

    const inputProps = {
      name: input.name,
      input,
      value: userInput,
      onChange: handleTextChange,
      onFocus: input.onFocus,
      floatingLabelText,
      fullWidth,
      errorText: meta.visited && meta.error,
    };

    return (
      <Autosuggest
        id={`search-bar-${input.name}`}
        suggestions={suggestions}
        renderInputComponent={renderInput}
        renderSuggestion={renderSuggestion}
        renderSuggestionsContainer={renderSuggestionsContainer(anchorEl)}
        getSuggestionValue={getSuggestionValue}
        onSuggestionsFetchRequested={handleSuggestionsFetch}
        onSuggestionsClearRequested={handleSuggestionsClear}
        onSuggestionSelected={handleSelect}
        inputProps={inputProps}
      />
    );
  }
}

export default SearchBar;
