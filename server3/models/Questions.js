module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define("Questions", {
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })
    return Questions
}