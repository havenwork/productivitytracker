const calculateDays = (endDate) => {
    const givenDate = new Date(endDate);

    const today = new Date();

    const differenceInMs = givenDate - today;

    const remainingDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    if (remainingDays > 0) {
      return `${Math.abs(remainingDays)} days remaining`;
    } else if (remainingDays === 0) {
      return `${Math.abs(remainingDays)} days remaining`;
    } else {
      return `${Math.abs(remainingDays)} days overdue`;
    }
  };

  export default calculateDays