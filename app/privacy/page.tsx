import "./simple.min.css"

const Page = () => {
    return (
        <div>
            <h1>Privacy Policy for TankTally</h1>

            <p><em>Last updated: 2026-02-03</em></p>

            <h2>Introduction</h2>
            <p>This privacy policy explains how TankTally ("we", "us", or "our") collects, uses, and protects your information when you use our mobile application ("App"). TankTally is a motorcycle fuel and maintenance tracker.</p>

            <h2>Information We Collect</h2>

            <h3>Location Data</h3>
            <p>The App accesses your device's location (GPS) for the following purposes only:</p>
            <ul>
                <li><strong>Speedometer:</strong> To display your current speed while you use the Speedometer screen.</li>
                <li><strong>Trip distance tracking:</strong> When you start tracking a trip from the Speedometer, the App uses location to calculate distance travelled in real time and to add that distance to your trip and your bike's total mileage.</li>
            </ul>
            <p>If you grant background location permission, trip distance tracking can continue when you leave the Speedometer screen or switch to another app. If you do not grant background location, tracking works only while the App is open on the Speedometer screen.</p>
            <p><strong>We do not send your location or any location-derived data to our servers or to any third party.</strong> All location data is processed on your device. Only derived values (e.g. speed, distance) and minimal session data needed to compute distance are stored locally on your device. You can revoke location access at any time in your device settings.</p>
            <p>GPS-based data (such as speed and distance) may not be accurate; precision depends on your device and conditions. Such data is for estimated values only and must not be relied upon as precise or used for any legal purpose.</p>

            <h3>Analytics Data</h3>
            <p>We use Vexo Analytics to collect anonymous usage data about how you interact with our app. This helps us improve the app experience and understand how users utilize our features. The analytics data includes:</p>
            <ul>
                <li>App usage patterns</li>
                <li>Feature interaction statistics</li>
                <li>Basic device information</li>
                <li>App performance metrics</li>
            </ul>

            <h3>Local Storage</h3>
            <p>All your bike-related data (including tank size, consumption, trips, maintenance logs, photos, and settings) are stored locally on your device. We do not collect or store this information on our servers.</p>

            <h3>Notifications</h3>
            <p>If you allow notifications, the App may send you a reminder while trip distance tracking is running in the background, to help you remember to stop tracking and add the distance to your trip when you are done riding. We do not use notifications for marketing or share notification data with third parties.</p>

            <h2>How We Use Your Information</h2>
            <p>The analytics data we collect is used solely for:</p>
            <ul>
                <li>Improving app functionality and user experience</li>
                <li>Identifying and fixing technical issues</li>
                <li>Understanding which features are most valuable to users</li>
                <li>Making data-driven decisions about future app development</li>
            </ul>

            <h2>Data Storage and Security</h2>
            <ul>
                <li>Your personal tank data is stored exclusively on your device</li>
                <li>Analytics data is processed and stored securely by Vexo Analytics</li>
                <li>We do not sell, trade, or transfer your information to third parties</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>Our app uses the following third-party services:</p>
            <ul>
                <li>Vexo Analytics for app usage analytics</li>
            </ul>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Revoke location access at any time in your device settings (the Speedometer and trip tracking will not work without it)</li>
                <li>Revoke notification permission in your device settings</li>
                <li>Opt-out of analytics collection through your device settings</li>
                <li>Delete all local app data by uninstalling the app</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>Our app does not knowingly collect information from children under 13 years of age.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us at:<br />
                <a href="mailto:twerrax@gmail.com">Webmaster</a></p>
        </div>

    );
};
export default Page;