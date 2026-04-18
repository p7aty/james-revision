# James's Revision Site

Static HTML revision planner for James's A-Level summer 2026 exams.

**Live at:** https://revision.brbconnect.co.uk/

## Structure

```
/
├── index.html              Today's session (auto-highlighted via JS)
├── calendar.html           Full 62-day master plan
├── progress.html           RAG breakdown and papers log
├── exams.html              All 13 papers with times/rooms/seats
├── packs/
│   ├── index.html          Pack listing by subject
│   └── *.html              Individual study packs (built just-in-time)
├── assets/
│   ├── style.css           Shared styling
│   └── schedule.js         Master schedule data + rendering logic
```

## How it works

- **No backend.** All logic is in `assets/schedule.js` which contains the full 62-day plan as a JS object.
- **"Today" detection** — JS reads `new Date()` on load and highlights the matching day.
- **Past days** are auto-faded. **Future days** are full-colour.
- **Exam countdown** updates daily based on dates in the schedule.

## Deployment on Holly

Served as a systemd service on port 8770, exposed via Cloudflare Tunnel.

- Systemd unit: `/etc/systemd/system/revision-site.service`
- Site files: `/home/ubuntu/revision-site/`
- Cloudflare Tunnel: `89faa530-9440-43c5-b30b-07ff4caa9053`
- DNS: `revision.brbconnect.co.uk` CNAME → tunnel
- Logs: `/home/ubuntu/revision-site.log`

## Updating content

**To change a day's tasks:** edit `assets/schedule.js`. Changes propagate to index, calendar, and today views automatically.

**To add a new study pack:**
1. Create the pack HTML file in `packs/` using an existing pack as template
2. Update the `pack:` field in `schedule.js` for the relevant day
3. Add it to `packs/index.html` in the relevant subject section

**Deploying changes:**
```bash
cd /home/ubuntu/revision-site
git pull
sudo systemctl restart revision-site  # (optional, static files served fresh)
```

## Local testing

```bash
cd /home/ubuntu/revision-site
python3 -m http.server 8000
# Open http://localhost:8000
```
