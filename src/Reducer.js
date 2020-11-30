//riksnorm 2020:
const memberCosts = {
  1: 1010,
  2: 1120,
  3: 1410,
  4: 1600,
  5: 1850,
  6: 2090,
  7: 2260,
};

//riksnorm 2020:
const costForExtraMember = 170;

//riksnorm 2020:
const statusCost = {
  single: 3150,
  partner: 5680,
};

export const initialState = {
  status: "single",
  familyMembers: 1,
  sum: statusCost.single + memberCosts[1],
  //riksnorm 2020:
  kids: [
    {
      age: "0-1",
      amount: 0,
      cost: 2170,
    },
    {
      age: "1-2",
      amount: 0,
      cost: 2430,
    },
    {
      age: "3",
      amount: 0,
      cost: 2160,
    },
    {
      age: "4-6",
      amount: 0,
      cost: 2430,
    },
    {
      age: "7-10",
      amount: 0,
      cost: 2170,
    },
    {
      age: "11-14",
      amount: 0,
      cost: 3510,
    },
    {
      age: "15-18",
      amount: 0,
      cost: 3950,
    },
    {
      age: "19-20",
      amount: 0,
      cost: 3980,
    },
  ],
};

const SET_STATUS = "SET_STATUS";
export const setStatusAction = (status) => ({
  type: SET_STATUS,
  payload: status,
});

const SET_CHILDREN = "SET_CHILDREN";
export const addChildAction = ({ age, amount }) => ({
  type: SET_CHILDREN,
  payload: { age, amount },
});

export function reducer(state = initialState, { type, payload }) {
  let newState = {
    ...state,
  };

  switch (type) {
    case SET_STATUS: {
      newState.status = payload;
      break;
    }

    case SET_CHILDREN: {
      const { age, amount } = payload;

      const kidToChangeIndex = state.kids.findIndex(byAgeRange(age));
      newState.kids = newState.kids.map((kid, index) =>
        index === kidToChangeIndex ? { ...kid, amount } : kid
      );
      break;
    }

    default:
      return state;
  }

  newState.familyMembers = countFamilyMembers(newState);
  newState.sum = calculateSum(newState);

  return newState;
}

/**
 **  Reducer-specific utility functions
 **/

//factory function to find the index of a child by age range
//ageInp is the input from the user when the user gives the amount of children in a specific age range
function byAgeRange(ageInp) {
  return function (kid) {
    //console.log(kid.age.length);
    if (ageInp === kid.age) return true;
    return false;
  };
}

function countFamilyMembers({ status, kids }) {
  const amountOfAdults = status === "single" ? 1 : 2;
  const amountOfKids = kids.reduce((acc, cur) => acc + (cur.amount || 0), 0); //returns the amount of kids, if the input field is falsy, like an empty string, it returns 0
  //console.log("adults: ", amountOfAdults, "kids: ", amountOfKids);
  return amountOfAdults + amountOfKids;
}

//calculates and returns the TOTAL FAMILY EXPENSES depending on:
//1. statusCost: relationship (single or partner), 2. memberCost: family members and 3. costOfKids: expenses for the kids
//all of these expenses according to the Swedish riksnorm in 2020
function calculateSum({ status, kids, familyMembers }) {
  const costOfStatus = statusCost[status];
  let memberCost;

  if (familyMembers > 7) {
    const surplusMembers = familyMembers - 7;
    memberCost = memberCosts[7] + surplusMembers * costForExtraMember;
  } else {
    memberCost = memberCosts[familyMembers];
  }

  const costOfKids = kids.reduce(
    (acc, { amount, cost }) => (amount ? acc + amount * cost : acc),
    0
  );

  return costOfStatus + memberCost + costOfKids;
}
