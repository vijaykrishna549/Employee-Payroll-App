const stringifyDate = (date) => {
    const options = { day: 'numeric', month: 'short', year:'numeric' };
    const newDate = !date ? "undefied" :
    new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
    return newDate;
}