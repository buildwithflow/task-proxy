export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const zapierUrl = "https://hooks.zapier.com/hooks/catch/23375675/uo2432o/"; // <- Hier deine echte Zapier-URL einsetzen

  const response = await fetch(zapierUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body),
  });

  if (!response.ok) {
    return res.status(500).send('Fehler beim Weiterleiten');
  }

  res.status(200).send('Daten erfolgreich weitergeleitet');
}
