export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
        return res.status(500).json({ status: 'error', message: 'GOOGLE_SCRIPT_URL is not configured' });
    }

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        const result = await response.json();

        if (!response.ok || result.status !== 'success') {
            return res.status(502).json({ status: 'error', message: result.message || 'Google Sheets rejected the submission' });
        }

        return res.status(200).json({ status: 'success' });
    } catch (error) {
        return res.status(500).json({ status: 'error', error: error.message });
    }
}