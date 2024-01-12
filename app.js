// input - [[11,34,42,60,83],[2,23,38,51,76],[17,46,55,79,88]], [11, 2, 17, 23, 34, 38, 42, 46, 51, 55, 60, 76, 79, 83, 88]

// patterns -
// Early Seven : The ticket with any seven number called out, prize money is 120
// Laddu Singh: Middle number of middle row is called out, prize money is 100
// Four Corners: First and last number of first and last row is called out, prize money is 150
// Top Line: The ticket with all the numbers of the top row called out, prize money is 170
// Middle Line: The ticket with all the numbers of the middle row called out, prize money is 170
// Bottom Line: The ticket with the numbers of the bottom row called out, prize money is 170
// Full House: The ticket with all the 15 numbers called out, prize money is 400


// assuming the ticket size is 3x5
const ticket = [[11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
// const calls = [11, 2, 17, 23, 34, 38, 42, 46, 51, 55, 60, 76, 79, 83, 88];
const calls = [141, 112, 113, 115, 111, 122, 123, 121, 125, 119, 69, 76, 79, 83, 18];

const prizeMoney = {
  earlySeven: 120,
  ladduSingh: 100,
  fourCorners: 150,
  topLine: 170,
  middleLine: 170,
  bottomLine: 170,
  fullHouse: 400
}

const prizesWon = {};

// method to check earlySeven and if yes, also return the last index of the number from calls array at which the earlySeven is formed
const checkEarlySeven = (ticket, calls) => {
  let count = 7;
  let earlySeven = calls.map((num) => {
    return ticket.map((row) => {
      return row.filter((number) => {
        return number === num;
      })
    }).flat()
  }).flat();

  return earlySeven.length >= count ? calls.indexOf(earlySeven[count - 1]) : false;
}

// method to check if the middle number of middle row is called out and if yes, also return the index of the number from calls array
const checkLadduSingh = (ticket, calls) => {
  const middleRow = ticket[Math.floor(ticket.length / 2)];
  const middleNumber = middleRow[Math.floor(middleRow.length / 2)];
  const middleNumberIndex = calls.indexOf(middleNumber);
  return middleNumberIndex !== -1 ? middleNumberIndex : false;
}

// method to check if the first and last number of first and last row is called out and if yes, 
// also return the index of the number from calls array
const checkFourCorners = (ticket, calls) => {
  const cornerNumbers = [];
  cornerNumbers.push(ticket[0][0]);
  cornerNumbers.push(ticket[0][ticket[0].length - 1]);
  cornerNumbers.push(ticket[ticket.length - 1][0]);
  cornerNumbers.push(ticket[ticket.length - 1][ticket[ticket.length - 1].length - 1]);

  let fourCorners = calls.map((num) => {
    return cornerNumbers.filter((number) => {
      return number === num;
    })
  }).flat();

  return fourCorners.length >= 4 ? calls.indexOf(fourCorners[3]) : false;
}

// method to check if the top row is called out and if yes, 
// also return the index of the number from calls array
const checkTopLine = (ticket, calls) => {
  const topRow = ticket[0];
  let topLine = calls.map((num) => {
    return topRow.filter((number) => {
      return number === num;
    })
  }).flat();

  return topLine.length >= topRow.length ? calls.indexOf(topLine[topRow.length - 1]) : false;
}

// method to check if the middle row is called out and if yes,
// also return the index of the number from calls array
const checkMiddleLine = (ticket, calls) => {
  const middleRow = ticket[Math.floor(ticket.length / 2)];
  let middleLine = calls.map((num) => {
    return middleRow.filter((number) => {
      return number === num;
    })
  }).flat();
  return middleLine.length >= middleRow.length ? calls.indexOf(middleLine[middleRow.length - 1]) : false;
}

// method to check if the bottom row is called out and if yes,
// also return the index of the number from calls array
const checkBottomLine = (ticket, calls) => {
  const bottomRow = ticket[ticket.length - 1];
  let bottomLine = calls.map((num) => {
    return bottomRow.filter((number) => {
      return number === num;
    })
  }).flat();

  return bottomLine.length >= bottomRow.length ? calls.indexOf(bottomLine[bottomRow.length - 1]) : false;
}

// method to check if the full house is called out and if yes,
// also return the index of the number from calls array
const checkFullHouse = (ticket, calls) => {
  let fullHouse = calls.map((num) => {
    return ticket.map((row) => {
      return row.filter((number) => {
        return number === num;
      })
    }).flat()
  }).flat();

  return fullHouse.length >= ticket.length * ticket[0].length ? calls.indexOf(fullHouse[ticket.length * ticket[0].length - 1]) : false;
}

// method to mark the ticket
const markTicket = (ticket, calls) => {
  const markedTicket = ticket.map((row) => {
    return row.map((number) => {
      return calls.includes(number) ? 'X' : number;
    });
  });
  return markedTicket;
}

// method to check if the pattern is formed and if yes,
// also return the index of the number from calls array
const checkPattern = (ticket, calls) => {
  const earlySeven = checkEarlySeven(ticket, calls);
  const ladduSingh = checkLadduSingh(ticket, calls);
  const fourCorners = checkFourCorners(ticket, calls);
  const topLine = checkTopLine(ticket, calls);
  const middleLine = checkMiddleLine(ticket, calls);
  const bottomLine = checkBottomLine(ticket, calls);
  const fullHouse = checkFullHouse(ticket, calls);

  if (earlySeven) prizesWon.earlySeven = { index: earlySeven, prize: prizeMoney.earlySeven };
  if (ladduSingh) prizesWon.ladduSingh = { index: ladduSingh, prize: prizeMoney.ladduSingh };
  if (fourCorners) prizesWon.fourCorners = { index: fourCorners, prize: prizeMoney.fourCorners };
  if (topLine) prizesWon.topLine = { index: topLine, prize: prizeMoney.topLine };
  if (middleLine) prizesWon.middleLine = { index: middleLine, prize: prizeMoney.middleLine };
  if (bottomLine) prizesWon.bottomLine = { index: bottomLine, prize: prizeMoney.bottomLine };
  if (fullHouse) prizesWon.fullHouse = { index: fullHouse, prize: prizeMoney.fullHouse };

  return prizesWon;
}

console.log("Initial Ticket: ", ticket);
console.log("Calls: ", calls);
console.log("Final Ticket: ", markTicket(ticket, calls));
console.log("PrizesWon: ", checkPattern(ticket, calls));
console.log("Top Three Prizes: ", Object.keys(prizesWon).sort((a, b) => { return prizesWon[b].prize - prizesWon[a].prize }).slice(0, 3));

