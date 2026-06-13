// This is the js utility function to get the older dates based on gaps

const getRevisionDates = (gaps) => {

    const today = new Date();

    return gaps.map((gap) => {

        const pastDate = new Date(today);

        pastDate.setDate(
            today.getDate() - gap
        );

        return pastDate;
    });
};

module.exports = getRevisionDates;