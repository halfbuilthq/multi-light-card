# Publishing and HACS checklist

Repository: `halfbuilthq/multi-light-card`

## HACS availability

**Multi-Light Card** is included in the default HACS catalogue. Users can search
for it in HACS and download it without adding a custom repository.

## Release process

1. Confirm CI and HACS validation pass on `main` without ignored checks.
2. Update `package.json`, `package-lock.json` and the changelog, run
   `npm run check`, then commit and push the matching `vX.Y.Z` release tag.
3. Publish a full GitHub release containing `multi-light-card.js`.
4. Verify a clean installation and update through HACS.

HACS discovers releases after publication; the update may not appear immediately.
