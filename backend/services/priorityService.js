function calculateScore(notification) {

    let score = 0;

    // Priority weight
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

    // Recency score
    const now = new Date().getTime();

    const created = new Date(notification.Timestamp).getTime();

    const diffHours = (now - created) / (1000 * 60 * 60);

    score += Math.max(0, 50 - diffHours);

    return score;
}

function getTopNotifications(notifications) {

    notifications.forEach(n => {

        n.score = calculateScore(n);

    });

    notifications.sort((a, b) => b.score - a.score);

    return notifications.slice(0, 10);
}

module.exports = {

    getTopNotifications

};