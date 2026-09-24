# Deployment Checklist for Clean Commute Challenge

Use this checklist to ensure smooth deployment and launch.

## Pre-Deployment

- [ ] Repository is pushed to GitHub
- [ ] All team members have access to the repository
- [ ] Node.js dependencies are documented in `package.json`
- [ ] Environment variables are documented in `.env.local.example`

## Vercel Setup

- [ ] Vercel account created
- [ ] Project imported from GitHub
- [ ] Initial deployment successful (build passes)
- [ ] Deployment URL noted (e.g., `clean-commute-challenge.vercel.app`)

## Database Setup

- [ ] Vercel Postgres database created
- [ ] Database name: `clean-commute-db`
- [ ] Environment variables auto-populated by Vercel
- [ ] `/api/setup` endpoint called successfully
- [ ] Database tables created (verify in Vercel dashboard)

## Environment Configuration

- [ ] `NEXT_PUBLIC_BASE_URL` set to production URL
- [ ] Environment variable saved in Vercel dashboard
- [ ] Application redeployed after setting environment variable

## QR Code Generation

- [ ] Visited `/admin/qr` page
- [ ] Downloaded QR codes for all office locations:
  - [ ] Bangalore Office
  - [ ] Mumbai Office
  - [ ] Delhi Office
  - [ ] Pune Office
  - [ ] Hyderabad Office
- [ ] QR codes printed (high quality, A4/Letter size)
- [ ] QR codes tested by scanning with mobile phone
- [ ] QR codes open the correct log form with pre-selected location

## Functionality Testing

### Basic Flow
- [ ] Home page loads correctly
- [ ] "Log Your Commute" button works
- [ ] Entry form displays all travel modes
- [ ] Form validation works (required fields)
- [ ] Form submission succeeds
- [ ] Success message appears after submission
- [ ] Dashboard link works

### QR Code Flow
- [ ] Scan QR code with phone
- [ ] Opens correct office location
- [ ] Location is pre-selected in form
- [ ] Can select travel mode on mobile
- [ ] Can enter kilometers on mobile
- [ ] Mobile form submission works
- [ ] Mobile layout is responsive and usable

### Dashboard
- [ ] Dashboard loads without errors
- [ ] Shows "No Data Yet" before entries (if fresh)
- [ ] After test entry, shows:
  - [ ] Total entries count
  - [ ] Total kilometers count
  - [ ] Travel mode breakdown chart
  - [ ] Office location table
- [ ] Charts render correctly
- [ ] Responsive on mobile and desktop

### CSV Export
- [ ] Export CSV button visible on dashboard
- [ ] CSV download starts on click
- [ ] CSV file opens in Excel/Sheets
- [ ] CSV contains correct columns
- [ ] CSV data matches dashboard

## Post-Deployment Configuration

- [ ] QR codes posted at all office locations
- [ ] QR code posters include:
  - [ ] Clear title "Clean Commute Challenge"
  - [ ] Office location name
  - [ ] Instructions "Scan to log your commute"
  - [ ] Contact info for support

## Communication

- [ ] Announcement email drafted
- [ ] Email includes:
  - [ ] Challenge dates (October 2026)
  - [ ] How to participate
  - [ ] Link to app
  - [ ] QR code locations
  - [ ] Travel modes accepted
  - [ ] Privacy assurance (zero PII)
  - [ ] Contact for questions
- [ ] Internal Slack/Teams announcement posted
- [ ] Posters printed for office bulletin boards

## Monitoring Setup

- [ ] Vercel deployment notifications enabled
- [ ] Assigned someone to check dashboard daily
- [ ] Plan for weekly stats summary emails
- [ ] Support channel created (email/Slack)

## Launch Day

- [ ] All QR codes are in place
- [ ] Test one complete flow before announcements
- [ ] Send announcement emails
- [ ] Post on internal channels
- [ ] Monitor for first few submissions
- [ ] Be available for questions in first 2 hours

## First Week

- [ ] Check dashboard daily
- [ ] Respond to user questions within 24 hours
- [ ] Monitor Vercel logs for errors
- [ ] Gather feedback from early users
- [ ] Make quick fixes if needed

## Ongoing

- [ ] Weekly participation stats shared
- [ ] Celebrate milestones (100 entries, 1000 km, etc.)
- [ ] Monthly recognition for top participating office
- [ ] Export data for final report at end of October

## Troubleshooting Contacts

| Issue | Contact |
|-------|---------|
| Technical/deployment | [GitHub repo issues] |
| QR codes not working | [Tech volunteer name] |
| Database issues | [Tech volunteer name] |
| User questions | [Challenge organizer name] |

## Success Metrics

Target for October 2026:
- [ ] 80%+ employee participation
- [ ] 5000+ total km logged
- [ ] 50%+ using public transport/bike/walk
- [ ] Zero data/privacy incidents
- [ ] Positive user feedback

---

**Last updated**: [Date]  
**Deployed by**: [Name]  
**Vercel URL**: [URL]
