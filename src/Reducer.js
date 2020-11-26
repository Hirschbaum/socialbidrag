const memberCosts = {
  1: 1010,
  2: 1120,
  3: 1410,
  4: 1600,
  5: 1850,
  6: 2090,
  7: 2260,
  8: 2430,
  9: 2600,
  10: 2770,
  11: 2940,
  12: 3110,
  13: 3280,
  14: 3450,
  15: 3620,
};

const statusCost = {
  single: 3150,
  partner: 5680,
};

export const initialState = {
  status: "single",
  familyMembers: 1,
  sum: statusCost.single + memberCosts[1],
  kids: [
    {
      age: [0],
      amount: 0,
      cost: 2170,
    },
    {
      age: [1, 2],
      amount: 0,
      cost: 2430,
    },
    {
      age: [3],
      amount: 0,
      cost: 2160,
    },
    {
      age: [4, 6],
      amount: 0,
      cost: 2430,
    },
    {
      age: [7, 10],
      amount: 0,
      cost: 2170,
    },
    {
      age: [11, 14],
      amount: 0,
      cost: 3510,
    },
    {
      age: [15, 18],
      amount: 0,
      cost: 3950,
    },
    {
      age: [19, 20],
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
  switch (type) {
    case SET_STATUS: {
      const changesToSingle = payload === "single";
      const differenceInStatusCost = statusCost.partner - statusCost.single;

      const familyMembers = state.familyMembers + changesToSingle ? -1 : 1;
      const sum =
        state.sum + memberCosts[Math.min(familyMembers, 15)] + changesToSingle
          ? -differenceInStatusCost
          : differenceInStatusCost;

      return {
        status: payload,
        familyMembers,
        sum,
      };
    }

    case SET_CHILDREN: {
      const { age, amount } = payload;

      const [sumForAdults, amountOfAdults] =
        state.status === "single"
          ? [statusCost.single, 1]
          : [statusCost.partner, 2];

      const kidToChangeIndex = state.kids.findIndex(byAgeRange(age)); //cannot read property 'findInedx' of undefined
      const updatedKids = state.kids.map(
        amountToKids(kidToChangeIndex, amount)
      );
      const [
        sumForKids,
        amountOfKids,
      ] = state.kids.reduce(kidsToSumAndAmountTuple, [0, 0]);

      const familyMembers = amountOfAdults + amountOfKids;
      const sumForMembers = memberCosts[Math.min(familyMembers, 15)];
      const totalSum = sumForAdults + sumForKids + sumForMembers;

      return {
        ...state,
        kids: updatedKids,
        sum: totalSum,
        familyMembers,
      };
    }

    default:
      return state;
  }
}

/**
 *  Reducer-specific utility functions
 */

//factory function to find the index of a child by age range
function byAgeRange(age) {
  return function (kid) {
    console.log(kid.age.length);
    const [min, max] = kid.age; //e.g. [4, 6] or [3]
    if ((age >= min && age <= max) || age === min || age === max) return true;
    return false;
  };
}

//to find a kid and the index to the kid, and return kid with the new amount of kid
function amountToKids(index, amount) {
  return (kid, idx) => {
    if (idx === index) {
      return {
        ...kid,
        amount,
      };
    }

    return kid;
  };
}

//to reduce the expenses for the kid(s)
function kidsToSumAndAmountTuple(acc, cur) {
  const [sum, amount] = acc;

  return [sum + cur.amount * cur.cost, amount + cur.amount];
}

/*other version of SET_STATUS:
this one works better
switch (type) {
    case SET_STATUS: {
      const changesToPartner = payload === "partner"; //if user chose the "partner" radio button

      const familyMembers = changesToPartner ? 2 : 1; //if the user chose the "partner" instead of "single" radio button
      const sum = changesToPartner //if the user chose the "partner" instead of "single" radio button, otherwise the costs for single in sum
        ? statusCost.partner + memberCosts[2]
        : statusCost.single + memberCosts[1];

      return {
        status: payload,
        familyMembers,
        sum,
      };
    }

*/
