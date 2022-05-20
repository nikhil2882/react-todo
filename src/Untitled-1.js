/**
 * 1. login
 * 2. dashboard => todays, total order delivered, total earnings
 *    list of last 5 orders, ratings from customer
 * 3. sidebar => order history, passbook, logout, profile,
 * 4. profile screen
 * 5. order history screen
 * 6. passbook
 */

const object = [
  {
    title: "0-0",
    key: "0-0",
    expanded: true,
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          {
            title: "0-0-0-0",
            key: "0-0-0-0",
            isLeaf: false,
          },
          {
            title: "0-0-0-1",
            key: "0-0-0-1",
            isLeaf: true,
          },
          {
            title: "0-0-0-2",
            key: "0-0-0-2",
            isLeaf: true,
          },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          {
            title: "0-0-1-0",
            key: "0-0-1-0",
            isLeaf: true,
          },
          {
            title: "0-0-1-1",
            key: "0-0-1-1",
            isLeaf: true,
          },
          {
            title: "0-0-1-2",
            key: "0-0-1-2",
            isLeaf: false,
          },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2",
        isLeaf: true,
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      {
        title: "0-1-0-0",
        key: "0-1-0-0",
        isLeaf: true,
      },
      {
        title: "0-1-0-1",
        key: "0-1-0-1",
        isLeaf: false,
        children: [],
      },
      {
        title: "0-1-0-2",
        key: "0-1-0-2",
        isLeaf: true,
      },
    ],
  },
  {
    title: "0-2",
    key: "0-2",
    isLeaf: true,
  },
];
