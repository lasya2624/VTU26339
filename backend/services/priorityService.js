const Log = require("../middleware/logger");

function calculateScore(notification) {

    let score = 0;

    switch (notification.Type) {

        case "Placement":
            score += 100;
            break;

        case "Result":
            score += 80;
            break;

        case "Event":
            score += 60;
            break;

        default:
            score += 40;
    }

    // Recency Score
    const createdTime = new Date(notification.Timestamp).getTime();
    const currentTime = new Date().getTime();

    const diffHours = (currentTime - createdTime) / (1000 * 60 * 60);

    score += Math.max(0, 50 - diffHours);

    return score;
}

async function getTopNotifications(notifications) {

    notifications.forEach(notification => {

        notification.priorityScore = calculateScore(notification);

    });

    notifications.sort((a, b) => b.priorityScore - a.priorityScore);

    return notifications.slice(0, 10);
}

module.exports = {
    getTopNotifications
};