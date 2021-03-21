function reducer(state, action) {
  switch (action.type) {
    case 'SET_MODAL':
      return {
        ...state,
        modal: action.payload
      };
    case 'SET_POKEMON_PROFILE':
      return {
        ...state,
        pokemonProfile: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
