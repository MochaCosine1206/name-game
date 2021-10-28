import createDataContext from "./createDataContext";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_GAME_MODE":
      return {
        ...state,
        gameMode: action.payload.gameMode,
      };
    default:
      return state;
  }
};

const changeGameMode = (dispatch) => ({ gameMode }) => {
    dispatch({ type: "CHANGE_GAME_MODE", payload: {
        gameMode
    }})

  };

export const { Provider, Context } = createDataContext(
  dataReducer,
  { changeGameMode },
  { gameMode: "gameOver" }
);