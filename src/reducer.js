const initialState = {
  categories: [
    "Food",
    "Entertainment",
    "Transportation",
    "Services",
    "Salary",
    "ExtraIncome"
  ],
  transactions: {
    1556755200000: {
      id: 1556755200000,
      category: "Salary",
      amount: 2200,
      type: "ingresses"
      // '5/1/2019'
    },
    1556841600000: {
      id: 1556841600000,
      category: "Food",
      amount: -200,
      type: "withdraws"
      // 5/2/2019
    },
    1559433600000: {
      id: 1559433600000,
      category: "Food",
      amount: -500,
      type: "withdraws"
      // 6/1/2019
    },
    1559520000000: {
      id: 1559520000000,
      category: "Food",
      amount: -200,
      type: "withdraws"
      // 6/2/2019
    },
    1559606400000: {
      id: 1559606400000,
      category: "Salary",
      amount: 1200,
      type: "ingresses"
      // 6/3/2019
    }
  },
  results: {
    "2019-05": {
      id: "2019-05",
      initialBalance: 100,
      ingresses: 2200,
      withdraws: -200,
      finalBalance: 2100
    },
    "2019-06": {
      id: "2019-06",
      initialBalance: 2100,
      ingresses: 1200,
      withdraws: -700,
      finalBalance: 2600
    }
  }
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return {
        ...state,
        transactions: {
          ...state.transactions,
          [action.payload.transaction.id]: action.payload.transaction
        }
      };
    }
    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
