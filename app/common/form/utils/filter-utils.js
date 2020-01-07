export const caseInsensitiveSearch = (stringSearchValue, autoCompleteEvent) =>
  autoCompleteEvent.props.children
    .toUpperCase()
    .indexOf(stringSearchValue.trim().toUpperCase()) !== -1;
