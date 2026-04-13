// notification.js

class NotificationService {
    constructor() {
        // Initialize any required properties
    }

    sendTransactionAlert(userId, transactionDetails) {
        const message = `Transaction of $${transactionDetails.amount} was made on ${transactionDetails.date}.`;
        this.sendNotification(userId, message);
    }

    sendSecurityNotification(userId, details) {
        const message = `Security alert: ${details}`;
        this.sendNotification(userId, message);
    }

    sendPromotionalMessage(userId, promotionDetails) {
        const message = `Exclusive Offer: ${promotionDetails}`;
        this.sendNotification(userId, message);
    }

    sendNotification(userId, message) {
        // Logic to send the notification, such as through a push notification service
        console.log(`Sending notification to user ${userId}: ${message}`);
        // Here you would integrate with a real push notification service
    }
}

module.exports = new NotificationService();