# Goel Astro — Setup Guide

This guide walks you through setting up the Google Sheets integration step by step.

---

## Step 1: Create a Google Sheet

1. Open [Google Sheets](https://sheets.google.com) in your browser
2. Click **"Blank spreadsheet"** to create a new sheet
3. Rename the sheet to: **"Astrology Bookings"**
4. In **Row 1**, add these headers (one per column):

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Phone | Email | Gender | DOB | Birth Time | Birth Place | Service | Amount | Question | Language | Partner Name | Partner DOB | Partner Birth Time | Partner Birth Place | Payment Status |

---

## Step 2: Create the Google Apps Script

1. Open your Google Sheet
2. Click: **Extensions → Apps Script**
3. A new tab will open with a code editor
4. Delete all the existing code
5. **Copy and paste** the following code:

```javascript
// ============================================
// GOEL ASTRO — Google Apps Script
// Saves booking form data to Google Sheets
// ============================================

// IMPORTANT: Replace with your email address for notifications
var NOTIFICATION_EMAIL = "YOUR_EMAIL_HERE@gmail.com";

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // IST timestamp
    var now = new Date();
    var istOffset = 5.5 * 60 * 60 * 1000;
    var istTime = new Date(now.getTime() + istOffset);
    var timestamp = Utilities.formatDate(istTime, "GMT", "dd/MM/yyyy HH:mm:ss") + " IST";

    // Add row to sheet
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.phone || "",
      data.email || "",
      data.gender || "",
      data.dob || "",
      data.birthTime || "",
      data.birthPlace || "",
      data.service || "",
      data.amount || "",
      data.question || "",
      data.language || "",
      data.partnerName || "",
      data.partnerDob || "",
      data.partnerBirthTime || "",
      data.partnerBirthPlace || "",
      "Pending"
    ]);

    // Send email notification
    sendNotificationEmail(data, timestamp);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Booking saved!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Goel Astro API is working!" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendNotificationEmail(data, timestamp) {
  try {
    var subject = "New Booking — " + (data.name || "Unknown") + " — " + (data.service || "Consultation");

    var body = "GOEL ASTRO — NEW BOOKING\n";
    body += "================================\n\n";
    body += "Time: " + timestamp + "\n\n";
    body += "PERSONAL DETAILS:\n";
    body += "   Name: " + (data.name || "N/A") + "\n";
    body += "   Phone: " + (data.phone || "N/A") + "\n";
    body += "   Email: " + (data.email || "N/A") + "\n";
    body += "   Gender: " + (data.gender || "N/A") + "\n\n";
    body += "BIRTH DETAILS:\n";
    body += "   DOB: " + (data.dob || "N/A") + "\n";
    body += "   Birth Time: " + (data.birthTime || "N/A") + "\n";
    body += "   Birth Place: " + (data.birthPlace || "N/A") + "\n\n";
    body += "CONSULTATION:\n";
    body += "   Service: " + (data.service || "N/A") + "\n";
    body += "   Amount: Rs." + (data.amount || "N/A") + "\n";
    body += "   Language: " + (data.language || "N/A") + "\n";
    body += "   Question: " + (data.question || "No specific question") + "\n\n";

    if (data.partnerName) {
      body += "PARTNER DETAILS:\n";
      body += "   Partner Name: " + data.partnerName + "\n";
      body += "   Partner DOB: " + (data.partnerDob || "N/A") + "\n";
      body += "   Partner Birth Time: " + (data.partnerBirthTime || "N/A") + "\n";
      body += "   Partner Birth Place: " + (data.partnerBirthPlace || "N/A") + "\n\n";
    }

    body += "PAYMENT STATUS: Pending\n\n";
    body += "================================\n";
    body += "WhatsApp link: https://wa.me/" + (data.phone || "").replace("+", "") + "\n";

    MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
  } catch (emailError) {
    // Booking will still be saved even if email fails
    console.log("Email send failed: " + emailError.toString());
  }
}
```

6. On **Line 6**, replace `YOUR_EMAIL_HERE@gmail.com` with your actual email address
7. Press **Ctrl+S** (or Cmd+S on Mac) to save

---

## Step 3: Deploy as a Web App

1. In the Apps Script editor, click the **"Deploy"** button in the top-right corner
2. Select **"New deployment"**
3. Click the gear icon → select **"Web app"**
4. Use these settings:
   - **Description:** "Goel Astro Booking API"
   - **Execute as:** "Me"
   - **Who has access:** "Anyone"
5. Click **"Deploy"**
6. A permissions popup will appear — click **"Review permissions"**
7. Select your Google account
8. Click "Advanced" → "Go to Goel Astro (unsafe)"
9. Click **"Allow"**
10. You will receive a **URL** — copy it! This is your Web App URL.

    It will look something like: `https://script.google.com/macros/s/AKfycb.../exec`

---

## Step 4: Add the URL to your website

1. Open the `.env.local` file in the project root directory
2. Paste your copied URL after `NEXT_PUBLIC_GOOGLE_SCRIPT_URL=`:

```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Save the file
4. If the dev server is running, restart it: `npm run dev`

---

## Step 5: Replace the UPI QR Code

1. Download your QR code from your UPI app (Google Pay / PhonePe / Paytm)
2. Name the file `upi-qr.jpeg`
3. Replace the file at `public/images/upi-qr.jpeg` with your actual QR image

---

## Step 6: Test the integration

1. Start the website with `npm run dev`
2. Go to the `/book` page and fill out the form
3. Submit the form
4. Check your Google Sheet — a new row should appear
5. Check your email — you should receive a notification
6. The thank-you page should show the UPI QR and WhatsApp button

---

## Troubleshooting

**Form submits but data doesn't appear in the sheet?**
- Is the Apps Script URL correctly added to `.env.local`?
- Is the Apps Script deployed with "Anyone" access?
- Check the browser console for any errors

**Email notification not arriving?**
- Did you enter the correct email in the Apps Script?
- Check your Gmail spam folder

**"Script function not found" error?**
- Make sure the `doPost` function exists in the Apps Script
- Redeploy: Deploy → Manage deployments → Edit → Version: New version → Deploy

---

## Deploy to Vercel

1. Push the code to GitHub
2. Go to [Vercel](https://vercel.com) → "Import Project"
3. Select your GitHub repository
4. Add all the values from `.env.local` as Environment Variables
5. Click "Deploy" — Done!
