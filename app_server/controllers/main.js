
/* Get Homepage */
const index = (req, res) => {
    res.render ('index', { tittle: 'Travlr Getaways'});

};
module.exports = {
    index
};