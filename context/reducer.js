const reducer = (state, action) => {
  if (action.type === 'SET_LOADING') {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === 'SET_USER_SUCCESS') {
    return { ...state, user: action.payload, showAlert: false };
  }

  if (action.type === 'SET_USER_SUCCESS') {
    return { ...state, user: null, showAlert: false };
  }

  if (action.type === 'FETCH_LOGGED_USER_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      user: action.payload,
    };
  }

  if (action.type === 'FETCH_LOGGED_USER_ERROR') {
    return {
      ...state,
      isLoading: false,
      user: null,
      showAlert: true,
    };
  }

  if (action.type === 'FETCH_WATCHLIST_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      watchlist: action.payload,
    };
  }

  if (action.type === 'FETCH_WATCHLIST_ERROR') {
    return { ...state, isLoading: false };
  }

  if (action.type === 'ADD_TO_WATCHLIST_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      watchlistItem: action.payload,
    };
  }

  if (action.type === 'ADD_TO_WATCHLIST_ERROR') {
    return {
      ...state,
      isLoading: false,
      watchlistItem: null,
      showAlert: true,
    };
  }

  if (action.type === 'REMOVE_FROM_WATCHLIST_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      watchlistItem: action.payload,
    };
  }

  if (action.type === 'REMOVE_FROM_WATCHLIST_ERROR') {
    return {
      ...state,
      isLoading: false,
      watchlistItem: null,
      showAlert: true,
    };
  }

  if (action.type === 'REMOVE_FROM_WATCHED_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      watchedItem: action.payload,
    };
  }

  if (action.type === 'REMOVE_FROM_WATCHED_ERROR') {
    return {
      ...state,
      isLoading: false,
      watchedItem: null,
      showAlert: true,
    };
  }

  if (action.type === 'FETCH_WATCHED_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      watched: action.payload,
    };
  }

  if (action.type === 'FETCH_WATCHED_ERROR') {
    return { ...state, isLoading: false };
  }

  if (action.type === 'ADD_TO_WATCHED_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      watchedItem: action.payload,
    };
  }

  if (action.type === 'ADD_TO_WATCHED_ERROR') {
    return {
      ...state,
      isLoading: false,
      watchedItem: null,
      showAlert: true,
    };
  }

  if (action.type === 'REGISTER_USER_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      user: action.payload,
    };
  }

  if (action.type === 'REGISTER_USER_ERROR') {
    return {
      ...state,
      isLoading: false,
      user: null,
      showAlert: true,
    };
  }

  if (action.type === 'LOGIN_USER_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      user: action.payload,
    };
  }

  if (action.type === 'LOGIN_USER_ERROR') {
    return {
      ...state,
      isLoading: false,
      user: null,
      showAlert: true,
    };
  }

  if (action.type === 'LOGOUT_USER') {
    return {
      ...state,
      user: undefined,
      isLoading: false,
      showAlert: false,
    };
  }

  throw new Error(`no such action : ${action}`);
};

export default reducer;
