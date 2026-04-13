// fraud-detection.js

/**
 * Fraud Detection Service
 * Includes:
 * - Anomaly Detection
 * - Suspicious Activity Monitoring
 * - Real-time Alerts
 */

class FraudDetectionService {
    constructor() {
        this.suspiciousActivities = [];
        this.alerts = [];
    }

    // Method to detect anomalies
    detectAnomalies(transactions) {
        const anomalies = transactions.filter(transaction => this.isAnomalous(transaction));
        this.suspiciousActivities.push(...anomalies);
        return anomalies;
    }

    // Placeholder for an anomalous detection logic
    isAnomalous(transaction) {
        // Implementation of anomaly detection
        return transaction.amount > 10000; // Example condition
    }

    // Method to monitor suspicious activities
    monitorSuspiciousActivities() {
        if (this.suspiciousActivities.length) {
            this.sendAlerts(this.suspiciousActivities);
        }
    }

    // Method to send real-time alerts
    sendAlerts(activities) {
        activities.forEach(activity => {
            this.alerts.push(`Alert: Suspicious activity detected - ${JSON.stringify(activity)}`);
            console.log(`Alert sent for: ${JSON.stringify(activity)}`);
        });
    }
}

// Sample usage
const fraudService = new FraudDetectionService();
const sampleTransactions = [
    { id: 1, amount: 20000 },
    { id: 2, amount: 5000 }
];
const detectedAnomalies = fraudService.detectAnomalies(sampleTransactions);
console.log(detectedAnomalies);
fraudService.monitorSuspiciousActivities();
